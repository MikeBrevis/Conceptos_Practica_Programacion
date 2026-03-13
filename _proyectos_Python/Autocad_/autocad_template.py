import win32com.client
import re
import sys
import time
from datetime import datetime
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def probar_conexion_autocad():
    try:
        # Intentamos capturar la instancia de AutoCAD abierta
        acad = win32com.client.GetActiveObject("AutoCAD.Application")
        doc = acad.ActiveDocument
        nombre_dwg = doc.Name

        # Lógica de extracción de los 4 dígitos
        match = re.search(r'\d{4}', nombre_dwg)
        if match:
            return match.group()
        else:
            print("❌ Error: No se encontraron 4 dígitos consecutivos en el nombre del archivo de AutoCAD.")
            return None

    except Exception as e:
        print(f"❌ Error crítico: No se pudo detectar AutoCAD abierto.")
        print(f"Detalle: {e}")
        return None

def actualizar_cajetin(cliente_val, obra_val, vendedor_val, id_proyecto_val, sistema_val):

    # Mapeo de Sucursales a nombres de Vendedores
    mapeo_vendedores = {
        "Iquique": "Marcelo Ahumada",
        "Antofagasta": "Rodrigo Tapia",
        "ANDECORP S.P.A.": "Daniel Molina",
        "Talcahuano": "Alvaro Villalobos",
        "Puerto Montt": "Meliza Baez",
        "Puchuncaví": "José Manterola"
    }
    
    # Transformamos el valor (que originalmente trae el nombre de sucursal) al del vendedor correspondiente.
    # Si por alguna razón la sucursal no está en la lista (ej. una nueva sucursal), usaremos el nombre original por defecto.
    vendedor_val = mapeo_vendedores.get(vendedor_val, vendedor_val)

    try:
        # 1. Conectar a AutoCAD
        acad = win32com.client.GetActiveObject("AutoCAD.Application")
        doc = acad.ActiveDocument
        model_space = doc.ModelSpace
        
        # Opcional: Si el cajetín está en el Layout (PaperSpace) y no en el Modelo
        paper_space = doc.PaperSpace

        # Nombre del bloque principal (contenedor) que el usuario insertó en los Layouts
        NOMBRE_BLOQUE_DESTINO = "FORMATO_ANDECORP"
        bloques_encontrados = 0

        # Ancho máximo permitido por la casilla del cajetín para que no roce los bordes
        MAX_WIDTH_SEGURO = 35.5

        # 2. Iterar sobre TODOS los Layouts (Pestañas de presentación)
        for layout in doc.Layouts:
            # Ignorar la pestaña del Modelo si solo queremos las presentaciones
            if layout.Name.upper() == "MODEL":
                continue
                
            # Accedemos al Block asociado al Layout actual (su PaperSpace individual)
            layout_block = layout.Block
            
            for entity in layout_block:
                # Filtrar solo si es una Referencia de Bloque
                if entity.EntityName == "AcDbBlockReference":
                    # Validamos el nombre (buscamos la nueva viñeta unificada o cajetín)
                    if entity.Name.upper() == "FORMATO_ANDECORP" or entity.Name.upper() == "CAJETIN_ANDECORP":
                        bloques_encontrados += 1

                        # 3. Obtener los atributos expuestos por este bloque insertado
                        if entity.HasAttributes:
                            atributos = entity.GetAttributes()
                            
                            # Iterar sobre cada atributo
                            for attr in atributos:
                                tag = attr.TagString.upper()
                                
                                if tag == "EMPRESA":
                                    attr.TextString = cliente_val
                                    # Reseteo temporal para forzar al motor a medir el ancho crudo base real
                                    attr.ScaleFactor = 1.0
                                    attr.Update() 
                                    min_pt, max_pt = attr.GetBoundingBox()
                                    current_width = max_pt[0] - min_pt[0]
                                    if current_width > MAX_WIDTH_SEGURO:
                                        attr.ScaleFactor = MAX_WIDTH_SEGURO / current_width
                                    else:
                                        attr.ScaleFactor = 1.0
                                    attr.Update()
                                elif tag == "PROYECTO":
                                    attr.TextString = obra_val
                                    # Reseteo temporal para forzar al motor a medir el ancho crudo base real
                                    attr.ScaleFactor = 1.0
                                    attr.Update() 
                                    min_pt, max_pt = attr.GetBoundingBox()
                                    current_width = max_pt[0] - min_pt[0]
                                    if current_width > MAX_WIDTH_SEGURO:
                                        attr.ScaleFactor = MAX_WIDTH_SEGURO / current_width
                                    else:
                                        attr.ScaleFactor = 1.0
                                    attr.Update()
                                elif tag == "VENDEDOR":
                                    attr.TextString = vendedor_val
                                elif tag == "ID":
                                    attr.TextString = id_proyecto_val
                                elif tag == "SISTEMA":
                                    attr.TextString = sistema_val
                                elif tag == "FECHA":
                                    attr.TextString = datetime.now().strftime("%d/%m/%Y")
                                    
                            # Refrescar y actualizar el objeto en este Layout específico
                            entity.Update()
                            print(f"✅ ¡Formato actualizado en la presentación: {layout.Name}!")
                        else:
                            print(f"⚠️ El bloque '{entity.Name}' en {layout.Name} existe, pero no expone atributos (tags) al exterior para editarse.")
                        
        if bloques_encontrados == 0:
             print(f"❌ Error: No se encontró ningún bloque llamado 'FORMATO_ANDECORP' o 'CAJETIN_ANDECORP' en ninguna de las presentaciones.")
             print("   Asegúrate de que al crear el 'FORMATO_ANDECORP', los atributos hayan quedado como parámetros modificables al insertar el bloque.")

    except Exception as e:
        print(f"❌ Error crítico al interactuar con AutoCAD.")
        print(f"Detalle: {e}")

def login_plataforma():
    # 1. Configuración del Driver
    options = webdriver.ChromeOptions()
    # Le indicamos a Selenium dónde está el ejecutable de Brave
    options.binary_location = r"C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe"
    
    # Mantenemos la ventana abierta al finalizar el script
    options.add_experimental_option("detach", True)
    
    # ChromeDriverManager es compatible con Brave ya que ambos usan el motor Chromium
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    wait = WebDriverWait(driver, 15)

    try:
        # 2. Acceso a la URL principal
        driver.get("https://andecorp.gedar.cl/")

        # 3. Ingreso de credenciales
        campo_usuario = wait.until(EC.presence_of_element_located((By.NAME, "login")))
        campo_usuario.send_keys("michel")

        campo_clave = driver.find_element(By.NAME, "clave")
        campo_clave.send_keys("andecorp")

        # Capturamos la URL exacta antes de hacer clic
        url_antes_de_clic = driver.current_url

        # 4. Clic en el botón de ingresar
        # Usamos el selector de clase CSS exacto
        boton_ingresar = driver.find_element(By.CSS_SELECTOR, ".btn.btn-lg.btn-success.btn-block")
        boton_ingresar.click()

        # 5. Verificación de éxito
        # Esperamos a que la URL cambie respecto a la que teníamos en el login
        wait.until(EC.url_changes(url_antes_de_clic))
        
        # Damos un par de segundos para que el dashboard interno termine de procesarse
        time.sleep(1)
        
        # Retornamos el driver para poder seguir operando en el siguiente paso
        return driver

    except Exception as e:
        print(f"❌ Error durante el login: {e}")
        return None

if __name__ == "__main__":
    print("===================================")
    print("CONFIGURACIÓN INICIAL DEL PROYECTO")
    print("===================================")
    print("Seleccione el sistema para el cajetín de AutoCAD:")
    print("1. FRONT")
    print("2. MULTIFRONT")
    
    opcion_valida = False
    sistema_seleccionado = ""
    
    while not opcion_valida:
        opcion = input("Ingrese el número (1 o 2): ")
        if opcion == "1":
            sistema_seleccionado = "FRONT"
            opcion_valida = True
        elif opcion == "2":
            sistema_seleccionado = "MULTIFRONT"
            opcion_valida = True
        else:
            print("Opción inválida. Intente de nuevo.")
            
    print(f"\n✅ Sistema '{sistema_seleccionado}' seleccionado.")
    print("Iniciando automatización...\n")

    # 1. Ejecutamos el login y guardamos la sesión activa en 'driver_activo'
    driver_activo = login_plataforma()
    
    if driver_activo:
        try:
            # 2. Navegar directamente a la URL deseada usando la MISMA sesión
            url_proyectos = "https://andecorp.gedar.cl/modulos/manu/proyecto/nuevo.php"
            
            # Pausa extra para garantizar que el login_redir terminó de procesarse completamente en el backend
            time.sleep(1)
            
            driver_activo.get(url_proyectos)
            
            # (Opcional) Esperar a que algún elemento de la tabla cargue para asegurar que estamos ahí
            wait = WebDriverWait(driver_activo, 10)
            wait.until(EC.url_contains("proyecto/nuevo.php"))
            
            # 3. EXTRAER DATOS Y LLENAR FORMULARIO
            project_id = probar_conexion_autocad()
            
            if project_id:
                # Buscar el campo "obra_id" e ingresar el ID
                campo_obra = wait.until(EC.presence_of_element_located((By.NAME, "obra_id")))
                campo_obra.clear()
                campo_obra.send_keys(project_id)
                
                # Buscar el botón de Aceptar y hacer clic
                print("Haciendo clic en el botón 'Aceptar'...")
                boton_aceptar = driver_activo.find_element(By.XPATH, "//input[@value='Aceptar']")
                boton_aceptar.click()
                
                # 4. EXTRAER DATOS DEL PROYECTO CREADO
                # Esperamos a que la página procese y recargue el bloque interior
                time.sleep(0.5)
                
                try:
                    # Extraer Razón Social
                    cli_cliente = wait.until(EC.presence_of_element_located((By.NAME, "cli_razon"))).get_attribute("value")
                    
                    # Extraer Dirección y Sucursal
                    cli_nombre_obra = driver_activo.find_element(By.NAME, "obra_nombre").get_attribute("value")
                    cli_sucursal = driver_activo.find_element(By.NAME, "Sucursal").get_attribute("value")
                    
                    # 5. INYECTAR DATOS DE VUELTA A AUTOCAD
                    actualizar_cajetin(cli_cliente, cli_nombre_obra, cli_sucursal, project_id, sistema_seleccionado)
                    
                except Exception as ex_extract:
                    print(f"⚠️ No se pudieron extraer los datos post-formulario. Error: {ex_extract}")
                    
            else:
                print("⚠️ El proceso se detiene aquí al no hallarse un ID de proyecto válido en AutoCAD.")
            
        except Exception as e:
            print(f"❌ Error durante la navegación o el llenado del formulario: {e}")
            
        print("Cerrando navegador...")
        driver_activo.quit()


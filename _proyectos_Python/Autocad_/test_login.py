from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Importamos la función de conexión desde nuestro script de AutoCAD
from test_autocad import probar_conexion_autocad

# Importamos la función para interactuar con los atributos del bloque cajetín
from actualizar_cajetin_autocad import actualizar_cajetin

def login_plataforma():
    # 1. Configuración del Driver
    options = webdriver.ChromeOptions()
    # Mantenemos la ventana abierta al finalizar el script
    options.add_experimental_option("detach", True)
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

        # 4. Clic en el botón de ingresar
        # Usamos el selector de clase CSS exacto
        boton_ingresar = driver.find_element(By.CSS_SELECTOR, ".btn.btn-lg.btn-success.btn-block")
        boton_ingresar.click()

        # 5. Verificación de éxito
        wait.until(EC.url_changes("https://andecorp.gedar.cl/"))
        
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
            
            # Pausa breve para garantizar que el login_redir terminó de procesarse en el backend
            import time
            time.sleep(0.5)
            
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
                time.sleep(2)
                
                try:
                    # Extraer Razón Social
                    cli_cliente = wait.until(EC.presence_of_element_located((By.NAME, "cli_razon"))).get_attribute("value")
                    
                    # Extraer Dirección
                    cli_nombre_obra = driver_activo.find_element(By.NAME, "obra_nombre").get_attribute("value")
                    cli_sucursal = driver_activo.find_element(By.NAME, "Sucursal").get_attribute("value")
                    
                    # 5. INYECTAR DATOS DE VUELTA A AUTOCAD
                    actualizar_cajetin(cli_cliente, cli_nombre_obra, cli_sucursal, project_id, sistema_seleccionado)
                    
                except Exception as ex_extract:
                    print(f"⚠️ No se pudieron extraer los datos post-formulario. Error: {ex_extract}")
                    
            else:
                print("⚠️ El proceso se detiene aquí al no hallarse un ID de proyecto.")
            
        except Exception as e:
            print(f"❌ Error durante la navegación o el llenado del formulario: {e}")
            
        print("Cerrando navegador...")
        driver_activo.quit()

    
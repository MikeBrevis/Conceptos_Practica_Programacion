import win32com.client
import sys

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

        # Nombre del bloque que el usuario debe haber creado
        # El usuario puede modificarlo si le puso otro nombre
        NOMBRE_BLOQUE_DESTINO = "CAJETIN_ANDECORP"
        bloque_encontrado = False

        # 2. Iterar sobre todos los elementos del PaperSpace (donde suelen estar los cajetines)
        # Cambia paper_space por model_space abajo si tu cajetín está en el Modelo (pestaña Model)
        for entity in paper_space:
            # Filtrar solo si es una Referencia de Bloque (BlockReference)
            if entity.EntityName == "AcDbBlockReference":
                # Validamos que sea el bloque que buscamos (ignorando mayúsculas/minúsculas)
                if entity.Name.upper() == NOMBRE_BLOQUE_DESTINO.upper():
                    bloque_encontrado = True

                    # 3. Obtener los atributos del bloque
                    if entity.HasAttributes:
                        atributos = entity.GetAttributes()
                        
                        # Iterar sobre cada atributo y verificar su Tag (Etiqueta)
                        for attr in atributos:
                            # Según el plan, buscamos EMPRESA, PROYECTO, VENDEDOR, ID y SISTEMA
                            tag = attr.TagString.upper()
                            
                            if tag == "EMPRESA":
                                attr.TextString = cliente_val
                            elif tag == "PROYECTO":
                                attr.TextString = obra_val
                            elif tag == "VENDEDOR":
                                attr.TextString = vendedor_val
                            elif tag == "ID":
                                attr.TextString = id_proyecto_val
                            elif tag == "SISTEMA":
                                attr.TextString = sistema_val
                                
                        # Refrescar y actualizar el objeto en AutoCAD
                        entity.Update()
                        print(f"✅ ¡Planos actualizados! Datos inyectados en {NOMBRE_BLOQUE_DESTINO}")
                    else:
                        print(f"⚠️ El bloque '{NOMBRE_BLOQUE_DESTINO}' existe, pero no tiene atributos (tags) definidos.")
                    
                    break # Salimos del loop si ya actualizamos el bloque
                    
        if not bloque_encontrado:
             print(f"❌ Error: No se encontró ningún bloque llamado '{NOMBRE_BLOQUE_DESTINO}' en el PaperSpace.")
             print("   Asegúrate de haber creado el bloque y que tenga ese nombre exacto.")

    except Exception as e:
        print(f"❌ Error crítico al interactuar con AutoCAD.")
        print(f"Detalle: {e}")

if __name__ == "__main__":
    # Prueba rápida unitaria (Puedes correr este archivo solo para probar si funciona)
    # Reemplaza los valores por textos falsos para probar la inyección.
    actualizar_cajetin("Cliente Prueba SpA", "Instalación Demostrativa", "Michel Brevis Test")

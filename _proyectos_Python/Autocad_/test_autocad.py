import win32com.client
import re
import sys

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

if __name__ == "__main__":
    probar_conexion_autocad()



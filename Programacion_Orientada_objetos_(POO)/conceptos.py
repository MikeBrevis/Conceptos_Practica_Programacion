# POO
# Paradigma de programacion que modula nuestro codigo para hacerlo mas entendible y reutilizable.
'''
Se basa en crear nuevos tipos de datos llamados objetos, mediate un modulo con dos partes: propiedades (atributos) y funciones (metodos).
'''

#Ejemplo:
'''
Clase: Taza (plantilla donde se definen las propiedades y funciones)

- Propiedades: 
    color, tamaño, forma, material, etc.
- Funciones: 
    servir, calentar, enfriar, etc.
'''

#Se pueden INSTANCIAR objetos a partir de la clase, por ejemplo:
'''
Objeto: Taza 1
- Propiedades: 
    color: rojo, tamaño: pequeño, forma: redonda, material: ceramica
- Funciones: 
    servir, calentar, enfriar

Objeto: Taza 2
- Propiedades: 
    color: azul, tamaño: grande, forma: cuadrada, material: vidrio
- Funciones: 
    servir, calentar, enfriar
'''

#Consultar atributos o funciones:
'''
taza1.color = rojo
taza1.enfriar()
'''
#Modificar atributos o funciones:
'''
taza1.color = azul
'''

#Utilizar sus metodos:
'''
taza1.calentar()
'''

## Podemos generar un programa por medio de varias clases que se comuniquen entre si, lo que se denomina modularidad. 

####### PILARES DE LA POO #######

## ABSTRACCIÓN
'''
Se centra en identificar y modelar las características esenciales de un objeto (PROPIEDADES Y FUNCIONES), ignorando los detalles irrelevantes.
'''

## ENCAPSULACIÓN
'''
Se refiere a la capacidad de un objeto para ocultar sus detalles internos y exponer solo la información necesaria para su uso. Solo se podrán modificar usando los metodos GET y SET.
'''

## HERENCIA
'''
Se refiere a la capacidad de una clase para heredar atributos y métodos de otra clase. Por ejemplo, si tenemos una clase 'Vehiculo', podemos crear una clase 'Automovil' que herede de 'Vehiculo'. Se pueden añadir nuevos atributos y metodos a la clase hija.
'''

## POLIMORFISMO
'''
Los metodos se pueden redefinir en las clases hijas. Un metodo puede tener diferentes comportamientos dependiendo del objeto que lo llame.
'''

####### EJEMPLO DE POO: CLASES Y OBJETOS #######

class Persona:
    """
    Clase: Molde para crear objetos que encapsula datos y comportamientos.
    """
    def __init__(self, nombre, edad):
        # Atributos (Estado)
        self.nombre = nombre
        self._edad = edad  # Encapsulamiento (Convención de protegido)

    def saludar(self):
        # Método (Comportamiento)
        return f"Hola, mi nombre es {self.nombre}"

class Estudiante(Persona):
    """
    Herencia: Permite que una clase hija adquiera atributos y métodos de una clase padre.
    """
    def __init__(self, nombre, edad, carrera):
        super().__init__(nombre, edad)
        self.carrera = carrera

    def saludar(self):
        # Polimorfismo: Capacidad de una subclase para proporcionar una implementación específica.
        return f"Hola, soy estudiante de {self.carrera} y me llamo {self.nombre}"







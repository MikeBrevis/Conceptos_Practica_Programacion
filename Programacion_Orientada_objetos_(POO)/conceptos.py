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
####### ABSTRACCIÓN #######

class Personaje:
    nombre = 'default'
    fuerza = 0
    magia = 0
    velocidad = 0
    vida = 0
    mana = 0
    
mi_personaje = Personaje()
#Se consulta directamente a la clase
print('el nombre del jugador es', Personaje.nombre) 

#Se consulta directamente al objeto
print('el mana del jugador es', mi_personaje.mana )

#Redifinir propiedades del objeto
mi_personaje.nombre = 'Goku'
mi_personaje.fuerza = 9999

print('el nombre del legendario super sayan es', mi_personaje.nombre, 'y su fuerza es de', mi_personaje.fuerza)

####### CONSTRUCTOR #######

class character:

    def __init__(self, nombre, fuerza, magia, velocidad, vida, mana):
        self.nombre = nombre
        self.fuerza = fuerza
        self.magia = magia
        self.velocidad = velocidad
        self.vida = vida
        self.mana = mana

####### METODOS ESTADO DEL OBJETO #######

    def atributos(self):
        print('------------------------------------------------')
        print('el nombre del jugador es', self.nombre)
        print('la fuerza del jugador es', self.fuerza)
        print('la magia del jugador es', self.magia)
        print('la velocidad del jugador es', self.velocidad)
        print('la vida del jugador es', self.vida)
        print('el mana del jugador es', self.mana)
        print('------------------------------------------------')

my_character = character('Vegeta', 9999, 0, 9999, 9999, 0)      
my_character.atributos()

#CREAR METODOS QUE:
#








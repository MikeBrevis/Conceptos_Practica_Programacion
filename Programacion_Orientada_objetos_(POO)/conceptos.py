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

####### METODOS SUBIR NIVEL #######

    def subir_nivel(self, fuerza, vida, mana):
        self.fuerza = self.fuerza + fuerza
        self.vida = self.vida + vida
        self.mana = self.mana + mana

####### METODOS VIVO/MUERTO #######

    def vivo(self):
        return self.vida > 0

    def muerto(self):
        self.vida = 0
        print('el personaje ha muerto')

####### METODOS CALCULO DE DAÑO #######

    def daño(self, enemigo):
        return self.fuerza

####### METODOS ATACAR #######

    def atacar(self, enemigo):
        daño = self.daño(enemigo)
        enemigo.vida = enemigo.vida - daño
        print('el personaje', self.nombre, 'ha atacado a', enemigo.nombre, 'y le ha hecho', daño, 'de daño')

        if enemigo.vivo():
            print('La vida del enemigo es', enemigo.vida)
        else:
            enemigo.muerto()

my_character = character('Vegeta', 500, 0, 0, 3000, 9999)      
my_enemy = character('Nappa', 700, 0, 0, 1000, 9999)
my_character.atributos()
my_character.atacar(my_enemy)
my_enemy.atributos()

####### ENCAPSULACIÓN #######

# En python no se consideran que los datos se encapsulen como tal

####### HERENCIA #######

class Guerrero(character):
    
    def __init__ (self, nombre, fuerza, magia, velocidad, vida, mana, espada):
        super().__init__(nombre, fuerza, magia, velocidad, vida, mana)
        self.espada = espada

####### METODOS PARA CAMBIAR DE ARMA #######

    def cambiar_arma(self):
        opcion = int(input('elija el arma que desea usar: 1. Espada, 2. Hacha, 3. Arco'))
        if opcion == 1:
            self.espada = 8
        elif opcion == 2:
            self.espada = 6
        elif opcion == 3:
            self.espada = 3
        else:
            print('opcion no valida')

guts = Guerrero('Guts', 100, 0, 80, 200, 0 ,5)
guts.cambiar_arma()
guts.atributos()
print(guts.espada)

####### POLIMORFISMO #######


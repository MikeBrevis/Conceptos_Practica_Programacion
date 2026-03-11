'''
variables and strings
'''
print('mike')
print("mike's laptop")
print("mike " * 2)

name = 'youtube' # variable with string
number = 1 # variable with integer

print(name[0]) # Print the first letter of the string
print(name[-1]) # Print the last letter of the string
print(name[0:2]) # Print the first two letters of the string
print(name[2:4]) # Print the third and fourth letters of the string
print(name[2:]) # Print the third letter to the end of the string
print(name[:2]) # Print the first two letters of the string
print('This print the string tube = ' + name[3:10])

print('my ' + name[3:]) # Print the string 'my' + the third letter to the end of the string
print(r'Telusko \n Rocks') # Print the string 'Telusko \n Rocks' as a raw string

'''
math operations
'''
print(5 + 3) # addition
print(5 - 3) # subtraction
print(5 * 3) # multiplication
print(5 / 3) # division
print(5 // 3) # intenger division
print(5 % 3) # modulo
print(5 ** 3) # exponentiation

# example of math operations
print(4 * 2 - 1 + (7 + 1) / (3 + 1)) # 9.0

'''
firts program, this says hello and tell how old are you next year
'''
# print('hello wordl!')
# print('what´s your name?')
# name = input('> ')
# print('hello ' + name + ', how are you?')
# print('if you wanna know, your length´s name is ' + str(len(name)))
# print('what´s your age?')
# age = input('> ')
# print('you will be ' + str(int(age) + 1) + ' next year')

'''
Basic functions
'''
#str() = convert to string
print(str(0))
print(str(-3.14))
#int() = convert to integer
print(int('42'))
print(int(-500.5))
#float() = convert to float
print(float('-3.14'))
print(float(3))
print(float(-3))

#type() = show the type of the variable
print(type(42))
print(type(-3.14))
print(type('hello'))
print(type(True))

#len() = show the length of the string
print(len('hello'))


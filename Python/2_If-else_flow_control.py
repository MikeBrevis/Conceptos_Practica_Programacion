'''
Bolean values
'''
spam = False
spam2 = True

print(spam)
print(spam2)

'''
Comparison operators
'''
print(2 == 2) # True
print(2 == 3) # False
print(2 != 3) # True
print(2 != 2) # False
print(2 < 3) # True
print(2 > 3) # False
print(2 <= 3) # True
print(2 >= 3) # False

# == and != work with values of any data type
print('spam' == 'spam') # True
print('spam' == 'spam2') # False
print(True != False) # True
print(True != True) # False

'''Bolean logic'''
print(True and False) # False
print(True and True) # True
print(False and False) # False
print(True or False) # True
print(True or True) # True
print(False or False) # False
print(not True) # False
print(not False) # True

print(4 < 5 and 5 < 6) # True
print(4 < 5 and 5 > 6) # False

print(1 == 2 or 2 == 2) # True
print(1 == 2 or 2 == 3) # False

print(not (1 == 2)) # True
print(not (1 == 1)) # False

'''
Flow control statements
'''
# IF, ELSE and ELIF

name = 'Robert'
age = 10

if name == 'Alice':
    print('Nice to meet you Alice')
else:
    print('Nice to meet you, stranger')


if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')

name = 'Carol'
age = 3000

if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
elif age > 100:
    print('You are not Alice, grannie.')
elif age > 2000:
    print('Unlike you, Alice is not an undead, immortal vampire.')

spam2 = 5

if spam2 == 1:
    print('Hello!')
elif spam2 == 2:
    print('Howdy')
else:
    print('Greetings!')

# Example of if-elif-else

print('Enter TB or GB for the advertised unit:')
unit = input('>')

# Calculate the amount that the advertised capacity lies:
if unit == 'TB' or unit == 'tb':
    discrepancy = 1000000000000 / 1099511627776
elif unit == 'GB' or unit == 'gb':
    discrepancy = 1000000000 / 1073741824

print('Enter the advertised capacity:')
advertised_capacity = input('>')
advertised_capacity = float(advertised_capacity)

# Calculate the real capacity, round it to the nearest hundredths,
# and convert it to a string so it can be concatenated:
real_capacity = str(round(advertised_capacity * discrepancy, 2))

print('The actual capacity is ' + real_capacity + ' ' + unit)


'''
While statement
'''
name = ''
while name != 'your name':
    print('What is your name?')
    name = input('')
print('Thank you!')

'''
Break statement
'''
while True:
    print('What is your name?')
    name = input('')
    if name == 'your name':
        break
print('Thank you!')


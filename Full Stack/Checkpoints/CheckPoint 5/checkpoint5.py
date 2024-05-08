

# Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.

# nombre = 'Enrique'

# lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'

nombre = 'Enrique'
lista_nombres = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']  

if nombre in lista_nombres:
    print("El nombre está en la lista.")
else:
    print("El nombre no está en la lista.")


# Cree un bucle For de Python.
for i in range(0,6):
    print(i)

for i in range(6):
    print(i)

# Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.

def suma(a, b, c):
    return a + b + c

print(suma(1,1,1))

def concatenar_palabras(palabra1, palabra2, palabra3):
    return palabra1 + " " + palabra2 + " " + palabra3

print(concatenar_palabras("Hola", "que", "tal"))

#Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.
suma_lambda = lambda a, b, c: a + b + c

concatenar_lambda = lambda palabra1, palabra2, palabra3: palabra1 + " " + palabra2 + " " + palabra3

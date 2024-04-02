# Preguntas CheckPoint 4

## ¿Cuál es la diferencia entre una lista y una tupla en Python?

Una lista es mutable, lo que significa que puedes cambiar, agregar o eliminar elementos después de crearla. En cambio, una tupla es inmutable, es decir, una vez que la creas, no puedes cambiar sus elementos. 
Podemos decir que una lista es como una lista de tareas pendientes que puedes editar, y que una tupla es como una lista de invitados que no puedes modificar una vez enviada la invitacion.
```python
# Lista
my_list = [1, 2, 3]
my_list[0] = 10  # Modificamos el primer elemento
print(my_list)  # Output: [10, 2, 3]

# Tupla
my_tuple = (1, 2, 3)
# Intentamos modificar el primer elemento ( error)
 my_tuple[0] = 10
```


## ¿Cuál es el orden de las operaciones?
Regla PEMDAS:
-Paréntesis
-Exponentes
-Multiplicación y división (de izquierda a derecha)
-Suma y resta (de izquierda a derecha)
Por ejemplo, en la expresión 3 + 4 * 2, primero se realiza la multiplicación y luego la suma.

## ¿Qué es un diccionario Python?
Un diccionario en Python es una colección de datos que se organiza en pares clave-valor. 
Osea igual que un diccionario de palabras normal donde cada palabra tiene su definición asociada. 
En Python, las claves son únicas e inmutables, y los valores pueden ser de cualquier tipo y mutables.

```python
student_ages = {
    "Alice": 20,
    "Bob": 22,
    "Charlie": 21
}

# Obtener la edad de Bob
bob_age = student_ages["Bob"]
print(bob_age)  # Output: 22
```


## ¿Cuál es la diferencia entre el método ordenado y la función de ordenación?
El método sorted() y la función sort() se utilizan para ordenar elementos pero tienen una diferencia:  sorted() es una función que toma un iterable y devuelve una nueva lista ordenada, mientras que sort() solo ordena la lista, es decir, cambia la lista original. 
En resumen, sorted() crea una nueva lista ordenada, mientras que sort() ordena la lista existente.

```python
# Método sorted()
my_list = [3, 1, 2]
sorted_list = sorted(my_list)  # Creamos una nueva lista ordenada
print(sorted_list)  # Output: [1, 2, 3]
print(my_list)  # Output: [3, 1, 2] (la lista original no cambia)

# Método sort()
my_list.sort()  # Ordena la lista original
print(my_list)  # Output: [1, 2, 3]
```


## ¿Qué es un operador de asignación? (No estoy segura)

Operador de asignacion es el =, por ejemplo usamos = para asignar 5 a la variable x y luego puedes hacer  +=, -= o *=, que realizan una operación y luego asignan el resultado a la variable. Por ejemplo, x += 1 es equivalente a x = x + 1, incrementando el valor de x en 1.

```python
x = 5  
print(x)  # Output: 5


x += 1  # Equivalente a x = x + 1
print(x)  # Output: 6
```
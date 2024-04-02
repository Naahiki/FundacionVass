# Preguntas CheckPoint 4 - SECOND TRY

## ¿Cuál es la diferencia entre una lista y una tupla en Python?

En Python, tanto las listas como las tuplas son estructuras de datos que pueden almacenar una colección de elementos. Sin embargo, tienen características y usos distintos que son importantes para un desarrollador entender.

#### Listas:

 -Mutables: Esto significa que después de su creación, puedes cambiar, agregar o eliminar elementos. Esta característica las hace ideales para colecciones de datos que necesitan modificarse frecuentemente.

 -Sintaxis: Se crean usando corchetes [], y los elementos se separan por comas.

 -Uso común: Las listas son útiles para almacenar colecciones de datos que pueden cambiar durante la ejecución del programa, como una lista de usuarios en una aplicación o una colección de elementos en un juego.
    
#### Tuplas:

 -Inmutables: Una vez creada una tupla, no puedes cambiar sus elementos. Esto las hace más rápidas y menos pesadas en memoria que las listas, lo cual es beneficioso cuando trabajas con una gran cantidad de datos.

 -Sintaxis: Se definen usando paréntesis (), y los elementos también se separan por comas.

 -Uso común: Las tuplas son ideales para colecciones de datos que no deben cambiar, como los días de la semana o las coordenadas de un punto en el espacio.

```python
# Lista
my_list = [1, 2, 3]
my_list.append(4)  # Agregamos un elemento
my_list[0] = 10  # Modificamos el primer elemento
print(my_list)  # Output: [10, 2, 3, 4]

# Tupla
my_tuple = (1, 2, 3)
# Las tuplas no pueden ser modificadas una vez creadas. Si intentas hacerlo, obtendrás un TypeError.

```


## ¿Cuál es el orden de las operaciones?
Python sigue la regla PEMDAS, que es un acrónimo para:

-Paréntesis

-Exponentes

-Multiplicación y división (de izquierda a derecha)

-Suma y resta (de izquierda a derecha)

-Ejemplo:

    En la expresión 3 + 4 * 2, primero se realiza la multiplicación (4 * 2 = 8) y luego la suma (3 + 8 = 11), dando como resultado 11.
    Para modificar el orden natural, puedes usar paréntesis: (3 + 4) * 2 primero calcula la suma dentro del paréntesis (3 + 4 = 7) y luego realiza la multiplicación (7 * 2 = 14), resultando en 14.
    Funciona como en las matematicas de toda la vida.

## ¿Qué es un diccionario Python?
Un diccionario en Python es una colección desordenada de elementos, organizada en pares clave-valor. Es una de las estructuras de datos más versátiles y utilizadas en Python, permitiendo un rápido acceso, modificación y eliminación de datos mediante claves únicas.

 -Claves Únicas e Inmutables: Cada par clave-valor es único dentro de un diccionario, lo que significa que no pueden existir dos claves iguales. Las claves deben ser de un tipo de dato inmutable, como cadenas, números o tuplas.

 -Valores Mutables: Los valores asociados a las claves pueden ser de cualquier tipo y pueden ser modificados.

 -Sintaxis: Los diccionarios se definen usando llaves {}, con los pares clave-valor separados por comas. Cada par se especifica como clave: valor.

 -Uso común: Son ideales para representar relaciones de datos reales y complejas, manejar información que se accede por algún identificador único, y para operaciones que requieren búsqueda rápida de datos, como buscar perfiles de usuario por ID.

```python
# Definición de un diccionario
student_scores = {"Alice": 9.8, "Bob": 7.5, "Charlie": 8.9}

# Agregar un nuevo par clave-valor
student_scores["Diana"] = 9.1

# Modificar el valor asociado a una clave existente
student_scores["Alice"] = 10

# Acceder al valor usando una clave
print(student_scores["Alice"])  # Output: 10
```


## ¿Cuál es la diferencia entre el método ordenado y la función de ordenación?
La principal diferencia entre sorted() y sort() radica en cómo manejan los datos y el tipo de resultado que producen.

-sorted(): Es una función incorporada que toma cualquier iterable como entrada (por ejemplo, listas, tuplas, diccionarios) y devuelve una nueva lista ordenada. No modifica el iterable original. Es versátil porque puede usarse con cualquier iterable, no solo listas.

-.sort(): Es un método que modifica la lista sobre la cual se invoca, ordenándola in situ. No devuelve una nueva lista; en cambio, ordena los elementos de la lista original. Este método solo está disponible para objetos de tipo lista.

Ambos pueden personalizarse con parámetros adicionales como key y reverse, lo que les permite ordenar los elementos según criterios personalizados y en orden descendente, respectivamente.

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


## ¿Qué es un operador de asignación?

Los operadores de asignación en Python se utilizan para asignar valores a variables. El operador básico de asignación es =, que asigna el valor del lado derecho a la variable del lado izquierdo. Además de la asignación simple, Python ofrece operadores de asignación compuesta que combinan una operación aritmética (como suma, resta, multiplicación, etc.) con asignación en una única operación.

-Ejemplos:

    x = 5 asigna el valor 5 a x.
    x += 1 incrementa el valor de x en 1 (equivalente a x = x + 1).
    x *= 2 duplica el valor de x (equivalente a x = x * 2).

```python
x = 10
x += 5  # Suma 5 a x
print(x)  # Output: 15

y = 3
y *= 2  # Multiplica y por 2
print(y)  # Output: 6

```

######################################################################################################

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



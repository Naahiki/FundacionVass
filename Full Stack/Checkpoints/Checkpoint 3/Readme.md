# Preguntas CheckPoint 3

## ¿Cuáles son los tipos de Datos en Python?

    Booleanos
    Números
    Cadenas de caracteres
    Bytes y matrices de bytes
    None
    Listas
    Tuplas
    Conjuntos
    Diccionarios

## ¿Qué tipo de convención de nomenclatura deberíamos utilizar para las variables en Python?
La convención de nomenclatura recomendada para variables en Python es utilizar snake_case, donde las palabras están en minúsculas y separadas por guiones bajos.

## ¿Qué es un Heredoc en Python?
Un Heredoc en Python te permite escribir cadenas de texto que abarcan múltiples líneas.Imagina que quieres crear una cadena de texto que tenga varias líneas y dentro de esas líneas necesitas usar comillas o un '\n', tendrias que usa '\' antes :

```python
texto_multilinea = "Este es un ejemplo\ncon varias líneas y \"comillas\"."

```
Con Heredoc, puedes escribirlo de una manera más sencilla y legible, sin necesidad de usar barras invertidas:


```python
texto_multilinea = 
'''
Este es un ejemplo
con varias líneas y "comillas".

'''
```

## ¿Qué es una interpolación de cadenas?
Imagina que tienes un mensaje que dice "Hola [nombre], gracias por comprar [producto]". Usando la interpolación de cadenas, puedes rellenar los espacios en blanco con variables o expresiones.Es una forma sencilla de crear mensajes personalizados o dinámicos.

```python
nombre = 'Nahiki'
producto = 'curso de Python'

mensaje = f"Hola {nombre}, gracias por comprar {producto}."
print(mensaje) 

```

## ¿Cuándo deberíamos usar comentarios en Python?

Los comentarios pueden ser útiles para explicar lo que hace nuestro código, pero a veces pueden ser confusos o quedarse obsoletos si el código cambia y no actualizamos los comentarios. Una forma mejor de hacer que nuestro código sea fácil de entender es darle buenos nombres a las cosas, como variables y funciones. Si usamos nombres que explican lo que hace cada parte de nuestro código, entonces no necesitamos tantos comentarios. Sin embargo, a veces los comentarios pueden ayudar a organizar nuestro código o a proporcionar información importante, como detalles sobre la base de datos que estamos usando. Así que, en resumen, los comentarios pueden ser útiles, pero es importante usarlos con cuidado y pensar si realmente los necesitamos.

## ¿Cuáles son las diferencias entre aplicaciones monolíticas y de microservicios?

Una aplicación monolítica es como un gran edificio de apartamentos donde todas las unidades están conectadas en un solo bloque. Cada apartamento es una parte de la aplicación: la interfaz de usuario, la base de datos, la lógica de negocio, etc. Si quieres hacer cambios en una parte del edificio, necesitas trabajar en todo el bloque y actualizarlo por completo.

Por otro lado, los microservicios son como una comunidad de casas independientes. Cada casa representa un servicio específico de la aplicación, como la autenticación de usuarios, el procesamiento de pagos o la gestión de pedidos. Cada casa funciona de forma autónoma y se comunica con otras casas a través de una red. Si necesitas hacer cambios en una casa, solo trabajas en esa casa y no afecta a las demás.

En resumen, una aplicación monolítica es como un gran edificio donde todo está unido, mientras que los microservicios son como una comunidad de casas independientes que pueden crecer y cambiar de forma individual sin afectar al resto de la comunidad.


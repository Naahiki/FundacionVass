### Elementos de un Diagrama de Clases
- **Nombre**: Es el nombre de la clase, que identifica el objeto o entidad en el sistema.
- **Atributos**: Características o propiedades de la clase. Cada atributo incluye:
  - **Visibilidad** (público, protegido, privado), representada por símbolos (+ para público, # para protegido, - para privado).
  - **Nombre**: El identificador del atributo.
  - **Tipo de Dato**: El tipo de valor que el atributo puede tener (por ejemplo, string, integer).
- **Operaciones**: Métodos o funciones que la clase puede realizar. También tienen visibilidad y se representan seguidas de paréntesis.

### Asociaciones, Multiplicidad y Navegabilidad
- **Asociaciones**: Relacionan una clase con otra. Ejemplo: un `Guía` puede pertenecer a un `Tema`.
- **Multiplicidad**: Define cuántas instancias de una clase pueden estar relacionadas con otra. Se representa con notaciones como `1..*` (uno a muchos) o `0..*` (cero o más).
- **Navegabilidad**: Indica cómo una clase puede acceder a otra a través de la asociación.

### Ejemplo de Twitter usando UML
- **Diagrama de Clases de Twitter**: Incluye clases como `Tweet`, `Usuario`, `Hashtag`, y relaciones entre ellas.
  - **Tweet**: Clase con atributos como `ID`, `Texto`, `Autor` y operaciones como `publicar()`.
  - **Retweet**: Se usa una tabla de unión para manejar los retweets, que asocia un tweet original con su retweet.
  - **Seguimiento**: Usa una tabla de unión auto-referencial para rastrear quién sigue a quién.
  - **Hashtag**: Relacionado con `Tweet` a través de una tabla de unión, permitiendo una relación muchos a muchos.

### Personalización de UML
- En la práctica, muchas organizaciones personalizan UML según sus necesidades. Por ejemplo, la tabla de unión para retweets se representa con una línea punteada para indicar una relación bidireccional que conecta diferentes objetos.

## QUIZ 3

1. **Attributes have three different items at a minimum that you should include.**
   - **TRUE**
   - **Explicación**: En un diagrama de clases, cada atributo debe incluir al menos tres elementos: visibilidad (pública, protegida, privada), nombre y tipo de dato. Estos elementos son esenciales para definir cómo se comportará el atributo dentro de la clase y cómo otros elementos del sistema interactuarán con él.

2. **Operations are always followed by?**
   - **parenthesis**
   - **Explicación**: Las operaciones en un diagrama de clases representan métodos o funciones que realiza la clase. Siempre se siguen de paréntesis, incluso si no se pasa ningún parámetro. Esto ayuda a diferenciar las operaciones de los atributos y es una convención estándar en UML.

3. **Relationship and association is the same thing because it is how one class is connected to another.**
   - **TRUE**
   - **Explicación**: En UML, el término "relación" o "asociación" se refiere al vínculo entre dos clases. Este vínculo describe cómo interactúan o se conectan las clases entre sí, y puede incluir detalles sobre la cardinalidad (cuántas instancias de una clase pueden estar relacionadas con instancias de la otra).

4. **Multiplicity is how we designate the direction of the relationship in regards to numbers.**
   - **TRUE**
   - **Explicación**: La multiplicidad en UML indica cuántas instancias de una clase pueden estar asociadas con una instancia de otra clase en una relación. Por ejemplo, `1..*` significa que una instancia de la clase A puede estar asociada con una o más instancias de la clase B.

5. **Navigability deals with how you can't have classes communicate with other classes.**
   - **FALSE**
   - **Explicación**: La navegabilidad en UML se refiere a la capacidad de una clase para acceder a otra clase en una asociación. Indica en qué dirección puede fluir la información entre clases, permitiendo que una clase "navegue" a otra y acceda a sus datos o métodos.

6. **An important skill is to adjust and be flexible with how other developers have implemented UML.**
   - **TRUE**
   - **Explicación**: UML es un estándar flexible, y en la práctica, muchas organizaciones o equipos de desarrollo adaptan UML a sus necesidades específicas. Ser capaz de entender y ajustarse a estas variaciones es una habilidad valiosa para colaborar eficazmente en proyectos donde UML se utiliza de manera personalizada.

7. **The _____ class is massive and has a number of attributes.**
   - **tweet**
   - **Explicación**: En el ejemplo del diagrama de clases de Twitter, la clase `tweet` es descrita como una clase masiva con muchos atributos, como `ID`, `texto`, `autor`, `retweets`, etc. Esto refleja la complejidad y la cantidad de información que maneja cada tweet en la plataforma.

8. **The retweet class is a formal UML.**
   - **FALSE**
   - **Explicación**: La clase `retweet` en el ejemplo de Twitter se presenta con una notación que no es estrictamente formal según el estándar de UML. Se utiliza una representación con líneas punteadas para indicar un tipo de tabla de unión en una base de datos, lo cual es una adaptación más que una notación UML formal.

9. **This class gives the users the ability to reply to a tweet?**
   - **reply**
   - **Explicación**: La clase `reply` en el diagrama de Twitter representa las respuestas a un tweet. Esta clase está relacionada con la clase `tweet` y gestiona las respuestas que los usuarios pueden realizar a los tweets, permitiendo la interacción entre usuarios dentro de la plataforma.

10. **A join table gives the ability to say every time a tweet has a hashtag.**
    - **TRUE**
    - **Explicación**: En el diagrama de Twitter, una tabla de unión (join table) como `TweetHashtag` se utiliza para gestionar la relación muchos a muchos entre tweets y hashtags. Esto permite que un tweet pueda tener múltiples hashtags y que un hashtag pueda estar asociado con múltiples tweets. La tabla de unión facilita esta asociación al crear un registro cada vez que se asocia un tweet con un hashtag.


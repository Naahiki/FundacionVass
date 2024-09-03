
### 1. **¿Qué es UML y por qué es importante?**
- **UML** significa **Lenguaje de Modelado Unificado (Unified Modeling Language)**.
- Antes de UML, había muchos métodos diferentes para modelar sistemas visualmente, lo que causaba confusión entre los desarrolladores y otros stakeholders.
- UML fue creado en 1994 por Grady Booch, Ivar Jacobson y James Rumbaugh, y fue formalizado en 1996.
- Es **agnóstico del lenguaje**, lo que significa que puedes comunicarte con desarrolladores que utilizan diferentes lenguajes de programación.
- UML también permite a los desarrolladores comunicar conceptos de software a stakeholders no técnicos a través de modelos visuales.
- Proporciona un nivel de **abstracción** que es difícil de lograr con otras herramientas, lo que te permite enfocarte en el comportamiento y la estructura de alto nivel de un sistema.

### 2. **Fases del Desarrollo donde se utiliza UML**
- UML es útil en varias etapas del desarrollo, desde la planificación hasta la implementación y el mantenimiento.

#### **Antes de escribir código:**
- **Diagrama de Actividades:** Útil para entender el flujo de la aplicación antes de escribir código.
- **Diagrama de Despliegue:** Permite planificar la arquitectura del sistema y evitar errores antes de la implementación.

#### **Durante el desarrollo:**
- **Diagrama de Clases:** Ayuda a modelar la base de datos y a mantener las mejores prácticas.
- **Diagrama de Casos de Uso:** Organiza las funcionalidades que los usuarios podrán acceder y es útil para comunicarse con stakeholders no técnicos.

#### **Después de la implementación:**
- **Diagrama de Secuencia:** Ayuda a entender cómo se comunican los componentes del sistema, especialmente útil para refactorizaciones.
- **Diagrama de Paquetes:** Facilita la organización del código, reduciendo el acoplamiento y mejorando la modularidad del sistema.

### 3. **Componentes comunes de UML**

#### **Frames:**
- Ayudan a encapsular componentes visuales y proporcionar contexto.
- Ejemplo: Un diagrama de casos de uso con un encabezado que indica que es para el módulo "SongRequest".

#### **Classifiers:**
- Son categorías abstractas usadas para clasificar elementos en UML.
- Ejemplo: En un diagrama de clases, "Topic" es un classifier.

#### **Comments and Notes:**
- Agregan aclaraciones y descripciones a los diagramas.
- Ejemplo: Una nota que indique que un campo es obligatorio en un diagrama de clases.

#### **Dependencies:**
- Muestran el acoplamiento entre componentes, indicando qué componentes dependen de otros.
- Ejemplo: Un diagrama que muestre la dependencia entre una clase "SongRequest" y una API de Spotify.

#### **Features and Properties:**
- Representan atributos y operaciones dentro de un elemento.
- Ejemplo: En un diagrama de clases, las propiedades como "title", "slug", etc., son características y propiedades de una clase.

## QUIZ 1


1. **Features and properties are something you will rarely see in UML.**
   - **FALSE**  
   Las características y propiedades son elementos comunes que se encuentran en la mayoría de los diagramas UML.

2. **Comments allow us to add clarification to the goals we are trying to accomplish with a specific diagram.**
   - **TRUE**  
   Los comentarios se utilizan para añadir aclaraciones en los diagramas UML.

3. **Stereotypes can represent how we can build out the MVC.**
   - **TRUE**  
   Los estereotipos en UML pueden representar conceptos como Modelo-Vista-Controlador (MVC).

4. **Classifiers do not classify anything in particular.**
   - **FALSE**  
   Los clasificadores en UML se utilizan precisamente para clasificar elementos en los diagramas.

5. **The most important reason you use Frames is when you are working on large systems you want to be able to understand the context.**
   - **TRUE**  
   Los frames se utilizan para proporcionar contexto, especialmente en sistemas grandes.

6. **The six common elements we are going to walk through are frames, classifiers, stereotypes, comments, features, and _________.**
   - **dependencies**  
   Las dependencias son uno de los seis elementos comunes en UML.

7. **A deployment diagram gives you the ability to take a high level look at your code.**
   - **TRUE**  
   Los diagramas de despliegue permiten una visión de alto nivel de la arquitectura de un sistema.

8. **A ______ Diagram allows you to say what happens at each state of an application flow.**
   - **Activity**  
   Un diagrama de actividades permite describir lo que ocurre en cada estado del flujo de una aplicación.

9. **What year was UML created?**
   - **1996**  
   UML fue formalizado en 1996.

10. **What does UML stand for?**
    - **Unified Modeling Language**  
    UML significa "Lenguaje de Modelado Unificado" (Unified Modeling Language en inglés).


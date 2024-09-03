### Resumen de las Guías sobre Diagramas de Actividad en UML

#### **Elementos de un Diagrama de Actividad en UML**
Los diagramas de actividad en UML se utilizan para modelar el flujo de trabajo de un sistema, representando cómo las tareas y decisiones se interrelacionan a medida que un proceso progresa. Los elementos clave de estos diagramas incluyen:

1. **Estado Inicial o Punto de Inicio**: Representado por un círculo grueso con un círculo blanco en su interior. Indica el comienzo del proceso o actividad.
2. **Estado de Actividad o Acción**: Representa una tarea o acción específica que se realiza en el proceso. Se visualiza como un rectángulo (a veces con bordes redondeados).
3. **Flujo de Acción**: Indicado por flechas que muestran cómo una actividad lleva a la siguiente.
4. **Decisiones y Ramificaciones**: Utilizan un rombo para representar un punto en el cual se debe tomar una decisión, lo que conduce a diferentes caminos en el flujo de trabajo.
5. **Guardias**: Condiciones (como "sí" o "no") que determinan la dirección del flujo después de una decisión.
6. **Estado Final o Punto Final**: Representado por un círculo con un punto negro en el centro, indica el final del proceso.
7. **Carriles o Swim Lanes**: Dividen el diagrama en secciones para diferentes actores o componentes del sistema, mostrando quién es responsable de qué actividades.

#### **Diseño de un Diagrama de Actividad para un Sistema de Evaluación en Línea**
Esta guía aplica los elementos anteriores en un diagrama completo que modela el proceso de tomar un quiz en un sistema de evaluación en línea. El diagrama se organiza en carriles para representar los roles del maestro, el sistema y el estudiante:

- **Maestro**: Asigna la prueba y luego aprueba los resultados.
- **Sistema**: Genera preguntas, las presenta al estudiante, asume los resultados y los almacena.
- **Estudiante**: Confirma que desea comenzar el quiz, responde preguntas y finalmente completa el quiz.

El flujo del proceso es el siguiente:

1. El maestro asigna un quiz.
2. El sistema genera y presenta las preguntas al estudiante.
3. El estudiante responde cada pregunta.
4. El sistema verifica si fue la última pregunta. Si no, continúa con la siguiente; si sí, asume los resultados y se los presenta al maestro.
5. El maestro aprueba los resultados y el sistema los almacena, finalizando así el proceso.



## Quiz 4

1. **Generating an individual question set, confirming, and asking a question are various actions states.**
   - **TRUE**
   - **Explicación**: Estas acciones representan estados dentro de un diagrama de actividad donde se realiza una tarea específica, lo que las convierte en "action states" o estados de acción.

2. **Every time you get to a spot where the data changes or where you're making an alteration, it could be an action flow.**
   - **FALSE**
   - **Explicación**: Un punto donde la data cambia o se hace una alteración típicamente representa un estado de actividad, no un flujo de acción. El flujo de acción conecta estos estados, pero no representa los cambios en sí.

3. **Anytime you see a filled in arrow tip it means?**
   - **action flow**
   - **Explicación**: Una flecha con punta rellena en un diagrama de actividad indica un flujo de acción, que muestra cómo una actividad lleva a otra.

4. **The 45* square represents that you can make a decision in any point in the application.**
   - **FALSE**
   - **Explicación**: El rombo en un diagrama de actividad representa un punto de decisión, pero no implica que puedas tomar decisiones en cualquier punto, sino en lugares específicos donde el flujo de trabajo puede bifurcarse.

5. **The more branches or guards that you have in your application will make it more complex.**
   - **TRUE**
   - **Explicación**: Más ramificaciones o guardias (condiciones) añaden complejidad al sistema, lo que puede hacer más difícil de mantener y modificar.

6. **The final state will store all the results in the system database.**
   - **TRUE**
   - **Explicación**: En este contexto específico, el estado final implica que los resultados se almacenan en la base de datos del sistema, lo que completa el flujo de trabajo.

7. **The swim lanes consist of the following?**
   - **All of the above**
   - **Explicación**: Los carriles o "swim lanes" en el diagrama de actividad representan a los diferentes actores en el sistema: el maestro, el sistema y el estudiante.

8. **If the student doesn't answer a question it will allow them to finish.**
   - **FALSE**
   - **Explicación**: Si el estudiante no responde una pregunta, el sistema lo redirigirá a la misma pregunta u otra acción relacionada, en lugar de permitirle finalizar el quiz.

9. **The system will do one of the following.**
   - **store the results**
   - **Explicación**: Entre las tareas realizadas por el sistema en este diagrama de actividad están almacenar los resultados, generar preguntas, y manejar el flujo de las acciones.


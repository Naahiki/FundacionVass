# Preguntas Chekpoint 1

* **¿Cuáles son algunas de las cosas que hacen que SCSS sea diferente de CSS?**
* **¿Qué es una variable SCSS?**
* **¿Qué es un SCSS Mixin?**
* **¿Qué significa Unidad fraccionaria (fr) con CSS Grid?**

```
SCSS es como la versión mejorada de CSS, esta tiene "herramientas" o "funcionalidades" que te ayudan a definir los estilos más fácil y ordenados. Por ejemplo, SCSS podemos escribir variables,o escribir los estilos unos dentro del otro (en CSS se tienen que definir por separado, pero en SCSS puedes anidar los elementos), es decir puedes decir "Dentro del nav-wrapper, quiero que los link-wrapper tengan este underline"

Ejemplo:

SCSS                                                CSS
.nav-wrapper{                                       .nav-wrapper{
}                                                       width:66vw;
    width:66vw;                                      }
                                                    .nav-wrapper > .link-wrapper{    
    .link-wrapper {                                     text-decoration:underline;
        text-decoration:underline;                  }
    }
}



Luego tambien SCSS te permite hacer mixin y funciones.

Una variable en SCSS es que al principio del archivo, puedes definir un valor y utilizarlo en todo el archivo todas las veces que quieras.
Por ejemplo, estamos diseñando una pagina web que usa siempre los dos mismos colores de background para el header y otro para el footer. Pues declarariamos las variables, $headerColor:black; y $footerColo:grey; y ahora al integrar los estilos en vez de tener que escribir los colores, llamariamos a las variables declaradas.

Ejemplo:

.header {
    background-color: $headerColor;
}

.footer {
    background-color: $footerColor;
}

Declarar variables es muy útil, por un lado por que queda mas ordenado y limpio el codigo, y por otro lado, si en un futuro la web cambiase y quisieramos cambiar el color, con cambiar el valor de la variable se aplicarían los cambios, es decir, no habría que ir uno por uno haciendo el cambio de color cada vez que lo hubieramos usado.

Un mixin en SCSS es como un cacho de estilos que puedes aplicar como estilo en otros elementos. Si estamos contruyendo una pagina web y tenemos que aplicar los mismo estilos a elementos diferentes, en vez de repetir el codigo las veces que se requiera, tienes la posibilidad de agrupar esas lineas y despues incluirlas.
Hay diferentes tipos de mixin,puedes pasarle parametros o no.Es decir, puedes hacer un mixin simple que seria unos estilos especificos(Ver ejemplo) y estos se aplicarían sin más.

@mixin margin {                             .gridOne{
    margin-top:2rem;                            @include margin;
    margin-bottom:2rem;                     }
}

O le puedes pasar parametros especificos y se aplican esos estilos pero con los valores que tu le pasas.Por ejemplo si estamos haciendo el mismo elemento pero tiene un color diferente y un margin diferente,se puede pasar como argumento.

@mixin color-margin($color,$margin){            .container{
    color:$color;                                   @include color-margin(blue,20px);
    margin:$margin;                             }
}

Unidad fraccionaria --> fr Es para dividir el espacio que hay de manera proporcionada. Es decir, si tu quieres dos columnas y que la primera sea el doble que la primera, diriamos que 1fr 2fr, le estamos diciendo que el espacio que hay lo divida en tres partes y que un 1/3 sea la primera columna y que 2/3 para la segunda.
Por ejemplo, si le dijera que 2fr 5fr, el espacio lo dividiria en 2/7 para el primer elemento y 5/7 para el segundo.

Espero haberme explicado bien, cualquier cosa, a tu disposición!
# Dinner-menu

Este programa en JavaScript permite a los usuarios seleccionar elementos del menú para el desayuno, almuerzo o cena, basado en la hora que ingresen. El usuario es guiado a través de una serie de `prompts` para seleccionar un plato principal, segundo y postres del menú correspondiente, y luego recibe un recibo con el costo total.

## Características

- **Menús Dinámicos**: Menús para desayuno, almuerzo y cena con una variedad de platos.
- **Comentarios Aleatorios**: Comentarios de la camarera para mejorar la experiencia del usuario.
- **Selección Basada en la Hora**: Selección de menú basada en la hora para asegurar opciones de comida adecuadas.
- **Validación de Entradas**: Validación de la entrada de la hora y la selección de elementos del menú.
- **Recibo Detallado**: Recibo que muestra los elementos seleccionados y el costo total.

## Instalación

No se requiere instalación. 

## Uso

1. Ejecuta el programa en CODEPEN.
2. Ingresa la hora actual en formato `HH:MM` cuando se te pida.
3. Sigue las indicaciones para seleccionar un plato principal, segundo y postre del menú.
4. Recibe un recibo con el costo total de los elementos seleccionados.

## Ventanas del Navegador: `alert` y `prompt`

### `alert`

`alert` se utiliza para mostrar mensajes al usuario. Detiene la ejecución del script hasta que el usuario cierre la ventana emergente. En este programa, `alert` se usa para mostrar mensajes de confirmación, errores y el recibo final.

Ejemplo de uso:
```javascript
alert("Mensaje para el usuario");
```

### `prompt`

`prompt` se usa para solicitar al usuario que ingrese información. Muestra una ventana emergente con un campo de texto donde el usuario puede escribir. La ejecución del script se detiene hasta que el usuario proporciona una entrada o cancela la operación.

Ejemplo de uso:
```javascript
let userInput = prompt("Por favor, ingresa la hora (HH:MM):");
```

## Detalles Técnicos

### Estructura de Datos del Menú

- Los menús se almacenan en un objeto `menus` que contiene arreglos de objetos de platos para desayuno, almuerzo y cena.
- Cada objeto de plato contiene un `name` con icono, un `nameWithoutIcon` sin icono, y un `price`.

```javascript
const menus = {
    breakfast: {
        dishes: [
            { name: 'Tostada con Mantequilla 🍞', nameWithoutIcon: 'Tostada con Mantequilla', price: 2.50 },
            { name: 'Tortilla de Patatas 🍳', nameWithoutIcon: 'Tortilla de Patatas', price: 3.50 },
            { name: 'Pan con Tomate 🍅', nameWithoutIcon: 'Pan con Tomate', price: 2.99 }
        ],
        dishes_2: [
            { name: 'Zumo de Naranja 🍊', nameWithoutIcon: 'Zumo de Naranja', price: 2.50 },
            { name: 'Café ☕', nameWithoutIcon: 'Café', price: 1.50 },
            { name: 'Té 🍵', nameWithoutIcon: 'Té', price: 1.50 }
        ],
        dishes_3: [
            { name: 'Fruta Fresca 🍓', nameWithoutIcon: 'Fruta Fresca', price: 3.00 },
            { name: 'Yogur con Miel 🍯', nameWithoutIcon: 'Yogur con Miel', price: 2.00 },
            { name: 'Granola 🥣', nameWithoutIcon: 'Granola', price: 1.50 }
        ]
    },
    lunch: {
        dishes: [
            { name: 'Ensalada Mixta 🥗', nameWithoutIcon: 'Ensalada Mixta', price: 5.99 },
            { name: 'Bocadillo de Jamón 🥪', nameWithoutIcon: 'Bocadillo de Jamón', price: 6.99 },
            { name: 'Sopa de Pollo 🍲', nameWithoutIcon: 'Sopa de Pollo', price: 4.99 }
        ],
        dishes_2: [
            { name: 'Patatas Fritas 🍟', nameWithoutIcon: 'Patatas Fritas', price: 2.50 },
            { name: 'Ensalada Verde 🥗', nameWithoutIcon: 'Ensalada Verde', price: 3.50 },
            { name: 'Galletas 🍪', nameWithoutIcon: 'Galletas', price: 1.50 }
        ],
        dishes_3: [
            { name: 'Pan de Ajo 🍞', nameWithoutIcon: 'Pan de Ajo', price: 1.99 },
            { name: 'Puré de Patatas 🥔', nameWithoutIcon: 'Puré de Patatas', price: 2.00 },
            { name: 'Arroz Blanco 🍚', nameWithoutIcon: 'Arroz Blanco', price: 1.50 }
        ]
    },
    dinner: {
        dishes: [
            { name: 'Espaguetis a la Boloñesa 🍝', nameWithoutIcon: 'Espaguetis a la Boloñesa', price: 8.99 },
            { name: 'Pizza Margarita 🍕', nameWithoutIcon: 'Pizza Margarita', price: 7.99 },
            { name: 'Tacos de Pollo 🌮', nameWithoutIcon: 'Tacos de Pollo', price: 9.99 }
        ],
        dishes_2: [
            { name: 'Vino Tinto 🍷', nameWithoutIcon: 'Vino Tinto', price: 4.50 },
            { name: 'Cerveza 🍺', nameWithoutIcon: 'Cerveza', price: 3.50 },
            { name: 'Agua con Gas 🥤', nameWithoutIcon: 'Agua con Gas', price: 1.50 }
        ],
        dishes_3: [
            { name: 'Puerros asados🥦', nameWithoutIcon: 'Puerros asados', price: 2.00 },
            { name: 'Patatas Asadas 🥔', nameWithoutIcon: 'Patatas Asadas', price: 2.50 },
            { name: 'Ensalada 🥗', nameWithoutIcon: 'Ensalada', price: 2.50 }
        ]
    }
};
```

### Gestión de Errores

1. **Hora Inválida**:
    - Si el usuario ingresa una hora fuera del rango de 08:00 a 23:00, se muestra un mensaje de error y se le pide que ingrese la hora nuevamente.
    - Si el usuario cancela el `prompt` de hora, se muestra un mensaje de cancelación y se termina el proceso.

2. **Selección de Plato Inválida**:
    - Si el usuario ingresa un nombre de plato que no está en el menú, se muestra un mensaje de error y se le pide que ingrese el nombre nuevamente.
    - Para facilitar la comparación de la entrada del usuario con los nombres de los platos en el menú, se utiliza el método `toLowerCase()` para convertir ambas cadenas a minúsculas. Esto asegura que la comparación no sea sensible a mayúsculas/minúsculas.
    - Si el usuario cancela el `prompt` de selección de plato, se muestra un mensaje de cancelación y se termina el proceso.
    - La selección del plato se realiza dentro de un bucle `while` que continúa solicitando la entrada hasta que el usuario ingrese un nombre de plato válido o cancele el `prompt`.

### Selección Aleatoria

- **Comentarios Aleatorios**:
    - Se utiliza la función `Math.random()` para seleccionar un comentario aleatorio.
    - Ejemplo de código:
    ```javascript
    function getRandomComment(comments) {
        const index = Math.floor(Math.random() * comments.length);
        return comments[index];
    }
    ```

### Validación de Hora

- La función `getMealTime` valida que la hora ingresada esté dentro del rango permitido y determina el momento de la comida (desayuno, almuerzo, cena) basado en la hora.
- Ejemplo de código:
    ```javascript
    function getMealTime(hour) {
        const [hours, minutes] = hour.split(':').map(Number);
        if (hours < 8 || hours >= 24 || (hours === 23 && minutes > 0) || isNaN(hours) || isNaN(minutes)) {
            return null;
        }
        if (hours >= 8 && hours <= 10) {
            return 'breakfast';
        } else if (hours >= 11 && hours <= 16) {
            return 'lunch';
        } else if (hours >= 17 && hours <= 23) {
            return 'dinner';
        } else {
            return null;
        }
    }
    ```

### Selección de Elementos del Menú

- La función `selectItem` muestra el menú y permite la selección del usuario por el nombre del plato. Valida la entrada para asegurar que el elemento seleccionado está en el menú.
- Para facilitar la comparación, se utiliza el método `toLowerCase()` para convertir la entrada del usuario y los nombres de los platos a minúsculas.
- La selección del plato se realiza dentro de un bucle `while` que continúa solicitando la entrada hasta que el usuario ingrese un nombre de plato válido o cancele el `prompt`.
- Ejemplo de código:
    ```javascript
    function selectItem(menu, mealTime) {
        let message = `Menu for ${mealTime.charAt(0).toUpperCase() + mealTime.slice(1)}:\n\n`;
        menu.forEach((item) => {
            message += `${item.name} - €${item.price.toFixed(2)}\n`;
        });

        let selection = '';
        let selectedItem = null;
        while (!selectedItem) {
            selection = prompt(`\n${message}\nPlease type the name of the item you want:`);
            if (selection === null) {
                alert("Process canceled.");
                return null;
            }
            selection = selection.trim().toLowerCase();
            selectedItem = menu.find(item => item.nameWithoutIcon.toLowerCase() === selection);
            if (!selectedItem) {
                alert("Invalid entry. Please type a valid item name from the menu.");
            }
        }

        alert(getRandomComment(comments));
        return selectedItem;
    }
    ```

### Cálculo del Recibo Total

- Después de seleccionar el plato principal y el segundo y el postre, se calcula el costo total sumando los precios de los elementos seleccionados.
- Se muestra un recibo detallado al usuario que incluye el nombre y el precio de cada elemento seleccionado, así como el costo total.
- Ejemplo de código:
```javascript
function runMenu() {
        let mealTime = null;
        while (!mealTime) {
            const selectedTime = prompt("Welcome\nOur service hours are from 08:00 to 23:00. \nPlease enter the time (HH:MM) to select your meal:");
            if (selectedTime === null) {
                alert("Process canceled.");
                return;
            }
            mealTime = getMealTime(selectedTime);
            if (!mealTime) {
                alert("Invalid time. Please enter a time within the permitted hours.");
            }
        }

        const mealTimeComment = getRandomComment(mealTimeComments[mealTime]);
        alert(mealTimeComment);

        const menu = menus[mealTime];

        const mainDish = selectItem(menu.dishes, 'main dish', mealTime);
        if (!mainDish) return;

        const dish1 = selectItem(menu.dishes_2, 'dish', mealTime);
        if (!dish1) return;

        const dish2 = selectItem(menu.dishes_3, 'dish', mealTime);
        if (!dish2) return;

        const totalCost = mainDish.price + dish1.price + dish2.price;
        alert(`Receipt\n${mainDish.name} = €${mainDish.price.toFixed(2)}\n${dish1.name} = €${dish1.price.toFixed(2)}\n${dish2.name} = €${dish2.price.toFixed(2)}\n\nTotal cost: €${totalCost.toFixed(2)}\nThank you for visiting us!`);
    }

    runMenu();    
```


           



           


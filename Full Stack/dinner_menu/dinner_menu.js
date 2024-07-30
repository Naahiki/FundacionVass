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


// Comentarios
const comments = [
    "Good choice! 😊",
    "That sounds delicious. 🍽️",
    "That's a popular option. 👍",
    "I hope you enjoy your meal. 😋",
    "You have great taste! 👌"
];

// Comentarios de la hora de comida 
const mealTimeComments = {
    breakfast: [
        "Good morning! It's time for breakfast to start your day with energy. 🌞",
        "It's breakfast time. What would you like to eat this morning? 🍳",
        "Breakfast is ready. Choose your favorite dishes to start the day right! 🥐"
    ],
    lunch: [
        "It's lunchtime. What would you like to enjoy this afternoon? 🍲",
        "Lunch time! Perfect to recharge energy for the afternoon. 🥗",
        "It's the ideal time for a good lunch. What do you fancy? 🥪"
    ],
    dinner: [
        "Good evening. It's time to have dinner and relax after a long day. 🌜",
        "It's dinner time. Choose something delicious to end the day. 🍝",
        "Dinner is ready. Perfect to enjoy a good meal before resting! 🌮"
    ]
};

// Función para seleccionar un comentario aleatorio
function getRandomComment(comments) {
    const index = Math.floor(Math.random() * comments.length);
    return comments[index];
}

// Función para mostrar el menú completo y permitir la selección por nombre
function selectItem(menu, type, mealTime) {
    // Construir el mensaje del menú para mostrar al usuario
    let message = `Menu for ${mealTime.charAt(0).toUpperCase() + mealTime.slice(1)} - ${type.charAt(0).toUpperCase() + type.slice(1)}:\n\n`;
    menu.forEach((item) => {
        message += `${item.name} - €${item.price.toFixed(2)}\n`;
    });

    // Bucle hasta que el usuario proporcione una selección válida
    let selection = '';
    let selectedItem = null;
    while (!selectedItem) {
        // Solicitar al usuario que escriba el nombre del plato que quiere seleccionar
        selection = prompt(`\n${message}\nPlease type the name of the ${type} you want:`);
        if (selection === null) {
            alert("Process canceled. ❌");
            return null;
        }
        // Encontrar el artículo seleccionado en el menú (insensible a mayúsculas/minúsculas)
        selection = selection.trim().toLowerCase();
        selectedItem = menu.find(item => item.nameWithoutIcon.toLowerCase() === selection);
        if (!selectedItem) {
            alert("Invalid entry. Please type a valid item name from the menu. 🛑");
        }
    }

    // Mostrar un comentario aleatorio de la camarera
    alert(getRandomComment(comments));
    return selectedItem;
}

// Función para determinar el momento de la comida basado en la hora ingresada
function getMealTime(hour) {
    const [hours, minutes] = hour.split(':').map(Number);
    
    // Validar la hora ingresada
    if (hours < 8 || hours >= 24 || (hours === 23 && minutes > 0) || isNaN(hours) || isNaN(minutes)) {
        return null;
    }
    
    // Determinar el momento de la comida basado en las horas
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

// Función principal para ejecutar el menú
function runMenu() {
    let mealTime = null;
    while (!mealTime) {
        // Solicitar al usuario que ingrese la hora
        const selectedTime = prompt("👋 Welcome 👋\nOur service hours are from 08:00 to 23:00 .\nPlease enter the time (HH:MM) to select your meal:");
        if (selectedTime === null) {
            alert("Process canceled. ❌");
            return;
        }
        // Obtener el momento de la comida basado en la hora ingresada
        mealTime = getMealTime(selectedTime);
        if (!mealTime) {
            alert("Invalid time. Please enter a time within the permitted hours. 🕒");
        }
    }

    // Obtener un comentario adecuado para la hora de la comida y mostrarlo
    const mealTimeComment = getRandomComment(mealTimeComments[mealTime]);
    alert(mealTimeComment);

    const menu = menus[mealTime];

    // Seleccionar plato principal
    const mainDish = selectItem(menu.dishes, 'main dish', mealTime);
    if (!mainDish) return;  // Si el usuario cancela

    // Seleccionar primer plato
    const dish1 = selectItem(menu.dishes_2, 'dish', mealTime);
    if (!dish1) return;  // Si el usuario cancela

    // Seleccionar segundo plato
    const dish2 = selectItem(menu.dishes_3, 'dish', mealTime);
    if (!dish2) return;  // Si el usuario cancela

    // Calcular el costo total y mostrar el recibo
    const totalCost = mainDish.price + dish1.price + dish2.price;
    alert(`💰Receipt💰\n${mainDish.name} = €${mainDish.price.toFixed(2)}\n${dish1.name} = €${dish1.price.toFixed(2)}\n${dish2.name} = €${dish2.price.toFixed(2)}\n\nTotal cost: €${totalCost.toFixed(2)}\nThank you for visiting us! 😊❤️`);
}

// Ejecutar el menú
runMenu();

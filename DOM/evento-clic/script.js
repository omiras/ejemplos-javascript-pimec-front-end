const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

function gestionarClic() {
    // 1. Seleccionar un color aleatorio del array colors
    const randomIndex = Math.floor(Math.random() * colors.length);

    // 2. Modificar el estilo en línea de todo el nodo <body>
    document.querySelector("body").style.backgroundColor = colors[randomIndex];
}

document.querySelector("#btn").addEventListener("click", gestionarClic); 
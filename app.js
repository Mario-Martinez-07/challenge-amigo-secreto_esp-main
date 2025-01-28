// Declarar un arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un nombre al arreglo de amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios innecesarios

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al arreglo de amigos
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar el contenido actual de la lista
    lista.innerHTML = "";

    // Generar la lista de amigos
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
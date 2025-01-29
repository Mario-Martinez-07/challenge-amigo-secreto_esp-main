// Declarar un arreglo para almacenar los nombres de los amigos
// Arreglo amigos: Este almacena los nombres ingresados.
let amigos = [];

// Función para añadir un nombre al arreglo de amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    // Captura el valor del campo de entrada utilizando document.getElementById.
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios innecesarios

    // Validar que el campo no esté vacío
    // Valida que no esté vacío. Si lo está, muestra un mensaje de error mediante alert.
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Añadir el nombre al arreglo de amigos
    // Si la validación pasa, agrega el nombre al arreglo amigos usando .push().
    amigos.push(nombre);

    // Actualizar la lista en el HTML
    // Llama a actualizarListaAmigos para reflejar los cambios en la lista visible.
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    // Limpia el campo de texto.
    input.value = "";
}

// Este código se enlaza automáticamente con el botón de "Añadir" gracias al atributo onclick que llama a agregarAmigo().
// Función para actualizar la lista de amigos en el HTML
// Función actualizarListaAmigos: Vacía el contenido actual de la lista HTML (listaAmigos).
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar el contenido actual de la lista
    lista.innerHTML = "";

    // Generar la lista de amigos
    // Itera sobre el arreglo amigos y crea un elemento <li> por cada amigo, agregándolo dinámicamente a la lista.
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    // Comprueba si el arreglo amigos contiene elementos. Si está vacío, muestra un mensaje de error con alert.
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    // Genera un número aleatorio basado en la longitud del arreglo usando Math.random() y Math.floor().
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    // Selecciona el nombre: Utiliza el índice generado para acceder a un elemento del arreglo.
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    // Actualiza el HTML: Muestra el nombre sorteado en el elemento con el ID resultado.
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${amigoSorteado}</strong></li>`;
}
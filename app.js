// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Amigo secreto
// En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".
// El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.
// Fucionalidades:

// Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
// Función para agregar un amigo a la lista
function agregarAmigo() {
    //Obtiene el valor del campo de texto con id="amigo".
    const inputAmigo = document.getElementById(`amigo`);
    // Verifica si el campo no está vacío usando trim() para eliminar espacios en blanco al principio y al final.
    const nombreAmigo = inputAmigo.value.trim();

//Si el campo no está vacío, crea un nuevo elemento <li> con el nombre del amigo y lo agrega a la lista (<ul id="listaAmigos">).
if (nombreAmigo !== "") {
    const listaAmigos = document.getElementById(`listaAmigos`);
    // Crear un nuevo elemento de lista (<li>)
    const nuevoAmigo = document.createElement(`li`);
    // Agregar el nuevo elemento a la lista
    listaAmigos.appendChild(nuevoAmigo);
    nuevoAmigo.textContent = nombreAmigo;
    // Limpiar el campo de texto después de agregar el nombre
    inputAmigo.value = "";
    } else {
    // Mostrar un mensaje de alerta si el campo está vacío
    alert(`Por favor, ecribe un nombre antes de añadir.`);
    }
}

// Función para sortear un amigo secreto (puedes implementarla más adelante)
function sortearAmigo() {
    // Aquí puedes agregar la lógica para sortear un amigo secreto
    alert("Función de sorteo aún no implementada.");
}



// Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.


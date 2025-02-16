// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    Amigo secreto
    En este desafío, desarrollarás una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

    El usuario deberá agregar nombres mediante un campo de texto y un botón "Adicionar". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

    Fucionalidades:
    Agregar nombres: Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".

    Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    Visualizar la lista: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.

    Sorteo aleatorio: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
*/

const INPUT_NOMBRE_AMIGO = document.getElementById("amigo")
const LISTA_NOMBRES_AMIGOS = document.getElementById("listaAmigos")
const RESULTADO_SORTEO = document.getElementById("resultado")

function agregarAmigo() {
    const AMIGO_NAME = INPUT_NOMBRE_AMIGO.value.trim()

    if (AMIGO_NAME === "") {
        alert("Por favor, ingresa un nombre válido.")
        return
    }

    for (let li of LISTA_NOMBRES_AMIGOS.children) {
        if (li.innerText.toLowerCase() === AMIGO_NAME.toLowerCase()) {
            alert("Este nombre ya está en la lista.")
            INPUT_NOMBRE_AMIGO.value = ""
            return
        }
    }

    const LI = document.createElement("li")
    LI.innerText = AMIGO_NAME
    LISTA_NOMBRES_AMIGOS.appendChild(LI)

    INPUT_NOMBRE_AMIGO.value = "" // Limpiar el campo luego de agregar.
}

function sortearAmigo() {
    if (LISTA_NOMBRES_AMIGOS.children.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.")
        return
    }

    let index_resultado = Math.floor(Math.random() * LISTA_NOMBRES_AMIGOS.children.length)
    RESULTADO_SORTEO.innerText = LISTA_NOMBRES_AMIGOS.children[index_resultado].innerText
}

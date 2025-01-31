// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let agregaNuevoAmigo = []
let lista = document.querySelector(".name-list")
let amigo = document.querySelector(".input-name")

function agregarAmigo (){
    lista.innerHTML = ""

    agregaNuevoAmigo.push(amigo.value)
    console.log(agregaNuevoAmigo)

    for (let i = 0; i < agregaNuevoAmigo.length; i++) {

        const nuevoAmigo = document.createElement("li")
        nuevoAmigo.textContent = agregaNuevoAmigo[i];
        
        amigo.value = ""



        lista.appendChild(nuevoAmigo)

        console.log(nuevoAmigo)
        
    }

    

}
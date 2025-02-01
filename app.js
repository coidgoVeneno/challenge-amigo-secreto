// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []
let lista = document.querySelector(".name-list")
let amigo = document.querySelector(".input-name")

/* function agregarAmigo (){
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

}*/

// Refactorizando la funcion de agregar amigos

function agregarAmigo(){
    if(validarNombre(amigo.value)){
        if(listaDeAmigos.length<5){
            lista.innerHTML = "";    
         listaDeAmigos.push(amigo.value);
        //console.log(listaDeAmigos)
        listaDeAmigos.forEach(li => {
            const listas = document.createElement("li");
            listas.textContent = li;
            lista.appendChild(listas)
            //console.log(listas)       
            
        });    
        } else{
            console.log("Exediste el limete de la lista, es hora de elegir un amigo.")
        }
    
        amigo.value=""; 
    }   else{
        console.log("El nombre no es valido solo letras de el alfabeto seran admitidas tampoco los espacios seran permitidos")
    }
}

function validarNombre (nombre){
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ'-]{2,50}$/;
  return regex.test(nombre);
}

//console.log(validarNombre("Satoru"))
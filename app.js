// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = []
let lista = document.querySelector(".name-list")
let amigo = document.querySelector(".input-name")
let btnSorteo = document.querySelector(".button-draw")



// Refactorizando la funcion de agregar amigos

function agregarAmigo(){
    validadorDeSorteo()
    
    if(validarNombre(amigo.value)){
        if(listaDeAmigos.length<5){
            lista.innerHTML = "";    
         listaDeAmigos.push(amigo.value);
        //console.log(listaDeAmigos)
        listaDeAmigos.forEach(li => {
            const listas = document.createElement("li");
            listas.textContent = li;
            lista.appendChild(listas)
                   
            
        });    
        } else{
            
            alert("Exediste el limete de la lista ya que puede ser hasta 5, es hora de elegir un amigo.")
        }
    
        amigo.value=""; 
    }   else{
      

        alert("El nombre no es valido solo letras de el alfabeto seran admitidas tampoco los espacios seran permitidos")
    }
}

function validarNombre (nombre){
    const regex = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ'-]{2,50}$/;
  return regex.test(nombre);
}

//El boton de sortear amigo solo estara abilitado cuando tengas dos o mas amigos listados

function validadorDeSorteo(){
    if(listaDeAmigos.length < 1){
        btnSorteo.disabled = true

    } else{
        btnSorteo.disabled = false
    }
}

function sortearAmigo(){
    lista.innerHTML = ""
    const elejido = Math.floor(Math.random()*listaDeAmigos.length)
    const amigoSecreto = listaDeAmigos[elejido]
  
   const amigoSecretoLista = document.createElement("li")
   amigoSecretoLista.textContent = `Tu amigo secreto es: ${amigoSecreto}`;
   lista.appendChild(amigoSecretoLista)

    listaDeAmigos = []
}

validadorDeSorteo()


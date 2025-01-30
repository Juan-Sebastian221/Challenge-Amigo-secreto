let listaDeAmigos = [];

// Agregar amigos a la lista
function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo");
    let nombreAmigo = nombreIngresado.value.trim(); // 

    if (nombreAmigo === "") {
        alert("Ingresa un nombre");
        return;
    }

    // evitar nombres repetidos en la lista
    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya está");
        return;
    }

    listaDeAmigos.push(nombreAmigo);

    // limpia casilla  
    nombreIngresado.value = "";

    //actualizar lista
    mostrarListaAmigos();
}

// mostrar lista de amigos
function mostrarListaAmigos() {
    let listaAmigosElement = document.getElementById("listaAmigos");
    listaAmigosElement.innerHTML = "";

    listaDeAmigos.forEach(function (amigo) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigo;
        listaAmigosElement.appendChild(nuevoElemento);
    });
}

//  sortear amigo
function sortearAmigos() {
    if (listaDeAmigos.length < 1) {
        alert("No quedan mas nombres para sortear");
        return;
    }

    // nombre al azar
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let nombreAleatorio = listaDeAmigos[indiceAleatorio];

    // resultado
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `Tu amigo es: ${nombreAleatorio}!`;

    // quitar nombre sorteado de la lista
    listaDeAmigos.splice(indiceAleatorio, 1);

    // actualizar lista 
    mostrarListaAmigos();
}
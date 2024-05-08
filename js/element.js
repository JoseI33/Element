function iniciarJuego() {
    let botonMascota = document.getElementById("boton-mascota");
    botonMascota.addEventListener('click', seleccionarMascota);
}

function seleccionarMascota() {

    let inputPyro = document.getElementById('pyro');
    let inputnereus = document.getElementById('nereus');
    let inputGaia = document.getElementById('gaia');
    let inputFyrenado = document.getElementById('fyrenado');
    let inputGeolimne = document.getElementById('geolimne');
    let inputTerrablaze = document.getElementById('terrablaze');
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputPyro.checked) {
        spanMascotaJugador.innerHTML = "Pyro";
    } else if (inputnereus.checked) {
        spanMascotaJugador.innerHTML = "Nereus";
    } else if (inputGaia.checked) {
        spanMascotaJugador.innerHTML = "Gaia";
    } else if (inputFyrenado.checked) {
        spanMascotaJugador.innerHTML = "Fyrenado";
    } else if (inputGeolimne.checked) {
        spanMascotaJugador.innerHTML = "Geolimne";
    } else if  (inputTerrablaze.checked){
        spanMascotaJugador.innerHTML = "Terrablaze";
    }else{
        alert('Selecciona una mascota.')
    }
}

    window.addEventListener("load", iniciarJuego)
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

    if (inputPyro.checked) {
        alert('Seleccionaste a Pyro')
    } else if (inputnereus.checked) {
        alert('Seleccionaste a Nereus')
    } else if (inputGaia.checked) {
        alert('Seleccionaste a Gaia')
    } else if (inputFyrenado.checked) {
        alert('Seleccionaste a Fyrenado')
    } else if (inputGeolimne.checked) {
        alert('Seleccionaste  al Geolimne')
    } else if  (inputTerrablaze.checked){
        alert ('Seleccionaste a Terrablaze')
    }else{
        alert('Debes elegir un personaje')
    }
}

    window.addEventListener("load", iniciarJuego)
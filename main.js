
const home = document.getElementById("home");
const boton_home = document.getElementById('boton_home');

const mensa = document.getElementById("mensaje");
const boton_mensaje = document.getElementById("boton_mensaje");

const linterna = document.getElementById("linterna");
const boton_linterna = document.getElementById("boton_linterna");

const caja = document.getElementById("caja");
const TextoCaja = document.getElementById("TextoCaja");
const boton_caja_CD9 = document.getElementById("boton_caja_CD9");
const boton_caja_Cempasuchil = document.getElementById("boton_caja_Cempasuchil");
const boton_caja_StrangerTings = document.getElementById("boton_caja_StrangerTings");
const boton_caja_Sinsajo = document.getElementById("boton_caja_Sinsajo");


boton_home.addEventListener('click', () => {

    home.classList.toggle('desvanecimiento');

    home.addEventListener("transitionend", function handler() {
        home.classList.toggle('oculto');
        mensa.classList.remove("oculto");
        mensa.classList.add("aparecimiento");
        setTimeout(() => mensa.classList.remove("aparecimiento"), 601);
    });




});

boton_mensaje.addEventListener('click', () => {
    mensa.classList.toggle('desvanecimiento');

    mensa.addEventListener("transitionend", function handler() {
        mensa.classList.remove("ya_activo");
        mensa.classList.toggle('oculto');
        linterna.classList.remove("oculto");
        linterna.classList.add("aparecimiento");
        setTimeout(() => linterna.classList.remove("aparecimiento"), 601);

    });

});


boton_linterna.addEventListener('click', () => {
    linterna.classList.toggle('desvanecimiento');

    linterna.addEventListener("transitionend", function handler() {
        linterna.classList.remove("ya_activo");
        linterna.classList.toggle('oculto');
        caja.classList.remove("oculto");
        caja.classList.add("aparecimiento");
        setTimeout(() => caja.classList.remove("aparecimiento"), 601);

    });

});

const sound = document.getElementById("silvido");
boton_caja_Sinsajo.addEventListener('click', () => {

    document.documentElement.style.setProperty(
        "--fondohome",
        "linear-gradient(-45deg, #1a1a1aff, #1f1f1fff, #313027ff, #2f2b25ff)"
    );
    document.documentElement.style.setProperty(
        "--fondoBotonesEnd",
        "linear-gradient( #ec0d0d, #ec6b00, #f07f20, #d6a13d, #f4c01c)"
    );


    sound.currentTime = 0;
    sound.play();

});





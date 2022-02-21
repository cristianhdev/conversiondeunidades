
let video;
let audioOvers = null;
let audioOverOut = null;


let contenedorMenus = [
    '#unidades-longitud',
    '#unidades-Area',
    '#unidades-Volumen',
    '#unidades-Temperatura',
    '#unidades-Masa',
    '#unidades-Velocidad'
]


let menuactual = '#unidades-longitud'

function init() {


    audioOvers = new Sonidos('33');
    audioOverOut = new Sonidos('32');
    document.querySelector('.buttonOpcion').addEventListener('mouseover', btnOverMenu, false)
    document.querySelector('.buttonOpcion').addEventListener('mouseout', btnOutMenu, false)
}


function btnOverMenu() {
    audioOvers.playAudio()
    audioOverOut.stopAudio()
}


function btnOutMenu() {
    audioOvers.stopAudio()
    audioOverOut.playAudio()
}


function mostrarMenu(id, element) {
    ocultarOpciones()
    removerMenuActive()
    limpiarInputsGlobal()
    document.querySelector(`#${element}`).classList.add('menu_activo')
    document.querySelector(contenedorMenus[id]).style.display = "block"
    menuactual = contenedorMenus[id]
}

function removerMenuActive() {
    let menuOpcion = [
        '#menu1',
        '#menu2',
        '#menu3',
        '#menu4',
        '#menu5',
        '#menu6'
    ]

    menuOpcion.forEach(menu => {
        document.querySelector(menu).classList.remove('menu_activo')
    });
}

function ocultarOpciones() {
    contenedorMenus.forEach(element => {
        document.querySelector(element).style.display = "none"
    });
}

function continuar() {
    document.querySelector('.bienvenida').style.display = "none";
    if (verifyMobile()) {
        document.querySelector('.titulo').style.marginTop = "420px";
    } else {
        document.querySelector('.titulo').style.marginTop = "12px";
    }

    document.querySelector('#menu-unidades').style.display = "block";
}

function atras() {
    document.querySelector('.bienvenida').style.display = "block";
    if (verifyMobile()) {
        document.querySelector('.titulo').style.marginTop = "145px";
    } else {
        document.querySelector('.titulo').style.marginTop = "12px";
    }
    document.querySelector('#menu-unidades').style.display = "none";
    limpiarInputs()
    menuactual = '#unidades-longitud'
}

function calcular() {
    let inputs = document.querySelectorAll(`${menuactual} div input`)
    let inputNoEmpy = Array.from(inputs).filter((input) => {
        return input.value != ""
    })

    console.log(Array.from(inputs))

    if (inputNoEmpy.length >= 1) {
        Array.from(inputs).forEach(input => {
            document.querySelector(`#${input.id}`).style.boxSizing = "border-box";
            document.querySelector(`#${input.id}`).style.border = "2px solid #ccc";
        })
        let inputEmpy = Array.from(inputs).filter((input) => {
            return input.value == ""
        })
        //LLamamos dinamicamente la funcion de calculo
        let fn_name = inputNoEmpy[0].id,
            fn = eval("To" + fn_name);

        let resultado = Object.values(fn(inputNoEmpy[0].value))
        resultado = resultado.filter((value) => {
            return value != null
        })

        inputEmpy.forEach((input, index) => {
            document.querySelector(`#${input.id}`).value = resultado[index]
        });
    } else {
        let inputs = document.querySelectorAll(`${menuactual} div input`)
        Array.from(inputs).forEach(input => {
            console.log(document.querySelector(`#${input.id}`).style.border);
            document.querySelector(`#${input.id}`).style.border = "1px solid red"
        })
    }


}

function limpiarInputs() {
    let inputs = document.querySelectorAll(`${menuactual} div input`)
    Array.from(inputs).forEach(input => {
        document.querySelector(`#${input.id}`).value = ''
    })
}

function limpiarInputsGlobal() {
    let inputs = document.querySelectorAll(`input`)
    Array.from(inputs).forEach(input => {
        document.querySelector(`#${input.id}`).value = ''
    })
}

function metodosConversion() {

}

function verifyMobile() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    return isMobile
}





// Get the modal
let modal = document.getElementById("myModal");



// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

/* span.addEventListener('click', ocultarModal); */
/* window.addEventListener('click', ocultarModalVentana) */

function ocultarModal() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function ocultarModalVentana(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function MostrarVideo() {
    modal.style.display = "flex";
}

function OcultarVideo() {

    modal.style.display = "none";
}

function ReproducirVideo() {
    video.play()
}

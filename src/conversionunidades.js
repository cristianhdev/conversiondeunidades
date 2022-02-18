let conversion = {
    metros: 0,
    centimetros: 0,
    milimetros: 0,
    pulgadas: 0,
    pies: 0,
    yardas: 0
}

let conversion_unidades_cubicas = {
    metros: 0,
    centimetros: 0,
    milimetros: 0,
    pulgadas: 0,
    pies: 0,
    yardas: 0,
    onzas: 0,
    litros: 0,
    galones: 0
}

let conversion_unidades_temperatura = {
    farenhweit: 0,
    celcius: 0,
    kelvin: 0
}


let conversion_unidades_velocidad = {
    metros_seg: 0,
    pulgada_seg:0,
    pies_seg: 0,
    pies_min: 0,
    pies_hora: 0
}

let conversion_unidades_masa = {
    kilogramos: 0,
    gramos: 0,
    onzas: 0,
    libras: 0,
    toneladas: 0
}


function Tometros(valor) {
    //Centimetros
    conversion.metros = null
    conversion.centimetros = valor * 100
    conversion.milimetros = valor * (1000 / 1.0)
    conversion.pulgadas = valor * (39.37 / 1.0)
    conversion.pies = valor * (3.28 / 1.0)
    conversion.yardas = valor * (1.0936 / 1.0)
    return conversion
}

function Tocentimetros(valor) {
    conversion.metros = valor / 100
    conversion.milimetros = valor * 10
    conversion.centimetros = null
    conversion.pulgadas = valor * 0.39370
    conversion.pies = valor / 30.48
    conversion.yardas = valor / 91.44

    return conversion
}

function Tomilimetros(valor) {
    conversion.metros = valor / 1000
    conversion.centimetros = valor / 10
    conversion.milimetros = null
    conversion.pulgadas = valor / 25.4
    conversion.pies = valor / 304.8
    conversion.yardas = valor / 914.4

    return conversion
}

function Topulgadas(valor) {
    conversion.metros = valor / 39.37
    conversion.centimetros = valor * 2.54
    conversion.milimetros = valor * 25.4
    conversion.pulgadas = null,
        conversion.pies = valor / 12.0
    conversion.yardas = valor / 36

    return conversion
}

function Topies(valor) {
    conversion.metros = valor / 3.28
    conversion.centimetros = valor * 30.48
    conversion.milimetros = valor * 304.8
    conversion.pulgadas = valor * 12,
        conversion.pies = null
    conversion.yardas = valor / 3

    return conversion
}

function Toyardas(valor) {
    conversion.metros = valor * 0.9144
    conversion.centimetros = valor * 91.44
    conversion.milimetros = valor * 914.4
    conversion.pulgadas = valor * 36
    conversion.pies = valor * 3
    conversion.yardas = null

    return conversion

}


//Unidades cuadradas
function Tometros_cuadrados(valor) {
    //Centimetros
    conversion.metros = null
    conversion.centimetros = valor * 10000
    conversion.milimetros = valor * 1000000
    conversion.pulgadas = valor * 1550.0031
    conversion.pies = valor * 10.764
    conversion.yardas = valor * 1.1960
    return conversion
}

function Tocentimetros_cuadrados(valor) {
    //Centimetros
    conversion.metros = valor / 10000
    conversion.centimetros = null
    conversion.milimetros = valor / 0.010000
    conversion.pulgadas = valor * 0.15500
    conversion.pies = valor * 0.0010764
    conversion.yardas = valor * 0.00011960
    return conversion
}

function Tomilimetros_cuadrados(valor) {
    conversion.metros = valor / 1000000
    conversion.centimetros = valor / 100
    conversion.milimetros = null
    conversion.pulgadas = valor * 0.0015500
    conversion.pies = valor * 0.000010764
    conversion.yardas = valor * 0.0000011960

    return conversion
}

function Topulgadas_cuadrados(valor) {
    conversion.metros = valor / 1550.0
    conversion.centimetros = valor / 0.15500
    conversion.milimetros = valor / 0.0015500
    conversion.pulgadas = null
    conversion.pies = valor * 0.0069444
    conversion.yardas = valor * 0.00077160

    return conversion
}

function Topies_cuadrados(valor) {
    conversion.metros = valor / 10.764
    conversion.centimetros = valor / 0.0010764
    conversion.milimetros = valor / 0.000010764
    conversion.pulgadas = valor * 144.00
    conversion.pies = null
    conversion.yardas = valor * 0.11111

    return conversion
}


function Toyardas_cuadradas(valor) {
    conversion.metros = valor * 1.196
    conversion.centimetros = valor / 0.00011960
    conversion.milimetros = valor * 836, 127
    conversion.pulgadas = valor * 1296.0
    conversion.pies = valor * 9.0000
    conversion.yardas = null

    return conversion

}

/**
 * 
 * @param {Object}  
 * conversion_unidades_cubicas = {
    metros: 0,
    centimetros: 0,
    milimetros: 0,
    pulgadas: 0,
    pies: 0,
    yardas: 0,
    onzas:0,
    litros:0,
    galones:0
}
 * @returns 
 */

//Unidades cubicas
function Tometros_cubicos(valor) {
    //Centimetros
    conversion_unidades_cubicas.metros = null
    conversion_unidades_cubicas.centimetros = valor * 10000
    conversion_unidades_cubicas.milimetros = valor * 1000000000
    conversion_unidades_cubicas.pulgadas = valor * 61024
    conversion_unidades_cubicas.pies = valor * 35.315
    conversion_unidades_cubicas.yardas = valor * 1.308
    conversion_unidades_cubicas.onzas = valor * 33814
    conversion_unidades_cubicas.litros = valor * 1000
    conversion_unidades_cubicas.galones = valor * 264

    return conversion_unidades_cubicas
}

function Tocentimetros_cubicos(valor) {
    //Centimetros
    conversion_unidades_cubicas.metros = valor / 1000000
    conversion_unidades_cubicas.centimetros = null
    conversion_unidades_cubicas.milimetros = valor * 1000
    conversion_unidades_cubicas.pulgadas = valor / 16387
    conversion_unidades_cubicas.pies = valor / 28317
    conversion_unidades_cubicas.yardas = valor / 764555
    conversion_unidades_cubicas.onzas = valor / 29574
    conversion_unidades_cubicas.litros = valor / 1000
    conversion_unidades_cubicas.galones = valor / 3785

    return conversion_unidades_cubicas
}

function Tomilimetros_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 1000000000
    conversion_unidades_cubicas.centimetros = valor / 1000
    conversion_unidades_cubicas.milimetros = null
    conversion_unidades_cubicas.pulgadas = valor / 16387
    conversion_unidades_cubicas.pies = valor / 28317
    conversion_unidades_cubicas.yardas = valor / 764600000000
    conversion_unidades_cubicas.onzas = valor / 29574
    conversion_unidades_cubicas.litros = valor / 1000000
    conversion_unidades_cubicas.galones = valor / 3785000000


    return conversion_unidades_cubicas
}

function Topulgadas_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 61024
    conversion_unidades_cubicas.centimetros = valor * 16387
    conversion_unidades_cubicas.milimetros = valor * 16387
    conversion_unidades_cubicas.pulgadas = null
    conversion_unidades_cubicas.pies = valor / 1728
    conversion_unidades_cubicas.yardas = valor / 46656
    conversion_unidades_cubicas.onzas = valor / 1805
    conversion_unidades_cubicas.litros = valor / 61024
    conversion_unidades_cubicas.galones = valor / 231

    return conversion_unidades_cubicas
}

function Topies_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 35315
    conversion_unidades_cubicas.centimetros = valor * 28317
    conversion_unidades_cubicas.milimetros = valor * 28317
    conversion_unidades_cubicas.pulgadas = valor * 1728
    conversion_unidades_cubicas.pies = null
    conversion_unidades_cubicas.yardas = valor / 27
    conversion_unidades_cubicas.onzas = valor * 958
    conversion_unidades_cubicas.litros = valor * 28.3168
    conversion_unidades_cubicas.galones = valor * 7481


    return conversion_unidades_cubicas
}


function Toyardas_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 1308
    conversion_unidades_cubicas.centimetros = valor * 764555
    conversion_unidades_cubicas.milimetros = valor * 764555
    conversion_unidades_cubicas.pulgadas = valor * 46656
    conversion_unidades_cubicas.pies = valor * 27
    conversion_unidades_cubicas.yardas = null
    conversion_unidades_cubicas.onzas = valor * 25853
    conversion_unidades_cubicas.litros = valor * 765
    conversion_unidades_cubicas.galones = valor * 202

    return conversion_unidades_cubicas
}

function Toonzas_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 33814
    conversion_unidades_cubicas.centimetros = valor * 29.574
    conversion_unidades_cubicas.milimetros = valor / 0.000033814
    conversion_unidades_cubicas.pulgadas = valor * 1.805
    conversion_unidades_cubicas.pies = valor / 958
    conversion_unidades_cubicas.yardas = valor / 25853
    conversion_unidades_cubicas.onzas = null
    conversion_unidades_cubicas.litros = valor / 33.814
    conversion_unidades_cubicas.galones = valor / 128

    return conversion_unidades_cubicas
}


function Tolitros_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 1000
    conversion_unidades_cubicas.centimetros = valor * 1000
    conversion_unidades_cubicas.milimetros = valor * 1000000
    conversion_unidades_cubicas.pulgadas = valor * 61.024
    conversion_unidades_cubicas.pies = valor / 28.317
    conversion_unidades_cubicas.yardas = valor / 765
    conversion_unidades_cubicas.onzas = valor * 33.814
    conversion_unidades_cubicas.litros = null
    conversion_unidades_cubicas.galones = valor / 3.785

    return conversion_unidades_cubicas
}

function Togalones_cubicos(valor) {
    conversion_unidades_cubicas.metros = valor / 264
    conversion_unidades_cubicas.centimetros = valor * 3785
    conversion_unidades_cubicas.milimetros = valor * 3785000000
    conversion_unidades_cubicas.pulgadas = valor * 231
    conversion_unidades_cubicas.pies = valor / 7.481
    conversion_unidades_cubicas.yardas = valor / 202
    conversion_unidades_cubicas.onzas = valor * 128
    conversion_unidades_cubicas.litros = valor * 3.785
    conversion_unidades_cubicas.galones = null

    return conversion_unidades_cubicas
}


//temperatura
/**
 * 
 * @param {object}  
 * conversion_unidades_temperatura = {
    farenhweit: 0,
    celcius: 0,
    kelvin: 0
 }
 * @returns 
 */
function Tofahrenheit(valor) {
    conversion_unidades_temperatura.farenhweit = null
    conversion_unidades_temperatura.celcius = (valor - 32) * (5 / 9)
    conversion_unidades_temperatura.kelvin = (valor - 32) * (5 / 9) + 273.15
    return conversion_unidades_temperatura
}

function Tocelcius(valor) {
    conversion_unidades_temperatura.farenhweit = (valor * 9 / 5) + 32
    conversion_unidades_temperatura.celcius = null
    conversion_unidades_temperatura.kelvin = (valor + 273.15)
    return conversion_unidades_temperatura
}

function Tokelvin(valor) {
    conversion_unidades_temperatura.farenhweit = (valor - 273.15) * 9 / 5 + 32
    conversion_unidades_temperatura.celcius = (valor - 273.15)
    conversion_unidades_temperatura.kelvin = null
    return conversion_unidades_temperatura
}

/**
 *
 * conversion_unidades_masa = {
    kilogramos: 0,
    gramos: 0,
    onzas: 0,
    libras: 0,
    toneladas:0
}
 */

function Tokilogramos_masa(valor) {
    conversion_unidades_masa.kilogramos = null
    conversion_unidades_masa.gramos = (valor * 1000)
    conversion_unidades_masa.onzas = (valor * 35.274)
    conversion_unidades_masa.libras = (valor * 2.205)
    conversion_unidades_masa.toneladas = (valor / 1000)

    return conversion_unidades_masa
}

function Togramos_masa(valor) {
    conversion_unidades_masa.kilogramos = (valor / 1000)
    conversion_unidades_masa.gramos = null
    conversion_unidades_masa.onzas = (valor / 28.35)
    conversion_unidades_masa.libras = (valor / 454)
    conversion_unidades_masa.toneladas = (valor / 1000000)

    return conversion_unidades_masa
}

function Toonzas_masa(valor) {
    conversion_unidades_masa.kilogramos = (valor / 35.274)
    conversion_unidades_masa.gramos = (valor * 28.35)
    conversion_unidades_masa.onzas = null
    conversion_unidades_masa.libras = (valor / 16)
    conversion_unidades_masa.toneladas = (valor / 35274)

    return conversion_unidades_masa
}

function Tolibras_masa(valor) {
    conversion_unidades_masa.kilogramos = (valor / 35.274)
    conversion_unidades_masa.gramos = (valor * 28.35)
    conversion_unidades_masa.onzas = null
    conversion_unidades_masa.libras = (valor / 16)
    conversion_unidades_masa.toneladas = (valor / 35274)

    return conversion_unidades_masa
}

function Totoneladas_masa(valor) {
    conversion_unidades_masa.kilogramos = (valor * 1000)
    conversion_unidades_masa.gramos = (valor * 1000000)
    conversion_unidades_masa.onzas = (valor * 35274)
    conversion_unidades_masa.libras = (valor * 2205)
    conversion_unidades_masa.toneladas = null

    return conversion_unidades_masa
}


/**
 * Velocidad
 *   conversion_unidades_velocidad = {
    metros_seg: 0,
    pulgada_seg: 0,
    pies_seg: 0,
    pies_min: 0,
    pies_hora: 0
}
 */

function Tometros_seg(valor) {
    conversion_unidades_velocidad.metros_seg = null
    conversion_unidades_velocidad.pulgada_seg = (valor *  39.37)
    conversion_unidades_velocidad.pies_seg = (valor * 3.281)
    conversion_unidades_velocidad.pies_min = (valor * 197)
    conversion_unidades_velocidad.pies_hora = (valor * 11811)

    return conversion_unidades_velocidad
}


function Topulgada_seg(valor) {
    conversion_unidades_velocidad.metros_seg = (valor /  39,37)
    conversion_unidades_velocidad.pulgada_seg = null
    conversion_unidades_velocidad.pies_seg = (valor / 12)
    conversion_unidades_velocidad.pies_min = (valor * 5)
    conversion_unidades_velocidad.pies_hora = (valor * 300)

    return conversion_unidades_velocidad
}

function Topies_seg(valor) {
    conversion_unidades_velocidad.metros_seg = (valor / 3.281)
    conversion_unidades_velocidad.pulgada_seg = (valor / 12)
    conversion_unidades_velocidad.pies_seg = null
    conversion_unidades_velocidad.pies_min = (valor / 720)
    conversion_unidades_velocidad.pies_hora = (valor / 43200)

    return conversion_unidades_velocidad
}

function Topies_min(valor) {
    conversion_unidades_velocidad.metros_seg = (valor / 197)
    conversion_unidades_velocidad.pulgada_seg = (valor / 5)
    conversion_unidades_velocidad.pies_seg = (valor * 60)
    conversion_unidades_velocidad.pies_min = null
    conversion_unidades_velocidad.pies_hora = (valor * 720)

    return conversion_unidades_velocidad
}

function Topies_hora(valor) {
    conversion_unidades_velocidad.metros_seg = (valor / 11811)
    conversion_unidades_velocidad.pulgada_seg = (valor * 300)
    conversion_unidades_velocidad.pies_seg = (valor / 3600)
    conversion_unidades_velocidad.pies_min = (valor / 60)
    conversion_unidades_velocidad.pies_hora = null

    return conversion_unidades_velocidad
}



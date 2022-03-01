let conversion = {
    metros: 0,
    centimetros: 0,
    milimetros: 0,
    pulgadas: 0,
    pies: 0,
    yardas: 0
}

let conversion_unidades_cuadradas = {
    metros_cuadrados: 0,
    centimetros_cuadrados: 0,
    milimetros_cuadrados: 0,
    pulgadas_cuadrados: 0,
    pies_cuadrados: 0,
    yardas_cuadrados: 0,
    onzas_cuadrados: 0,
    litros_cuadrados: 0,
    galones_cuadrados: 0
}


let conversion_unidades_cubicos = {
    metros_cubicos: 0,
    centimetros_cubicos: 0,
    milimetros_cubicos: 0,
    pulgadas_cubicos: 0,
    pies_cubicos: 0,
    yardas_cubicos: 0,
    onzas_cubicos: 0,
    litros_cubicos: 0,
    galones_cubicos: 0
}

let conversion_unidades_temperatura = {
    farenhweit: 0,
    celcius: 0,
    kelvin: 0
}


let conversion_unidades_velocidad = {
    metros_seg: 0,
    pulgada_seg: 0,
    pies_seg: 0,
    pies_min: 0,
    pies_hora: 0
}

let conversion_unidades_masa = {
    kilogramos_masa: 0,
    gramos_masa: 0,
    onzas_masa: 0,
    libras_masa: 0,
    toneladas_masa: 0
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
    conversion.centimetros = null
    conversion.milimetros = valor * 10
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
    conversion.pulgadas = null
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
    conversion_unidades_cuadradas.metros_cuadrados = null
    conversion_unidades_cuadradas.centimetros_cuadrados = valor * 10000
    conversion_unidades_cuadradas.milimetros_cuadrados = valor * 1000000
    conversion_unidades_cuadradas.pulgadas_cuadrados = valor * 1550
    conversion_unidades_cuadradas.pies_cuadrados = valor * 10.7639
    conversion_unidades_cuadradas.yardas_cuadrados = valor * 1.196
    return conversion_unidades_cuadradas
}

function Tocentimetros_cuadrados(valor) {
    //Centimetros
    conversion_unidades_cuadradas.metros_cuadrados = valor / 10000
    conversion_unidades_cuadradas.centimetros_cuadrados = null
    conversion_unidades_cuadradas.milimetros_cuadrados = valor / 0.010000
    conversion_unidades_cuadradas.pulgadas_cuadrados = valor /  6.452
    conversion_unidades_cuadradas.pies_cuadrados = valor * 0.0010764
    conversion_unidades_cuadradas.yardas_cuadrados = valor * 0.00011960
    return conversion_unidades_cuadradas
}

function Tomilimetros_cuadrados(valor) {
    conversion_unidades_cuadradas.metros_cuadrados = valor / 1000000
    conversion_unidades_cuadradas.centimetros_cuadrados = valor / 100
    conversion_unidades_cuadradas.milimetros_cuadrados = null
    conversion_unidades_cuadradas.pulgadas_cuadrados = valor * 0.0015500
    conversion_unidades_cuadradas.pies_cuadrados = valor * 0.000010764
    conversion_unidades_cuadradas.yardas_cuadrados = valor * 0.0000011960

    return conversion_unidades_cuadradas
}

function Topulgadas_cuadrados(valor) {
    conversion_unidades_cuadradas.metros_cuadrados = valor / 1550.0
    conversion_unidades_cuadradas.centimetros_cuadrados = valor / 0.15500
    conversion_unidades_cuadradas.milimetros_cuadrados = valor / 0.0015500
    conversion_unidades_cuadradas.pulgadas_cuadrados = null
    conversion_unidades_cuadradas.pies_cuadrados = valor * 0.0069444
    conversion_unidades_cuadradas.yardas_cuadrados = valor * 0.00077160

    return conversion_unidades_cuadradas
}

function Topies_cuadrados(valor) {
    conversion_unidades_cuadradas.metros_cuadrados = valor / 10.764
    conversion_unidades_cuadradas.centimetros_cuadrados = valor / 0.0010764
    conversion_unidades_cuadradas.milimetros_cuadrados = valor / 0.000010764
    conversion_unidades_cuadradas.pulgadas_cuadrados = valor * 144.00
    conversion_unidades_cuadradas.pies_cuadrados = null
    conversion_unidades_cuadradas.yardas_cuadrados = valor * 0.11111

    return conversion_unidades_cuadradas
}


function Toyardas_cuadradas(valor) {
    conversion_unidades_cuadradas.metros_cuadrados = valor * 1.196
    conversion_unidades_cuadradas.centimetros_cuadrados = valor / 0.00011960
    conversion_unidades_cuadradas.milimetros_cuadrados = valor * 836, 127
    conversion_unidades_cuadradas.pulgadas_cuadrados = valor * 1296.0
    conversion_unidades_cuadradas.pies_cuadrados = valor * 9.0000
    conversion_unidades_cuadradas.yardas_cuadrados = null

    return conversion_unidades_cuadradas

}

/**
 * 
 * @param {Object}  
 * conversion_unidades_cubicos = {
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
    conversion_unidades_cubicos.metros_cubicos = null
    conversion_unidades_cubicos.centimetros_cubicos = valor * 10000
    conversion_unidades_cubicos.milimetros_cubicos = valor * 1000000000
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 61024
    conversion_unidades_cubicos.pies_cubicos = valor * 35.315
    conversion_unidades_cubicos.yardas_cubicos = valor * 1.308
    conversion_unidades_cubicos.onzas_cubicos = valor * 33814
    conversion_unidades_cubicos.litros_cubicos = valor * 1000
    conversion_unidades_cubicos.galones_cubicos = valor * 264

    return conversion_unidades_cubicos
}

function Tocentimetros_cubicos(valor) {
    //Centimetros
    conversion_unidades_cubicos.metros_cubicos = valor / 1000000
    conversion_unidades_cubicos.centimetros_cubicos = null
    conversion_unidades_cubicos.milimetros_cubicos = valor * 1000
    conversion_unidades_cubicos.pulgadas_cubicos = valor / 16387
    conversion_unidades_cubicos.pies_cubicos = valor / 28317
    conversion_unidades_cubicos.yardas_cubicos = valor / 764555
    conversion_unidades_cubicos.onzas_cubicos = valor / 29574
    conversion_unidades_cubicos.litros_cubicos = valor / 1000
    conversion_unidades_cubicos.galones_cubicos = valor / 3785

    return conversion_unidades_cubicos
}

function Tomilimetros_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 1000000000
    conversion_unidades_cubicos.centimetros_cubicos = valor / 1000
    conversion_unidades_cubicos.milimetros_cubicos = null
    conversion_unidades_cubicos.pulgadas_cubicos = valor / 16387
    conversion_unidades_cubicos.pies_cubicos = valor / 28317
    conversion_unidades_cubicos.yardas_cubicos = valor / 764600000000
    conversion_unidades_cubicos.onzas_cubicos = valor / 29574
    conversion_unidades_cubicos.litros_cubicos = valor / 1000000
    conversion_unidades_cubicos.galones_cubicos = valor / 3785000000


    return conversion_unidades_cubicos
}

function Topulgadas_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 61024
    conversion_unidades_cubicos.centimetros_cubicos = valor * 16387
    conversion_unidades_cubicos.milimetros_cubicos = valor * 16387
    conversion_unidades_cubicos.pulgadas_cubicos = null
    conversion_unidades_cubicos.pies_cubicos = valor / 1728
    conversion_unidades_cubicos.yardas_cubicos = valor / 46656
    conversion_unidades_cubicos.onzas_cubicos = valor / 1805
    conversion_unidades_cubicos.litros_cubicos = valor / 61024
    conversion_unidades_cubicos.galones_cubicos = valor / 231

    return conversion_unidades_cubicos
}

function Topies_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 35315
    conversion_unidades_cubicos.centimetros_cubicos = valor * 28317
    conversion_unidades_cubicos.milimetros_cubicos = valor * 28317
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 1728
    conversion_unidades_cubicos.pies_cubicos = null
    conversion_unidades_cubicos.yardas_cubicos = valor / 27
    conversion_unidades_cubicos.onzas_cubicos = valor * 958
    conversion_unidades_cubicos.litros_cubicos = valor * 28.3168
    conversion_unidades_cubicos.galones_cubicos = valor * 7481


    return conversion_unidades_cubicos
}


function Toyardas_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 1308
    conversion_unidades_cubicos.centimetros_cubicos = valor * 764555
    conversion_unidades_cubicos.milimetros_cubicos = valor * 764555
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 46656
    conversion_unidades_cubicos.pies_cubicos = valor * 27
    conversion_unidades_cubicos.yardas_cubicos = null
    conversion_unidades_cubicos.onzas_cubicos = valor * 25853
    conversion_unidades_cubicos.litros_cubicos = valor * 765
    conversion_unidades_cubicos.galones_cubicos = valor * 202

    return conversion_unidades_cubicos
}

function Toonzas_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 33814
    conversion_unidades_cubicos.centimetros_cubicos = valor * 29.574
    conversion_unidades_cubicos.milimetros_cubicos = valor / 0.000033814
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 1.805
    conversion_unidades_cubicos.pies_cubicos = valor / 958
    conversion_unidades_cubicos.yardas_cubicos = valor / 25853
    conversion_unidades_cubicos.onzas_cubicos = null
    conversion_unidades_cubicos.litros_cubicos = valor / 33.814
    conversion_unidades_cubicos.galones_cubicos = valor / 128

    return conversion_unidades_cubicos
}


function Tolitros_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 1000
    conversion_unidades_cubicos.centimetros_cubicos = valor * 1000
    conversion_unidades_cubicos.milimetros_cubicos = valor * 1000000
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 61.024
    conversion_unidades_cubicos.pies_cubicos = valor / 28.317
    conversion_unidades_cubicos.yardas_cubicos = valor / 765
    conversion_unidades_cubicos.onzas_cubicos = valor * 33.814
    conversion_unidades_cubicos.litros_cubicos = null
    conversion_unidades_cubicos.galones_cubicos = valor / 3.785

    return conversion_unidades_cubicos
}

function Togalones_cubicos(valor) {
    conversion_unidades_cubicos.metros_cubicos = valor / 264
    conversion_unidades_cubicos.centimetros_cubicos = valor * 3785
    conversion_unidades_cubicos.milimetros_cubicos = valor * 3785000000
    conversion_unidades_cubicos.pulgadas_cubicos = valor * 231
    conversion_unidades_cubicos.pies_cubicos = valor / 7.481
    conversion_unidades_cubicos.yardas_cubicos = valor / 202
    conversion_unidades_cubicos.onzas_cubicos = valor * 128
    conversion_unidades_cubicos.litros_cubicos = valor * 3.785
    conversion_unidades_cubicos.galones_cubicos = null

    return conversion_unidades_cubicos
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
function Tofarenhweit(valor) {
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
    kilogramos_masa: 0,
    gramos_masa: 0,
    onzas_masa: 0,
    libras_masa: 0,
    toneladas_masa:0
}
 */

function Tokilogramos_masa(valor) {
    conversion_unidades_masa.kilogramos_masa = null
    conversion_unidades_masa.gramos_masa = (valor * 1000)
    conversion_unidades_masa.onzas_masa = (valor * 35.274)
    conversion_unidades_masa.libras_masa = (valor * 2.205)
    conversion_unidades_masa.toneladas_masa = (valor / 1000)

    return conversion_unidades_masa
}

function Togramos_masa(valor) {
    conversion_unidades_masa.kilogramos_masa = (valor / 1000)
    conversion_unidades_masa.gramos_masa = null
    conversion_unidades_masa.onzas_masa = (valor / 28.35)
    conversion_unidades_masa.libras_masa = (valor / 454)
    conversion_unidades_masa.toneladas_masa = (valor / 1000000)

    return conversion_unidades_masa
}

function Toonzas_masa(valor) {
    conversion_unidades_masa.kilogramos_masa = (valor / 35.274)
    conversion_unidades_masa.gramos_masa = (valor * 28.35)
    conversion_unidades_masa.onzas_masa = null
    conversion_unidades_masa.libras_masa = (valor / 16)
    conversion_unidades_masa.toneladas_masa = (valor / 35274)

    return conversion_unidades_masa
}

function Tolibras_masa(valor) {
    conversion_unidades_masa.kilogramos_masa = (valor / 35.274)
    conversion_unidades_masa.gramos_masa = (valor * 28.35)
    conversion_unidades_masa.onzas_masa = null
    conversion_unidades_masa.libras_masa = (valor / 16)
    conversion_unidades_masa.toneladas_masa = (valor / 35274)

    return conversion_unidades_masa
}

function Totoneladas_masa(valor) {
    conversion_unidades_masa.kilogramos_masa = (valor * 1000)
    conversion_unidades_masa.gramos_masa = (valor * 1000000)
    conversion_unidades_masa.onzas_masa = (valor * 35274)
    conversion_unidades_masa.libras_masa = (valor * 2205)
    conversion_unidades_masa.toneladas_masa = null

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
    conversion_unidades_velocidad.pulgada_seg = (valor * 39.37)
    conversion_unidades_velocidad.pies_seg = (valor * 3.281)
    conversion_unidades_velocidad.pies_min = (valor * 197)
    conversion_unidades_velocidad.pies_hora = (valor * 11811)

    return conversion_unidades_velocidad
}


function Topulgada_seg(valor) {
    conversion_unidades_velocidad.metros_seg = (valor / 39, 37)
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




/* se crea la funcion para cada tipo de tomate para este caso Extra*/
function cantidadExtra() {
    let cantidadExtra = parseInt(prompt("Ingrese el total de canastillas vendidas"))
    alert("la cantidad de canastillas Extras fueron " + cantidadExtra)
    return cantidadExtra
}
/* se crea la funcion para saber el costo  del tomate Extra*/
function costoExtra() {
    let costoExtra = parseInt(prompt("El costo de la canastilla es de $ "))
    alert("el costo de la canastilla es de $" + costoExtra)
    return costoExtra
}
/* con esta funcion capturo los datos anteriores del tomate extra*/

let cantidadExtras = cantidadExtra()
let costoExtras = costoExtra()

/* con esta funcion multiplico los datos ingresados del tomate y del costo*/

function multiplicarExtras(dato1, dato2) {
    let resultado = dato1 * dato2
    return resultado

}
let resultadoTomateExtra = multiplicarExtras(cantidadExtras, costoExtras)
alert("el costo total de las " + cantidadExtras + " canastillas es de $" + resultadoTomateExtra)




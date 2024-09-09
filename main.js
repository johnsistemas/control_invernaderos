/* Programa para invernaderos de tomate*/

/* Se crea un Array con los tipos de tomate disponibles */
const tiposTomate = ["Grueso", "Semi", "Parejo", "Richi", "Carrejuela"];

/* Función para seleccionar el tipo de tomate, cantidad y precio */
function venderTomate() {
    /* Mostrar tipos de tomate */
    let tipoTomate = prompt(
        "Selecciona el tipo de tomate: \n1. Grueso\n2.Semi\n3.Parejo\n4.Richi\n5.Carrejuela"
    );

    /* Convertir a número para usarlo en el array */
    tipoTomate = parseInt(tipoTomate) - 1;

    if (tipoTomate < 0 || tipoTomate >= tiposTomate.length) {
        alert("Seleccionaste una opción inválida.");
        return;
    }

    /*  con esta funcion Solicito la cantidad de canastillas */
    let cantidad = parseInt(prompt("¿Cuántas canastillas quieres vender?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La cantidad debe ser un número válido mayor que 0.");
        return;
    }

    /* Solicitar el precio por canastilla */
    let precio = parseFloat(prompt("¿Cuál es el precio de venta por canastilla?"));

    if (isNaN(precio) || precio <= 0) {
        alert("El precio debe ser un número válido mayor que 0.");
        return;
    }

    /* Calcular el total */
    const total = cantidad * precio;

    /* Mostrar resultado */
    alert(
        `Has vendido ${cantidad} canastilla(s) de tomate tipo "${tiposTomate[tipoTomate]}" a un precio de $${precio.toFixed(
            2
        )} cada una.\nEl total es: $${total.toFixed(2)}`
    );
}

/* Llamada a la función */
venderTomate();
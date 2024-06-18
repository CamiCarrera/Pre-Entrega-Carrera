
// Ingresar Peso en Kilos
let peso =parseFloat(prompt('ingresa tu peso en Kilogramos'));
let edad = parseInt(prompt("Ingresa tu edad en años:"));


function calcularRequerimientoCalorico(peso, edad) {
    let caloriasBase = peso * 23;

    if (edad < 18) {
        caloriasBase += 300;
    } else if (edad >= 18 && edad <= 45) {
        // No hay cambio
    } else if (edad >= 46 && edad <= 55) {
        caloriasBase -= 100;
    } else if (edad >= 56 && edad <= 65) {
        caloriasBase -= 200;
    } else if (edad >= 66 && edad <= 75) {
        caloriasBase -= 300;
    }

    return caloriasBase;
}


let nivelActividad = prompt("Ingresa tu nivel de actividad física Nula - Si tu vida es muy sedentaria y no haces ningun deporte. Leve - Si haces minimo 20 minutos de ejercicio al dia. Moderada - Si te ejercitas o caminas de 30 a 45 minutos al dia. Elevada - Si vas al gimnacio o haces algun deporte al menos 60 minutos todos los dias");

function calcularRequerimientoTotal(peso, edad, nivelActividad) {
    let caloriasBase = calcularRequerimientoCalorico(peso, edad);

    let ajusteActividad = 0;
    switch (nivelActividad.toLowerCase()) {
        case 'nula':
            ajusteActividad = 0;
            break;
        case 'leve':
            ajusteActividad = 100;
            break;
        case 'moderada':
            ajusteActividad = 200;
            break;
        case 'elevada':
            ajusteActividad = 300;
            break;
        default:
            alert("Nivel de actividad no válido. Por favor ingrese 'nula', 'leve', 'moderada' o 'elevada'.");
            return null;


    }

    let caloriasTotales = caloriasBase + ajusteActividad;
    return caloriasTotales;
}


// Calcular y mostrar el requerimiento calórico
 let caloriasTotales = calcularRequerimientoTotal(peso, edad, nivelActividad);

 if (caloriasTotales !== null) {
     alert("Tu requerimiento calórico total es: " + caloriasTotales + " kcal");
 }

// // Confirmar si desea volver a calcular
 function iniciarCalculo() {
    let continuar = true;

    while (continuar) {
        //Volver a solicitar datos
        let peso =parseFloat(prompt('ingresa tu peso en Kilogramos'));
        let edad = parseInt(prompt("Ingresa tu edad en años:"));
        let nivelActividad = prompt("Ingresa tu nivel de actividad física Nula - Si tu vida es muy sedentaria y no haces ningun deporte. Leve - Si haces minimo 20 minutos de ejercicio al dia. Moderada - Si te ejercitas o caminas de 30 a 45 minutos al dia. Elevada - Si vas al gimnacio o haces algun deporte al menos 60 minutos todos los dias");

        // Calcular y mostrar el requerimiento calórico
        let caloriasTotales = calcularRequerimientoTotal(peso, edad, nivelActividad);

        if (caloriasTotales !== null) {
            alert("Tu requerimiento calórico total es: " + caloriasTotales + " kcal");
        }

        // Preguntar si desea volver a calcular
        continuar = confirm("¿Deseas calcular de nuevo?");
    }
}

iniciarCalculo();

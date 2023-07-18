
let nombre = prompt("Ingrese su nombre");
let alturaEnCentimetros = parseInt(prompt("Ingrese su altura en centimetros"));
let alturaEnMetros = alturaEnCentimetros / 100;
let pesoEnKilos = parseInt(prompt("Ingrese su peso en Kilogramos"));
        
    function IMC(alturaEnMetros, pesoEnKilos) {
        return pesoEnKilos / (alturaEnMetros * alturaEnMetros);
    }
    
    let clasificacion;
    if (imc < 18.5) {
      clasificacion = 'estás muy delgado';
    } else if (imc < 25) {
      clasificacion = 'estás saludable';
    } else {
      clasificacion = 'tienes sobrepeso';
    }
    
    let respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
    
    alert(respuesta);

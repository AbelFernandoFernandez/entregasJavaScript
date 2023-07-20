function calculoIMC() {
  let nombre = prompt("Ingrese su nombre");
  let altCn = parseInt(prompt("Ingrese su altura en centimetros"));
  let altMetros = altCn / 100;
  let peso = parseInt(prompt("Ingrese su peso en Kilogramos"));
  let altCuad = altMetros ** 2;
  return imc = peso / altCuad
}

calculoIMC()
let clasificacion;
if (imc < 18.5) {
  clasificacion = 'estás muy delgado';
} else if (imc < 25) {
  clasificacion = 'estás saludable';
} else {
  clasificacion = 'tienes sobrepeso';
}
let respuesta =  `Hola, tu IMC es ${imc}  y tu  ${clasificacion}`;
alert (respuesta)


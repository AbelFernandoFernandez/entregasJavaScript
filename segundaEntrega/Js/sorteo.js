const aleatorio = (min, max)=>{
  return Math.floor(Math.random() * (max-min)) + min; 
}
  let fecha = new Date("aug 08 2023");
  console.log("Sorteo del dia: ")
  console.log(fecha)
  console.log("N° del Dia"+"!!!!!" + aleatorio(0, 36));

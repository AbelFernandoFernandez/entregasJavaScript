  let nombre;
  let edad;
  
  nombre = prompt ("Por favor introduce tu nombre:");
  
  if (nombre =="") { 
    alert ("No has introducido ningún nombre");
  }
    else { 
      alert ("Hola "+nombre + ". Bienvenido"); 
    }
  
  edad = parseInt(prompt ("Introduce tu edad"));
      
  if (edad > 3 && edad < 10) {
    alert ("Eres un niño.");
  }
    else if (edad>=10 && edad <18) {
      alert ("Eres un jovencito.");
    }
  
  else if (edad >=18 && edad < 90) {
    alert ("Eres mayor de edad.");
  }
  
  else if (edad >=90) {
    alert ("Eres de la tercera edad.");
  }
  
  else {
    alert ("No has introducido un valor válido de edad ( "+edad+")");
  }
  
  

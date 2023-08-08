const alumnos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
    },
    {
        "nombre": "Abel",
        "apellido": "Fernandez",
    },
    {
        "nombre": "Juan",
        "apellido": "Dori",
    },
    {
        "nombre": "Jose",
        "apellido": "Guardia",
    },
];

// Este metodo me permite hacer alumno por alumno
let nom = prompt("Por favor introduce tu nombre:");
const alu = alumnos.find(item => {
    return item.nombre === nom;
});
console.log(alu) + console.log("Presente");


// Este metodo me permite hacer todos los alumnos pero en orden
alumnos.find(function (alumnos) {
    let nom = prompt("Por favor introduce tu nombre:");
    if (alumnos.nombre === nom) {
        return alert(nom + " Presente")
    }
    else {
        return alert("El contacto no está en la lista");
    }
    nom = prompt("Por favor introduce tu nombre:");
});







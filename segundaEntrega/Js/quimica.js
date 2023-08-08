function ElementoQuimico(simbolo) {
    var simbolosQuimicos = {
      "Al": "Aluminio",
      "S": "Azufre",
      "Cl": "Cloro",
      "He": "Helio",
      "B": "Boro",
      "Li": "Litio"
    };
    return simbolosQuimicos[simbolo];
  }
  
  console.log(ElementoQuimico("Al"));
  console.log(ElementoQuimico("S"));
  console.log(ElementoQuimico("Cl"));
  console.log(ElementoQuimico("He"));
  console.log(ElementoQuimico("B"));
  console.log(ElementoQuimico("Li"));
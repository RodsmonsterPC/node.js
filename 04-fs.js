const fs = require("fs");

fs.writeFile("hola-koders.txt", "Hola koders :D", (error) => {
  if (error) {
    console.log("ocurrio un error: ", error);
    return;
  }
  console.log("se subio el archivo correctamente");
});

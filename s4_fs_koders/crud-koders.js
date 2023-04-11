/**
Practica de File System
A partir del archivo koders.json

Realizar las siguientes funciones:
1. Crear una funcion que permita leer el archivo e imprimir en consola los koders
2. Crear una funcion que permita agregar un koder y guardar el archivo con el cambio realizado
3. Crear una funciona que permita eliminar a un koder por su id y guardar el archivo con el cambio realizado
4. Crear una funcion que permita obtener los joders que sea mayores de 25 años
5. Crear una funcipn que permita editar aún koder por su id y guardar el archivo con el cambio relaizado

Extra:
6. Crear una función que permita recibir un id utilizando process.argv y devuelva el koder correspondiente si existe

Req:
 * Utilizar callbacks API del FS
 * 
 * JSOn.parse() -> Convierte una cadena o string a un objeto js
 * JSON.stringify() -> Convierte un objeto a string
 * 
 *  JSON.stringify({}, null, "  ")    
*/

const fs = require("fs");

// const getKoder = (fileKoder) => {
//   fs.readFile(fileKoder, (error, data) => {
//     if (error) {
//       console.log("Ocurrio un error", error);
//       return;
//     }
//     console.log(JSON.parse(data));
//   });
// };

// getKoder("./koders.json");

//create Koder

// function addKoder(newKoder) {
//   const data = fs.readFileSync("./koders.json", "utf8");
//   let dataJSON = JSON.parse(data);
//   dataJSON.koders.push(newKoder);

//   dataString = JSON.stringify(dataJSON, null, 2);

//   fs.writeFile("./koders.json", dataString, (err) => {
//     if (err) {
//       console.log("OOh! Hubo un error: ", err);
//       return;
//     }

//     console.log("Se ah agregado un nuevo koders!");
//   });
//   console.log(dataJSON);
// }

// let objKoder = {
//   id: 4,
//   name: "Rafael",
//   lastname: "Villaseñor",
//   age: "27",
//   favoriteFood: "Hamburguesa",
// };
// addKoder(objKoder);

//filtrar por id y eleiminar

// const deleteKoder = (koderId) => {
//   const data = fs.readFileSync("./koders.json", "utf8");
//   let dataJSON = JSON.parse(data);
//   let koders = dataJSON.koders;

//   dataJSON.koders = koders.filter((koder) => koder.id !== koderId);

//   fs.writeFile("./koders.json", JSON.stringify(dataJSON, null, 2), (err) => {
//     if (err) {
//       console.log("Error: ", err);
//       return;
//     }
//     console.log("Se eliminó el koder :(");
//   });
//   console.log(dataJSON);
// };

// deleteKoder(2);

//Koder Mayor de 25 años

// const koderMayor = () => {
//   const data = fs.readFileSync("./koders.json", "utf8");
//   let dataJSON = JSON.parse(data);
//   let koders = dataJSON.koders;

//   let kodersAge = koders.map((koder) => {
//     const koderAge = parseInt(koder.age);
//     koder.age = koderAge;
//     return koder;
//   });
//   const koderOrder = kodersAge.filter((koder) => koder.age > 25);

//   console.log(koderOrder);
// };
// koderMayor();

//Editar Koder por Id

// const koderEdit = (
//   koderId,
//   koderNewId,
//   koderNewName,
//   koderNewLast,
//   koderNewAge,
//   koderNewFood
// ) => {
//   const data = fs.readFileSync("./koders.json", "utf8");
//   let dataJSON = JSON.parse(data);
//   let koders = dataJSON.koders;

//   const KoderSearched = koders.find((koder) => koderId === koder.id);

//   KoderSearched.id = koderNewId;
//   KoderSearched.name = koderNewName;
//   KoderSearched.lastname = koderNewLast;
//   KoderSearched.age = koderNewAge;
//   KoderSearched.favoriteFood = koderNewFood;

//
//   dataStringify = JSON.stringify(dataJSON, null, 2);

//   fs.writeFile("./koders.json", dataStringify, (err) => {
//     if (err) {
//       console.log("Error: ", err);
//       return;
//     }
//     console.log("Se guaradron los cambios");
//   });
//   console.log(dataJSON);
// };

// koderEdit(2, 5, "Pedro", "Mendez", "30", "Migas");

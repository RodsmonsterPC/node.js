//Un callback es una funcion que se recibe como argumento de otra funcion

// const avisar = (error, data) => {
//   if (error) {
//     console.log("No pude llegar al supermercado", error);
//   } else console.log(data);
// };

// const irAlSuper = (callback) => {
//   console.log("Yendo al supermercado");
//   callback(null, "Llegue al supermercado");
// };

// irAlSuper(avisar);

//Firma: Es la forma en que una función recibe sus parametros

const errorMessage = (error, data) => {
  if (error) {
    //Mensaje de error
    console.log("Ah ocurrido un error");
  } else {
    //Continua
  }
};

//Crear el codigo para
//Avise cuando vaya al super
//Avise cuando escoja la despensa
//Avise cuando pague
//Avise cuando llegue a casa

const avisar = (error, data) => {
  if (error) {
    console.log("No pude llegar al supermercado", error);
  } else console.log(data);
};

const irAlSuper = (callback) => {
  console.log("Yendo al supermercado");
  callback(null, "Llegue al supermercado");
};

irAlSuper(avisar);

const despensa = (callback) => {
  console.log("BUscando despensa");
  callback(null, "Encontre la despensa");
};

despensa(avisar);

const pagar = (callback) => {
  console.log("Haciendo fila para pagar");
  callback(null, "Pague mi despensa");
};

pagar(avisar);

const regresarCasa = (callback) => {
  console.log("Regresando a mi casa");
  callback(null, "Llegue a mi casa");
};

regresarCasa(avisar);

//

setTimeout(() => {
  despensa(avisar);
}, 2000);

// ()=>{} Arrow function es una funcion anonima

//NPM -> node package manager
//procces.argv

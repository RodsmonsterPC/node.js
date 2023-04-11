// const myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = null;

//     // error = new Error("Ocurrio un error");
//     if (error) {
//       reject(error);
//     }
//     resolve("Todo cool!!");
//   }, 3000);
// });

// console.log(myFirstPromise);

// myFirstPromise
//   .then((result) => {
//     //Cuando fue exitoso
//     console.log(result);
//   })
//   .catch((error) => {
//     //Cuando ocurrio un errror
//     console.log(error);
//   });

// Metodos para manejar la promesa:
// .then(()=>{}) //Maneja la promesa cuando haya sido exitosa
//                - Recibe un callback
//                - Puede obtner lo que se pasa en la funcion resolve

// .catch(()=>{}) // Maneja la promesa cuando haya sido rechazada
//                 - Recibe un callback
//                 - Recibe lo que se pasa en la funcion reject

/**
 * Otra forma de ver las promesas es con wrapper
 *
 * -Envolviendo la promesa con una función -> Las promesas nos permiten ejecutar acciones asincronas,
 *
 */

const algoAsincrono = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = null;
      if (error) {
        reject(error);
      }
      resolve("Todo Cool");
    }, 3000);
  });
//Aqui vendria un objeto de tipo promesa
algoAsincrono()
  .then((result) => {
    console.log("Resultados: ", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

const person = {
  name: "Antonio",
  atSuperMarket: false,
  paidPantry: false,
  atHome: false,
};

const goToSuperMarket = (personToGoToSuperMarket) => {
  return new Promise((resolve, reject) => {
    console.log(
      `${personToGoToSuperMarket.name} esta yendo al supermercado // Encademamiento`
    );

    setTimeout(() => {
      personToGoToSuperMarket.atSuperMarket = true;
      if (!personToGoToSuperMarket.atSuperMarket) {
        reject(
          `${personToGoToSuperMarket.name} no pudo llegar al supermercado`
        );
      }
      resolve(personToGoToSuperMarket);
    }, 300);
  });
};

const pay = (personToPay) => {
  return new Promise((resolve, reject) => {
    console.log(`${personToPay.name} esta pagando.....`);

    setTimeout(() => {
      let error = null;
      personToPay.paidPantry = true;
      if (!personToPay.paidPantry) {
        error = new Error("Ocurrio un error al pagar");
        reject(error);
      }
      resolve(personToPay);
    }, 200);
  });
};

const goHome = (personToGoHome) => {
  return new Promise((resolve, reject) => {
    console.log(`${personToGoHome.name} esta regresando a casa`);

    setTimeout(() => {
      personToGoHome.atHome = true;
      if (!personToGoHome.atHome) {
        reject(`No pudo regresar a casa, choco D:`);
      }
      resolve(personToGoHome);
    });
  }, 1000);
};
/**
 * Encadenamiento
 */

// goToSuperMarket(person)
//   .then((personAtSuperMarket) => {
//     console.log(`${personAtSuperMarket.name} ya llego al supermercado`);
//     console.log(personAtSuperMarket);
//     return pay(personAtSuperMarket);
//   })
//   .then((personThatPaid) => {
//     console.log(`${personThatPaid.name} pudo pagar exitosamente`);
//     console.log(personThatPaid);
//     return goHome(personThatPaid);
//   })
//   .then((personAtHome) => {
//     console.log(`${personAtHome.name} llego a casa`);
//     console.log(personAtHome);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//Async / await

// console.log("Con async / await ..............");

// const main = async () => {
//   const personAtSuperMarket = await goToSuperMarket(person);
//   console.log(`${personAtSuperMarket.name} ya llego al super`);
//   console.log(personAtSuperMarket);

//   const personThatPaid = await pay(personAtSuperMarket);
//   console.log(`${personThatPaid.name} el pago se concreto correctamente`);
//   console.log(personThatPaid);

//   const personAtHome = await goHome(personThatPaid);
//   console.log(`${personAtHome.name} ya llego a casa`);
//   console.log(personAtHome);
// };

// main();

/**
 * Practicas
 * 
 * 1.  Realize el proceso de inscripcion a kodemia con promesas
       - Encadenamiento
       - Async / await
    2. Refactorizar del CRUD de koders con file system del Promise API,
    
    !!!! solo con async / await
    Realizar las siguientes acciones:
    1. Crear una funcion que permita leer el archivo e imprimir en consola el arreglo de Koders
    2. Crear una funcion que permita agregar un Koder y guardar el archivo con el cambio realizado
    3. Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
    4. Crear una funcion que permita editar a un koder por su id y guardar el archivo con el cambio realizado
    5. Crear una fucnion que permita obtener a los koders que sean mayores de 25 años
    Extra:
    6. Crear una funcion que permita recibir un id utilizando el process.argv y devuelva el koder correspondiente si existe.
    Req callbacks file system
    JSON.parse() -> convierte de cadena a un objeto js
    JSON.stringify() convierte de objeto a string
    JSON.stringify({},null,"  ")
    API y REST / RESTFUL
 * 
 */

const koder = {
  name: "Iyari",
  interviewed: false,
  proposalSent: false,
  isEnrolled: false,
  introductoryCourse: false,
};

const interviewKoder = (koderToInterview) => {
  return new Promise((resolve, reject) => {
    console.log(`${koderToInterview.name} esta siendo entrevistado`);

    setTimeout(() => {
      koderToInterview.interviewed = true;
      if (!koderToInterview.interviewed) {
        reject(`${koderToInterview.name} no pudo ser entrevistado`);
      }
      resolve(koderToInterview);
    }, 200);
  });
};

const koderPorposal = (koderMakeProposal) => {
  return new Promise((resolve, reject) => {
    console.log(`${koderMakeProposal.name} esta haciendo su propuesta`);

    setTimeout(() => {
      koderMakeProposal.proposalSent = true;

      if (!koderMakeProposal.proposalSent) {
        reject(`${koderMakeProposal.name} no pudo hacer una propuesta`);
      }
      resolve(koderMakeProposal);
    }, 300);
  });
};

const koderEnrolled = (koderToEnrolled) => {
  return new Promise((resolve, reject) => {
    console.log(`${koderToEnrolled.name} esta siendo inscrito`);

    setTimeout(() => {
      koderToEnrolled.isEnrolled = true;

      if (!koderToEnrolled) {
        reject(`${koderToEnrolled.name} no pudo inscribirse`);
      }
      resolve(koderToEnrolled);
    }, 400);
  });
};

const koderIntroductoryCourse = (koderCourse) => {
  return new Promise((resolve, reject) => {
    console.log(`${koderCourse.name} esta teniendo su curso de introducción`);

    setTimeout(() => {
      koderCourse.introductoryCourse = true;

      if (!koderCourse) {
        reject(`${koderCourse.name} no pudo tomar el curso`);
      }
      resolve(koderCourse);
    }, 400);
  });
};

//Encadenamiento

// interviewKoder(koder)
//   .then((koderAtInterview) => {
//     console.log(`${koderAtInterview.name} ah sido entrevistado`);
//     console.log(koderAtInterview);
//     return koderPorposal(koderAtInterview);
//   })
//   .then((koderAtProposal) => {
//     console.log(`${koderAtProposal.name} ya tiene propuesta`);
//     console.log(koderAtProposal);
//     return koderEnrolled(koderAtProposal);
//   })
//   .then((koderAtEnrolled) => {
//     console.log(`${koderAtEnrolled.name} esta inscrito`);
//     console.log(koderAtEnrolled);
//     return koderIntroductoryCourse(koderAtEnrolled);
//   })
//   .then((koderAtCourse) => {
//     console.log(`${koderAtCourse.name} se esta inscribiendo`);
//     console.log(koderAtCourse);
//     return koderIntroductoryCourse(koderAtCourse);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// console.log("Async Koder ..............................");

// Async / Await

// const koderMain = async () => {
//   const koderAtInterview = await interviewKoder(koder);
//   console.log(`${koderAtInterview.name} fue entrevistado`);
//   console.log(koderAtInterview);

//   const koderAtProposal = await koderEnrolled(koderAtInterview);
//   console.log(`${koderAtProposal.name} ya tiene propuesta`);
//   console.log(koderAtProposal);

//   const koderAtEnrolled = await koderPorposal(koderAtProposal);
//   console.log(`${koderAtEnrolled.name} ya fue inscrito`);
//   console.log(koderAtEnrolled);

//   const koderAtCourse = await koderIntroductoryCourse(koderAtEnrolled);
//   console.log(`${koderAtCourse.name} ya tuvo su curso de introducción`);
//   console.log(koderAtCourse);
// };

// koderMain();

// File system
const fs = require("fs");

const getKoders = async (filekoder) => {
  const contents = await fs.promises.readFile(filekoder, { encoding: "utf8" });

  console.log(contents);
};

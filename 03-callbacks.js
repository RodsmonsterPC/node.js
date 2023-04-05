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

// const errorMessage = (error, data) => {
//   if (error) {
//     //Mensaje de error
//     console.log("Ah ocurrido un error");
//   } else {
//     //Continua
//   }
// };

//Crear el codigo para
//Avise cuando vaya al super
//Avise cuando escoja la despensa
//Avise cuando pague
//Avise cuando llegue a casa

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

// const despensa = (callback) => {
//   console.log("BUscando despensa");
//   callback(null, "Encontre la despensa");
// };

// despensa(avisar);

// const pagar = (callback) => {
//   console.log("Haciendo fila para pagar");
//   callback(null, "Pague mi despensa");
// };

// pagar(avisar);

// const regresarCasa = (callback) => {
//   console.log("Regresando a mi casa");
//   callback(null, "Llegue a mi casa");
// };

// regresarCasa(avisar);

// //

// setTimeout(() => {
//   despensa(avisar);
// }, 2000);

// ()=>{} Arrow function es una funcion anonima

//NPM -> node package manager
//procces.argv
const fs = require("fs");

fs.writeFile("Pre-registro.txt", "Iyari-ficha de preregistro", (error) => {
  if (error) {
    console.log("ocurrio un error: ", error);
    return;
  }
});

fs.mkdir("../back-end-2023/Data-Preregistro", { recursive: true }, (error) => {
  if (error) {
    console.log("Ocurrio un error", error);
    return;
  }
});

const koder = {
  name: "Iyari",
  interviewed: false,
  proposalSent: false,
  isEnrolled: false,
  introductoryCourse: false,
};

const llenarFormulario = (koderInterview, callback) => {
  console.log(`Entrevistando a ${koderInterview.name}`);

  setTimeout(() => {
    let error = null;
    koderInterview.interviewed = true;
    //Con ternario
    // error = !koderInterview.interviewed
    //   ? `Error en la entrevista con ${koderInterview.name}`
    //   : null;
    //Con operador and
    error =
      !koderInterview.interviewed &&
      `Error en la entrevisra con ${koderInterview.name}`;
    callback(error, koderInterview);
  }, 3000);
};
const mandarPropuesta = (koderPropose, callback) => {
  console.log(
    `Revisando entrevista... Trbajando en una propuesta a ${koderPropose.name}`
  );

  setTimeout(() => {
    let error = null;
    koderPropose.proposalSent = true;
    //Con if
    if (!koderPropose.proposalSent)
      error = `No se pudo generar la propuesta para ${koderPropose.name}`;

    callback(error, koderPropose);
  }, 3000);
};

const hacerContrato = (koderContrato, callback) => {
  console.log(
    `Revisando propuesta.... Trabajando en el contrato con ${koderContrato.name}`
  );
  setTimeout(() => {
    let error = null;
    koderContrato.isEnrolled = true;
    error =
      !koderContrato.isEnrolled &&
      `Error con el contrato de ${koderContrato.name}`;
    callback(error, koderContrato);
  }, 3000);
};

const cursoIntroductorio = (koderCourse, callback) => {
  console.log(
    `Revisando contrato... Impartiendo curso de introducción a ${koderCourse.name}`
  );

  setTimeout(() => {
    let error = null;
    koderCourse.introductoryCourse = true;

    error = !koderCourse.introductoryCourse
      ? `Error en el curso introductorio de ${koderCourse.name}`
      : null;

    callback(error, koderCourse);
  }, 3000);
};

llenarFormulario(koder, (errorInterview, koderInterviewed) => {
  if (errorInterview) {
    console.log("Error en la entrevista", errorInterview);
    return;
  } else {
    console.log(`${koderInterviewed.name} ah sido entrevistado`);
    console.log(koderInterviewed);
    mandarPropuesta(koderInterviewed, (errorPropose, koderProposal) => {
      if (errorPropose) {
        console.log("Error en la propuesta", errorPropose);
        return;
      } else {
        console.log(`${koderProposal.name} ya tiene propuesta`);
        console.log(koderProposal);
        hacerContrato(koderProposal, (errorContract, koderContract) => {
          if (errorContract) {
            console.log("Error en el contrato", errorContract);

            return;
          } else {
            console.log(`${koderContract.name} ya tiene contrato`);
            console.log(koderContract);
            cursoIntroductorio(koderContract, (errorCourse, koderCourse) => {
              if (errorCourse) {
                console.log("Ocurrio un error en el curso", errorCourse);
                return;
              } else {
                console.log(
                  `${koderCourse.name} ya tuvo su curso introductorio`
                );
                console.log(koderCourse);
                console.log(`Registrando a ${koderCourse.name}`);

                fs.writeFile(
                  "Datos-Koder.txt",
                  `${koderCourse.name}`,
                  (error) => {
                    if (error) {
                      console.log("ocurrio un error: ", error);
                      return;
                    }
                    console.log("se subio el archivo correctamente");

                    console.log(`Revisando existencia del archivo`);
                    fs.readFile("./Datos-Koder.txt", (error, data) => {
                      if (error) {
                        console.log("ocurrio un error:", error);
                        return;
                      }
                      console.log(`El archivo existe es ${data}`);
                      console.log(`Agregando fecha de registro`);
                      fs.appendFile(
                        "./Datos-Koder.txt",
                        " 05/04/2023",
                        (error) => {
                          if (error) {
                            console.log("Ocurrio un error", error);
                            return;
                          }
                          console.log("La fecha fue agregada");
                          console.log("Borrando fecha de preregistro");
                          fs.unlink("./Pre-registro.txt", (error) => {
                            if (error) {
                              console.log("Ocurrio un error", error);
                              return;
                            }
                            console.log("Se borro la ficha de preregistro");
                            fs.copyFile(
                              "./Datos-Koder.txt",
                              "./Koder-Registro.txt",
                              (error) => {
                                if (error) {
                                  console.log("Ocurrio un error", error);
                                  return;
                                }
                                console.log(
                                  "Se agrego los datos al archivo de Koder-Registro"
                                );
                                fs.mkdir(
                                  "../back-end-2023/Koder-Data",
                                  { recursive: true },
                                  (error) => {
                                    if (error) {
                                      console.log("ocurrio un error", error);
                                      return;
                                    }
                                    console.log("se creo el directorio");
                                    console.log(
                                      "Revisando la información del directorio"
                                    );
                                    fs.readdir(
                                      "./Koder-Data",
                                      (error, data) => {
                                        if (error) {
                                          console.log(
                                            "Ocurrio un error",
                                            error
                                          );
                                          return;
                                        }
                                        console.log(
                                          `El directroio existe ${data}`
                                        );
                                        console.log(
                                          "Borrando carpeta de preregsitro"
                                        );
                                        fs.rmdir(
                                          "./Data-Preregistro",
                                          (error) => {
                                            if (error) {
                                              console.log(
                                                "Ocurrio un error",
                                                error
                                              );
                                              return;
                                            }
                                            console.log(
                                              "Se borro la carpeta de prerregsitro"
                                            );
                                          }
                                        );
                                      }
                                    );
                                  }
                                );
                              }
                            );
                          });
                        }
                      );
                    });
                  }
                );
              }
            });
          }
        });
      }
    });
  }
});

//git hub https://github.com/alfredopizana/24js

//crea una funcion que reciba un nombre como parametro y devuelva un saludo con dicho nombre

const nombre = (nameGet) => console.log(`Hola ${nameGet} y buenas noches`);

//output -> Hola {nombre} buenas noches

nombre("Rodolfo");

//crear una funcion de devulea un nombre aleatorio de un arreglo

const nombres = ["Luis", "Miguel", "Rodolfo", "Isra", "Alfred", "Laura"];

const aleatorio = nombres[Math.floor(Math.random() * nombres.length)];

console.log(`Un nombre aleatorio es: ${aleatorio}`);

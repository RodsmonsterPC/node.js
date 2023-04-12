// importamos el modulo de http de nodejs

const http = require("http");

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log(url);

  const method = request.method;
  console.log(method);

  if (url === "/koders") {
    if (method === "GET") {
      response.write("Aqui estaran todos los koders");
    }
    if (method === "POST") {
      response.write("Aqui puedes crear koders");
    }
  } else {
    response.write("No conozco la solicitud");
  }

  const responseData = {
    message: "Hello, GFG Learner",
    articleData: {
      articleName: "How to send JSON response from NodeJS",
      category: "NodeJS",
      status: "published",
    },
    endingMessage: "Visit Geeksforgeeks.org for more",
  };

  const jsonContent = JSON.stringify(responseData);
  response.end(jsonContent);
});

//Puertos:
//80 -> http
//443 -> https
// 22-> ssh
//8080 -> Puerto de desarrollo

server.listen(8080, () => {
  console.log("server listening on port 8080");
});

//ctrl + c

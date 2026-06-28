//console.log("Hello World! Nashik is my city");
//here the imported statement is used to import the express module, which is a popular web framework for Node.js. It allows you to create web applications and APIs easily.
const express = require("express");
const morgan = require("morgan");  


//here the server variable is created by calling the express() function. This initializes an instance of the Express application, which can be used to define routes, middleware, and other server-related functionality.

const server = express();

// here all serverconfigurations are done using the server.use() method. This method is used to add middleware functions to the Express application. Middleware functions are functions that have access to the request and response objects and can modify them or perform additional tasks before passing control to the next middleware function in the stack.
server.use(morgan("dev"));
server.use(express.json());

//here server routes are defined using the server.get() method. This method is used to define a route that responds to HTTP GET requests. In this case, the route is defined for the root URL ("/"). When a GET request is made to the root URL, the callback function is executed, which sends a JSON response with a message "Hello from server!".
server.get("/", (req, res) => {
  res.send("Hello World!" );
});

server.get("/api/student", (request, response) => {
  response.json({"message": "Hello World I am from JSON" });
});

//GET /PUT /DELETE /PATCH / These are crud operations which we can perform on server using HTTP methods.
// example of post request
server.post("/api/student", (request, response) => {
  const{name,age,city}=request.body;
  response.json({ message: `Hello ${name} I am from JSON` });
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//Home: http://localhost:3000 → Shows "Hello World!"
//Student API: http://localhost:3000/api/student → Shows JSON response



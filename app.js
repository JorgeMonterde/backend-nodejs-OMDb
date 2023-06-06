const express = require("express");
const app = express();
const port = 3000;

// Route modules:
const routes = require("./routes/filmRoutes");

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Template engine:
app.set("view engine", "pug")
app.set("views", "./views");

// Public folder:
app.use(express.static("public"));

// Routes:
app.use("/", routes.filmRouter)

//Listener:
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})


const express = require("express");
const app = express();


app.use(express.json()); //to check to see if library has been set right
app.use(express.urlencoded({ extended: true}))  

app.use(express.static("public"));



const chatRouter = require("./routes/chat.js");
app.use(chatRouter.router);

const gameRouter = require("./routes/game.js");
app.use(gameRouter.router);

const newsletterRouter = require("./routes/newsletter.js");
app.use(newsletterRouter.router);

const usersRouter = require("./routes/users.js");
app.use(usersRouter.router);



const fs = require("fs");



const navbar = fs.readFileSync(__dirname + "/public/navbar/nav.html", "utf-8");

const frontpage = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const chat = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const game = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const newsletter = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");
const users = fs.readFileSync(__dirname + "/public/frontpage/frontpage.html", "utf-8");



app.get("/", (req, res) => {
    res.send(navbar + frontpage);
});

app.get("/chat", (req, res) => {
    res.send(navbar + chat);
});

app.get("/game", (req, res) => {
    res.send(navbar + game);
});

app.get("/newsletter", (req, res) => {
    res.send(navbar + newsletter);
});

app.get("/users", (req, res) => {
    res.send(navbar + users);
});


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    // you are defining a variable and using it before finsishing the declaration
    console.log("Server is running", server.address().port);
});
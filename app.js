const express = require("express");
const app = express();
require ("dotenv").config();
const PORT = process.env.PORT;
const editRouter = require('./enrutadores/edit-router');
const viewRouter = require('./enrutadores/view-router');
const {tareas}=require('./datos')
const loginjwt = require('./enrutadores/loginjwt');

app.use(express.json());

app.get("/tareas-existentes", (req, res) => {
    res.status(404).send("Not found");
});

app.get('/', (req, res) => {
    res.json(tareas);
    console.log('estan viendo todas las tareas')
});

app.use('/editar', editRouter, () => {
    console.log("editando la lista de tareas");
});

app.use('/ver', viewRouter, () => {
    console.log("están viendo la lista de tareas");
});

app.use("/auth", loginjwt,()=> {
    console.log("están viendo la lista de tareas");})
    
    app.listen(PORT, () => { 
        console.log("corriendo servidor");
    });
    
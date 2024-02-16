const express = require("express");
const app = express();
const PORT = 3000;
const editRouter = require('./edit-router');
const viewRouter = require('./view-router');
const {tareas}=require('./datos')

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

app.listen(PORT, () => {
    console.log("servidor en funcionamiento");
});

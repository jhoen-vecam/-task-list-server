const express = require('express');
const app = express();
const port = 3000;
const router = require('./router-edicion-y-lectura')

const tareas = [
    {
        id: "123456",
        isCompleted: false,
        description: "Walk the dog",
    },
    {
        id: "389012",
        isCompleted: true,
        description: "Do the laundry",
    },
    {
        id: "284512",
        isCompleted: true,
        description: "bathe the cat",
    },
    {
        id: "754012",
        isCompleted: false,
        description: "cook",
    },
   
];


app.get('/tareas', (req, res) => {
    res.json(tareas);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

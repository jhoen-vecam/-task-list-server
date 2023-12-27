const express = require('express');
const app = express();
const port = 3000;

const tasks = [
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


app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

const { Router } = require("express");
const router = Router();
const { tareas } = require("../datos");

// Ruta para manejar la solicitud GET a "/tareas-completas"
router.get('/tareas-completas', (req, res) => {
    // Filtrar las tareas completadas
    const tareasCompletadas = tareas.filter(tarea => tarea.completed === true);
    
    // Verificar si hay tareas completadas
    if (tareasCompletadas.length > 0) {
        // Si hay tareas completadas, enviarlas como respuesta
        res.status(200).json({ message: 'Tareas completadas', tareas: tareasCompletadas });
    } else {
        // Si no hay tareas completadas, enviar un mensaje de error
        res.status(404).json({ message: 'No hay tareas completadas' });
    }
});


// Ruta para manejar la solicitud GET a "/tareas-incompletas"
router.get('/tareas-incompletas', (req, res) => {
    const tareasIncompletas= tareas.filter(tarea=>tarea.completed === false);
    if(tareasIncompletas.length > 0)
    res.status(200).json({message:"tareas incompletas" , tarea:tareasIncompletas})
    // Envía una respuesta JSON con el array de tareas
    res.status(404).json({message:"no hay tareas incompletas"});
     // Suponiendo que `tareas` está definido correctamente
});

// Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación
module.exports = router 

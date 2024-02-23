
const express = require('express');
const router = express.Router();
const { tareas } = require("../datos");
const app = express();
app.use(express.json());

// Crear una nueva tarea
router.post("/crear-tarea", (req, res, next) => {
    // console.log(req.body);
    // Verificar si el cuerpo de la solicitud está vacío
    if (Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'El cuerpo de la solicitud POST está vacío.' });
    }
  
    // Extraer la descripción y el estado completado de la solicitud
    const { description, completed } = req.body;

    // Verificar si la descripción está presente
    if (!description) {
        return res.status(400).json({ error: 'Falta el atributo "description" para crear la tarea.' });
    }
    
    // Crear una nueva tarea
    const nuevaTarea = {
        id: Date.now(), // Generar un ID único utilizando la fecha actual
        completed: completed || false, // Si completed no está presente, establecerlo como false por defecto
        description,
    };
    
    // Agregar la nueva tarea al arreglo de tareas
    tareas.push(nuevaTarea);
    
    // Enviar una respuesta de éxito
    res.status(201).json({ message: 'Tarea creada exitosamente', tarea: nuevaTarea });
});

// Editar una tarea
router.put('/:id', (req, res) => {
    const tareaId = req.params.id;
    const { description, completed } = req.body;

    // Encontrar la tarea con el ID correspondiente
    const tareaActualizada = tareas.find(tarea => tarea.id === tareaId);

    // Verificar si se encontró la tarea
    if (tareaActualizada) {
        // Verificar si la descripción está presente en el cuerpo de la solicitud
        if (!description) {
            return res.status(400).json({ error: 'Falta el atributo "description" para editar la tarea.' });
        }

        // Actualizar la tarea con los nuevos valores de descripción y completado
        tareaActualizada.description = description;
        tareaActualizada.completed = completed || false;

        return res.status(200).json({ message: 'Tarea actualizada', tarea: tareaActualizada });
    }

    // Si no se encontró la tarea, devolver un mensaje de error
    res.status(404).json({ message: 'Tarea no encontrada' });
});


// Eliminar una tarea
router.delete('/:id', (req, res) => {
    const tareaId = req.params.id;
    const tareaIndex = tareas.findIndex(tarea => tarea.id === tarea.id);
    
    if (tareaIndex === -1) {
        return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    // Almacenar la tarea eliminada antes de eliminarla
    const tareaEliminada = tareas[tareaIndex];

    // Eliminar la tarea del arreglo de tareas
    tareas.splice(tareaIndex, 1);

    // Devolver un mensaje indicando que la tarea fue eliminada con éxito
    res.status(200).json({ message: `Tarea "${tareaEliminada.description}" eliminada con éxito!!` });
});

// Manejador de errores
router.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor' });
});

module.exports = router;


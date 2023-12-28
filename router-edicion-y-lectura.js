const {Router} = require("express")
const router = Router();

router.get('/tareas-completas', (req, res) => {
    res.send("Listas de tareas Completadas")
})

router.get('/tareas-incompletas', (req, res) => {
    res.send("Listas de tareas Incompletas")
})
router.post('/crear-tarea', (req, res) => {
    res.send("Tarea añadida")
})

router.delete('/eliminar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("La tarea eliminada es : " + id)
})

router.put('/actualizar-tarea/:idTarea', (req, res) => {
    const id = req.params.idTarea
    res.send("La tarea actualizada es : " + id)
})


module.exports = router;
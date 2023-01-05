import { Router } from "express";
import { getAllcomentarios, getcomentario, createcomentario, deletecomentario, updatecomentario, getcomentariomaterial } from "../controllers/comentarioscursos.controller.js"

const router = Router()

router.get('/comentarios', getAllcomentarios)

router.get('/comentarios/:id', getcomentario)

router.post('/comentarios', createcomentario)

router.delete('/comentarios/:id', deletecomentario)

router.patch('/comentarios/:id', updatecomentario)

router.post('/comentariosmaterial', getcomentariomaterial)

export default router
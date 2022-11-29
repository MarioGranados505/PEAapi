import { Router } from "express";
import { getusuarioscursos, getUsuarioCursos, createUsuariocurso, deleteUsuariocurso, getunusuariocurso } from '../controllers/usuariosencursos.controller.js'

const router = Router()

router.get('/usuarioscursos', getusuarioscursos)

router.post('/usuariocurso/', getunusuariocurso)

router.get('/usuarioscursos/:id', getUsuarioCursos)

router.post('/usuarioscursos', createUsuariocurso)

router.delete('/usuarioscursos/:id', deleteUsuariocurso)


export default router
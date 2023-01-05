import { Router } from "express";
import { getusuarioscursos, getUsuarioCursos, createUsuariocurso, deleteUsuariocurso, getunusuariocurso, getUsuarioCursosCreados, deleteAllUsuariocurso } from '../controllers/usuariosencursos.controller.js'

const router = Router()

router.get('/usuarioscursos', getusuarioscursos)

router.post('/usuariocurso/', getunusuariocurso)

router.get('/usuarioscursos/:id', getUsuarioCursos)

router.get('/usuariocursos/:id', getUsuarioCursosCreados)

router.post('/usuarioscursos', createUsuariocurso)

router.delete('/usuarioscursos/:id', deleteUsuariocurso)

router.delete('/usuarioscursosAll/:id', deleteAllUsuariocurso)


export default router
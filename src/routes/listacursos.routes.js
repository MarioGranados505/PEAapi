import { Router } from "express";
import { getListaCursosU, getListaCursoNA, getListaCursos, getListaCurso, createListaCurso, deleteListaCurso, updateListaCurso }  from '../controllers/listacursos.controller.js'

const router = Router()

router.get('/listacursos', getListaCursos)

router.get('/listacursos/:id', getListaCurso)

router.post('/listacursos', createListaCurso)

router.patch('/listacursos/:id', updateListaCurso)

router.delete('/listacursos/:id', deleteListaCurso)

router.get('/listacursosNA', getListaCursoNA)

router.get('/listacursosU/:id', getListaCursosU)

export default router


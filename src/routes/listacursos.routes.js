import { Router } from "express";
import { getListaCursos, getListaCurso, createListaCurso, deleteListaCurso, updateListaCurso }  from '../controllers/listacursos.controller.js'

const router = Router()

router.get('/listacursos', getListaCursos)

router.get('/listacursos/:id', getListaCurso)

router.post('/listacursos', createListaCurso)

router.patch('/listacursos/:id', deleteListaCurso)

router.delete('/listacursos/:id', updateListaCurso)

export default router


import { Router } from "express";
import { getMaterialcursos, getMaterialcurso, createMaterialcurso, updateMaterialcurso, deleteMaterialcurso, deleteMaterialcursoAll, deletematerialcursoOne } from '../controllers/materialcursos.controller.js'

const router = Router()

router.get('/materialcursos', getMaterialcursos)

router.get('/materialcursos/:id', getMaterialcurso)

router.post('/materialcursos', createMaterialcurso)

router.patch('/materialcursos/:id', updateMaterialcurso)

router.delete('/materialcursos/:id', deleteMaterialcurso)

router.delete('/materialcursosAll/:id', deleteMaterialcursoAll)

router.post('/materialcursosOne', deletematerialcursoOne)

export default router
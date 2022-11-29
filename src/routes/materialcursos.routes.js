import { Router } from "express";
import { getMaterialcursos, getMaterialcurso, createMaterialcurso, updateMaterialcurso, deleteMaterialcurso } from '../controllers/materialcursos.controller.js'

const router = Router()

router.get('/materialcursos', getMaterialcursos)

router.get('/materialcursos/:id', getMaterialcurso)

router.post('/materialcursos', createMaterialcurso)

router.patch('/materialcursos/:id', updateMaterialcurso)

router.delete('/materialcursos/:id', deleteMaterialcurso)

export default router
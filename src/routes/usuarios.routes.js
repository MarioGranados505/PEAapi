import { Router } from "express";
import {getUsuarios, getUsuarioLogin, createUsuario, updateUsuario, deleteUsuario, getUsuario} from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuarios', getUsuarios)

router.get('/usuarios/:id', getUsuario)

router.post('/usuariosLogin', getUsuarioLogin)

router.post('/usuarios', createUsuario)

router.patch('/usuarios/:id', updateUsuario)

router.delete('/usuarios/:id', deleteUsuario)

export default router
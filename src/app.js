import express from 'express'
import cors from 'cors'
import {pool} from './db.js'
import bodyParser from 'body-parser'
import multer from 'multer'

import usuarios from  './routes/usuarios.routes.js'
import listacursos from './routes/listacursos.routes.js'
import materialcursos from './routes/materialcursos.routes.js'
import usuariosencursos from './routes/usuariosencursos.routes.js'
import upload from './routes/upload.routes.js'
import comentarios from './routes/comentarioscursos.routes.js'

const app = express()

//middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api', usuarios)
app.use('/api', listacursos)
app.use('/api', materialcursos)
app.use('/api', usuariosencursos)
app.use('/api', comentarios)


//este folder sera usado para almacenar archivos publicos
app.use('/upload', upload)
app.use(express.static('/upload', upload))


export default app;
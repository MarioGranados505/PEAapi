import express from 'express'
import {pool} from './db.js'
import usuarios from  './routes/usuarios.routes.js'
import listacursos from './routes/listacursos.routes.js'
import materialcursos from './routes/materialcursos.routes.js'
import usuariosencursos from './routes/usuariosencursos.routes.js'

const app = express()

app.use(express.json())

app.use('/api', usuarios)
app.use('/api', listacursos)
app.use('/api', materialcursos)
app.use('/api', usuariosencursos)

export default app;
import { json } from "express"
import { pool } from "../db.js"

export const getAllcomentarios = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM comentarioscursos')
    res.json(rows)
}

export const getcomentario = async (req, res) => {
    const [rows] = await pool.query('Select * FROM comentarioscursos WHERE id = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.json(rows[0])
}

export const createcomentario = async (req, res) => {
    const {idcurso, idmaterial, idusuario, comentario} = req.body
    const [rows] = await pool.query('INSERT INTO comentarioscursos (idcurso, idmaterial, idusuario, comentario) VALUES (?, ?, ?, ?)',[idcurso, idmaterial, idusuario, comentario])
    res.send({ rows })
}

export const deletecomentario = async () => {

}

export const updatecomentario = async () => {
    
}

export const getcomentariomaterial = async(req, res) => {
    const {idcurso, idmaterial} = req.body
    const [rows] = await pool.query('SELECT usuarios.nombre, usuarios.apellido, comentarioscursos.comentario FROM usuarios, comentarioscursos WHERE usuarios.idusuario = comentarioscursos.idusuario and idcurso = ? and idmaterial = ?;',[idcurso, idmaterial])
    res.json(rows)
}

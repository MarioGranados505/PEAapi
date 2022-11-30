import { json } from "express"
import { pool } from "../db.js"

export const getListaCursos = async (req, res) => {
    const [rows] = await pool.query('Select * FROM listacursos')
    res.json(rows)
}

export const getListaCurso = async (req, res) => {
    const [rows] = await pool.query('Select * FROM listacursos WHERE idcurso = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.json(rows[0])
}

export const createListaCurso = async(req, res) => {
    const {idcurso, nombre, maestro, des, imagen} = req.body
    const [rows] = await pool.query('INSERT INTO listacursos (idcurso, nombre, maestro, des, imagen) VALUES (?, ?, ?, ?, ?)',[idcurso, nombre, maestro, des, imagen])
    res.send({ rows })
}

export const deleteListaCurso = async (req, res) => {
    const [result] = await pool.query('DELETE FROM listacursos where idcurso = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateListaCurso = async (req, res) => {
    const{ idcurso } = req.params
    const{ nombre, maestro, des, imagen} = req.body
    
    const [result] = await pool.query(
        'UPDATE listacursos SET nombre = IFNULL(?, nombre), maestro = IFNULL(?, maestro), des = IFNULL(?, des), imagen = IFNULL(?, imagen) Where idcurso = ?',[nombre, maestro, des, imagen, idcurso]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM listacursos WHERE idcurso = ?', [id])
    res.json(rows[0])
}

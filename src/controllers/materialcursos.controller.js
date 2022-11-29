import { json } from "express"
import { pool } from "../db.js"

export const getMaterialcursos = async (req, res) => {
    const [rows] = await pool.query('Select * FROM materialcursos')
    res.json(rows)
}

export const getMaterialcurso = async (req, res) => {
    const [rows] = await pool.query('Select iddia, titulo, des, videourl FROM materialcursos WHERE idcurso = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    res.json(rows)
}

export const createMaterialcurso = async(req, res) => {
    const {id, idcurso, iddia, titulo, des, videourl} = req.body
    const [rows] = await pool.query('INSERT INTO materialcursos (id, idcurso, iddia, titulo, des, videourl) VALUES (?, ?, ?, ?, ?, ?)',[id, idcurso, iddia, titulo, des, videourl])
    res.send({ rows })
}

export const deleteMaterialcurso = async (req, res) => {

    const [result] = await pool.query('DELETE FROM materialcursos where id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })

    res.send('Valor eliminado')
}

export const updateMaterialcurso = async (req, res) => {
    const{ id } = req.params
    const{ idcurso, iddia, titulo, des, videourl } = req.body
    
    const [result] = await pool.query(
        'UPDATE materialcursos SET idcurso = IFNULL(?, idcurso), iddia = IFNULL(?, iddia), titulo = IFNULL(?, titulo), des = IFNULL(?, des), videourl = IFNULL(?, videourl) Where id = ?',[idcurso, iddia, titulo, des, videourl, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM materialcurso WHERE id = ?', [id])

    res.json(rows[0])
}
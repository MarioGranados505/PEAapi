import { json } from "express"
import { pool } from "../db.js"

export const getMaterialcursos = async (req, res) => {
    const [rows] = await pool.query('Select * FROM materialcursos')
    res.json(rows)
}

export const getMaterialcurso = async (req, res) => {
    const [rows] = await pool.query('Select idmaterial, titulo, des, imagendir1, imagendir2 FROM materialcursos WHERE idcurso = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.json(rows)
}

export const createMaterialcurso = async(req, res) => {
    const {idcurso, idmaterial, titulo, des, imagendir1, imagendir2} = req.body
    const [rows] = await pool.query('INSERT INTO materialcursos (idcurso, idmaterial, titulo, des, imagendir1, imagendir2) VALUES (?, ?, ?, ?, ?, ?)',[idcurso, idmaterial, titulo, des, imagendir1, imagendir2])
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
    const{ idcurso, idmaterial, titulo, des, imagendir1, imagendir2 } = req.body
    
    const [result] = await pool.query(
        'UPDATE materialcursos SET idcurso = IFNULL(?, idcurso), idmaterial = IFNULL(?, idmaterial), titulo = IFNULL(?, titulo), des = IFNULL(?, des), imagendir1 = IFNULL(?, imagendir1), imagendir2 = IFNULL(?, imagendir2) Where id = ?',[idcurso, idmaterial, titulo, des, imagendir1, imagendir2, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM materialcurso WHERE id = ?', [id])
    
    res.json(rows[0])
}

export const deleteMaterialcursoAll = async (req, res) => {

    const [result] = await pool.query('DELETE FROM materialcursos where idcurso = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })
    res.send('Valor eliminado')
}

export const deletematerialcursoOne = async (req, res) => {
    const {idcurso, idmaterial} = req.body
    const [result] = await pool.query('DELETE FROM materialcursos where idcurso = ? and idmaterial = ?', [idcurso, idmaterial])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })
    res.send('Valor eliminado')

}
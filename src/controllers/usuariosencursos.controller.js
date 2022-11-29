import { json } from "express"
import { pool } from "../db.js"

export const getusuarioscursos = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM usuariosencursos')
    res.set('Access-Control-Allow-Origin', 'https://mariogranados.000webhostapp.com/');
    res.json(rows)
}

export const getunusuariocurso = async (req, res) => {
    const {idcurso, idusuario} = req.body
    const [rows] = await pool.query ('SELECT * FROM usuariosencursos WHERE idcurso = ? and idusuario = ?', [idcurso, idusuario])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.set('Access-Control-Allow-Origin', 'https://mariogranados.000webhostapp.com/');
    res.json(rows[0])

}

export const getUsuarioCursos = async (req, res) =>{
    const [rows] = await pool.query('SELECT listacursos.idcurso, listacursos.nombre, listacursos.maestro, listacursos.des, listacursos.imagen FROM listacursos, usuariosencursos WHERE listacursos.idcurso = usuariosencursos.idcurso and usuariosencursos.idusuario = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.set('Access-Control-Allow-Origin', 'https://mariogranados.000webhostapp.com/');
    res.json(rows)
}

export const createUsuariocurso = async(req, res) => {
    const {idcurso, idusuario} = req.body
    const [rows] = await pool.query('INSERT INTO usuariosencursos (idcurso, idusuario) VALUES (?, ?)',[idcurso, idusuario])
    res.set('Access-Control-Allow-Origin', 'https://mariogranados.000webhostapp.com/');
    res.send({ rows })
}

export const deleteUsuariocurso = async (req, res) => {

    const [result] = await pool.query('DELETE FROM usuariosencursos where id = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })
    res.set('Access-Control-Allow-Origin', 'https://mariogranados.000webhostapp.com/');
    res.send('Valor eliminado')
}
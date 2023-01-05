import { json } from "express"
import { pool } from "../db.js"

export const getListaCursos = async (req, res) => {
    const [rows] = await pool.query('Select * FROM listacursos')
    res.json(rows)
}

export const getListaCursoNA = async (req, res) => {
    const [rows] = await pool.query('SELECT listacursos.idcurso, listacursos.nombrecurso, usuarios.nombre, usuarios.apellido, listacursos.des, listacursos.imagen FROM listacursos, usuarios where listacursos.idusuario = usuarios.idusuario')
    res.json(rows)
}

export const getListaCursosU = async (req, res) => {
    const [rows] = await pool.query('SELECT listacursos.idcurso, listacursos.nombrecurso, listacursos.des, listacursos.imagen FROM listacursos WHERE idusuario = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
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
    const {nombrecurso, idusuario, des, imagen} = req.body
    const [rows] = await pool.query('INSERT INTO listacursos (nombrecurso, idusuario, des, imagen) VALUES (?, ?, ?, ?)',[nombrecurso, idusuario, des, imagen])
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
    try{
        const { idcurso } = req.params.id;
        const { nombrecurso, idusuario, des, imagen } = req.body;

        console.log(req.params.id)
        console.log(req.body)

        const [result] = await pool.query(
            'UPDATE listacursos SET nombrecurso = IFNULL(?, nombrecurso), idusuario = IFNULL(?, idusuario), des = IFNULL(?, des), imagen = IFNULL(?, imagen) WHERE idcurso = ?', [nombrecurso, idusuario, des, imagen, req.params.id]
        );

        console.log(result)

        if(result.affectedRows === 0) return res.status(404).json({
            message: 'Valor no encontrado'
        })

        const [rows] = await pool.query('SELECT * FROM listacursos WHERE idcurso = ?', [req.params.id])
        res.json(rows[0])

    }catch (error) {
        return res.status(500).json({ message: "Algo salio mal" });
    }
    
}

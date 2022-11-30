import { json } from "express"
import { pool } from "../db.js"

export const getUsuarios = async (req, res) => {
    const [rows] = await pool.query('Select * FROM usuarios')
    res.json(rows)
}

export const getUsuario = async (req, res) => {
    const [rows] = await pool.query('Select * FROM usuarios WHERE Idusuario = ?', [req.params.id])

    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.json(rows[0])
}

export const getUsuarioLogin = async (req, res) => {
    const {Correo, Password} = req.body
    const [rows] = await pool.query('Select * from usuarios where Correo = ? and Password= ? ', [Correo, Password])
    if (rows.length <= 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })
    res.json(rows[0])
}

export const createUsuario = async(req, res) => {
    const {Nombre, Apellido, Correo, Password} = req.body
    const [rows] = await pool.query('INSERT INTO usuarios (Nombre, Apellido, Correo, Password) VALUES (?, ?, ?, ?)',[Nombre, Apellido, Correo, Password])
    res.send({ rows })
}

export const deleteUsuario = async (req, res) => {

    const [result] = await pool.query('DELETE FROM usuarios where Idusuario = ?', [req.params.id])

    if(result.affectedRows <= 0) return res.status(404).json({
        message: 'Valor no entontrado'
    })
    res.send('Valor eliminado')
}

export const updateUsuario = async (req, res) => {
    const{ id } = req.params
    const{ Nombre, Apellido, Correo, Password} = req.body
    
    const [result] = await pool.query(
        'UPDATE usuarios SET Nombre = IFNULL(?, Nombre), Apellido = IFNULL(?, Apellido), Correo = IFNULL(?, Correo), Password = IFNULL(?, Password) Where Idusuario = ?',[Nombre, Apellido, Correo, Password, id]
    )

    if(result.affectedRows === 0) return res.status(404).json({
        message: 'Valor no encontrado'
    })

    const [rows] = await pool.query('SELECT * FROM Usuarios WHERE Idusuario = ?', [id])
    res.json(rows[0])
}
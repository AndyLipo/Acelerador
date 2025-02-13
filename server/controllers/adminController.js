const db = require('../db/db.js');

//Obtener todos los usuarios admin
const getAllAdminAccess = (req,res) => {
    const sql = "SELECT * FROM admin_user";
    db.query(sql, (err,results) => {
        if (err) throw err;
        res.json(results);
    });
};

//Obtener admin por ID
const getAdminById = (req,res) => {
    const {id} = req.params;
    const sql = 'SELECT * FROM admin_user WHERE admin_id=?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

//Crear nuevo usuario
const bcrypt = require ('bcryptjs');
const createAdminUser = async (req,res) => {
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO admin_user (email_admin, password_admin) VALUES (?, ?)';
    db.query(sql, [email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador creado correctamente", idAdmin: result.insertId });
    });
};

//Editar usuario
const updateAdminUser = async (req, res) => {
    const {id} = req.params;
    const {password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'UPDATE admin_user SET password_admin = ? WHERE admin_id = ?';
    db.query(sql,[ hashedPassword, id], (err, result) => {
        if (err) throw err;
        console.log(hashedPassword);
        res.json({ mensaje: "Administrador actualizado correctamente"});
    });
};

//Eliminar usuario
const deleteAdminUser = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM admin_user WHERE admin_id = ?';
    db.query(sql,[id], (err, result) => {
        if (err) throw err;
        res.json({ mensaje: "Administrador eliminado correctamente"});
    });
};

module.exports = {
    getAllAdminAccess,
    getAdminById,
    createAdminUser,
    updateAdminUser,
    deleteAdminUser
};
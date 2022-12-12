const Usuario = require("../models/Productos");


exports.obtenerProducto = async ( req, res) => {
    res.status(404).json({ msg: "obtener Producto"});
};

exports.crearProducto = async ( req, res) => {
    res.status(404).json({ msg: "crear Producto"});
};

exports.actualizarProducto = async ( req, res) => {
    res.status(404).json({ msg: "actualizar Producto"});
};

exports.borrarProducto = async ( req, res) => {
    res.status(404).json({ msg: "borrar Producto"});
};
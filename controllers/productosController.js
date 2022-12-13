const Productos = require("../models/Productos");
const Usuario = require("../models/Productos");



exports.obtenerProducto = async ( req, res) => {
    try{
        const producto = await Productos.find({ creador: req.usuario.id});

        res.json({ producto });
    }catch(error){
        console.log(error);
    }};

exports.crearProducto = async ( req, res) => {
    try{
        const producto= new Productos(req.body);
        producto.creador =req.usuario.id;
        producto.save();
        res.json(producto);
    }catch(error){
        console.log(error);
    };
   
};

exports.actualizarProducto = async ( req, res) => {
    const { id } = req.params;
    const producto = await Productos.findById(id);

    if(!producto){
        return res.status(400).json({ msg: "Producto no encontrado"});
    }
    if(producto.creador.toString() !== req.usuario.id.toString()){
        return res.status(400).json({ msg : "acción no válida para este ususario"});
    }

    producto.nombre = req.body.nombre || producto.nombre;

    producto.save();

    res.json({ producto});
};

exports.borrarProducto = async ( req, res) => {
    try{
        await Productos.deleteOne({ _id: req.params.id});
        res.json({ msg: "Producto eliminado"});
    }catch(error){
        console.log(error);
    }
};
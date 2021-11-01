const { response } = require('express');


const usuariosGet = (req = request,res = response) => {

    const { q = '', nombre = '', apellido = '' } = req.query;

    res.json({
        msg: 'get Api - Controlador',
        q,
        nombre,
        apellido
    })
}

const usuariosPost = (req,res = response) => {

    const { id , nombre } = req.body;
    const body = req.body;

    res.json({
        msg: 'post  Api - Controlador',
        body,
        id,
        nombre
    })
}

const usuariosPut = (req,res, response) => {

    const {id} = req.params;

    res.json({
        msg: 'put  Api - Controlador',
        id
    })
}

const usuariosPatch = (req,res, response) => {
    res.json({
        msg: 'patch  Api - Controlador'
    })
}

const usuariosDelete = (req,res, response) => {
    res.json({
        msg: 'delete  Api - Controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}
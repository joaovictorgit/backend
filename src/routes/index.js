'use strict'
import express, { Router } from 'express';
import RouterUsuarios from '../usuarios/usuarios-routes.js';
import RouterProdutos from '../produtos/produtos-routes.js';
import RouterComentarios from '../comentarios/comentarios-routes.js';

const routers = express.Router()

routers.use('/produtos', RouterProdutos)
routers.use('/usuarios', RouterUsuarios)
routers.use('/comentarios', RouterComentarios)

export default routers;

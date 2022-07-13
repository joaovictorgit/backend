'use strict'
import express, { Router } from 'express';
import RouterUsuarios from './usuarios-routes.js';
import RouterProdutos from './produtos-routes.js';
import RouterComentarios from './comentarios-routes.js';

const routers = express.Router()

routers.use('/produtos', RouterProdutos)
routers.use('/usuarios', RouterUsuarios)
routers.use('/comentarios', RouterComentarios)

export default routers;

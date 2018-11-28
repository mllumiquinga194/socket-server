import { Router} from 'express';
import { get, post, mensajesConId } from '../controllers/mensajes';
import { obtenerIdUsuarios, obtenerUsuarios } from '../controllers/usuarios';

const router = Router();

//RUTAS PARA MENSAJES
router.get('/mensajes', get);
router.post('/mensajes', post);
router.post('/mensajes/:id', mensajesConId);

//RUTAS PARA OBTENER ID DE USUARIOS
router.get('/usuarios', obtenerIdUsuarios);
router.get('/usuarios/detalle', obtenerUsuarios);

export default router;
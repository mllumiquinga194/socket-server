import { Router} from 'express';
import { get, post, mensajesConId } from '../controllers/mensajes';

const router = Router();

router.get('/mensajes', get);
router.post('/mensajes', post);
router.post('/mensajes/:id', mensajesConId);

// router.get('/mensajes', (req: Request, res: Response) => {

//     res.json({
//         ok: true,
//         mensaje: 'Todo esta bien!!'
//     });
// });

// router.post('/mensajes', (req: Request, res: Response) => {

//     res.json({
//         ok: true,
//         mensaje: 'POST - Listo!!'
//     });
// });

export default router;
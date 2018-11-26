import { Request, Response } from 'express';
import Server from '../classes/server';

const server = Server.instance;

export function get(req:Request, res:Response) {

    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!',
    });
}

export function post(req:Request, res:Response) {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    const payload = {
        de,
        cuerpo
    };

    server.io.emit( 'mensaje-nuevo', payload );
    
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!',
        cuerpo,
        de
    });
}

export function mensajesConId(req:Request, res:Response) {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;

    const payload = {
        de,
        cuerpo
    }

    server.io.in( id ).emit( 'mensaje-privado', payload );
    
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!',
        cuerpo,
        de,
        id
    });
}
import { Socket } from 'socket.io';
import  socketIO  from 'socket.io';

// AQUI VAMOS A DESARROLLAR TODA LA LOGICA DE LOS SOCKETS Y EN EL SERVIDOR SOLO VAMOS A HACER REFERENCIA A ESTE ARCHIVO

export const desconectar = ( cliente: Socket) => {

    cliente.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
}

//Escuchar Mensajes
// la propiedad io tiene el control y el conocimiento de qué personas estan conectadas. y esto es lo que vamos a usar para poder enviar mensajes a todos los usuarios. para eso recibo esa propiedad como argumento de referencia en la funcion
export const mensaje = ( cliente: Socket, io: socketIO.Server ) => {

    //esto es un ejemplo solo para definir el tipo de payload  payload: { de: string, cuerpo: string }
    cliente.on('mensaje', ( payload: { de: string, cuerpo: string } ) => {

        console.log('Mensaje Recibido', payload);

        // el mensaje que estoy recibiendo lo voy a emitir a todos los clientes que esten escuchando

        // la propiedad io tiene el control y el conocimiento de qué personas estan conectadas. y esto es lo que vamos a usar para poder enviar mensajes a todos los usuarios

        io.emit('mensaje-nuevo', payload );
        

    });
}
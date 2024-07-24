import { Usuario } from "./usuario";

export class Comentario {
    id: string;
    texto: string;
    fecha: Date;
    usuario: Usuario;
    constructor(
        id: string,
        texto: string,
        fecha: Date,
        usuario: Usuario,
    ){
        this.id = id;
        this.texto = texto;
        this.fecha = fecha;
        this.usuario = usuario;
    }
}
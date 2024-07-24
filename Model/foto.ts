import { Comentario } from "./comentario";
import { Usuario } from "./usuario";

export class Foto {
    id: string;
    ruta: string;
    descripcion: string;
    hashtags: string[];
    fechaSubida: Date;
    usuario: Usuario;
    meGusta: Usuario[];
    comentarios: Comentario[];
    constructor(
        id: string,
        ruta: string,
        descripcion: string,
        hashtags: string[],
        fechaSubida: Date,
        usuario: Usuario,
        meGusta: Usuario[],
        comentarios: Comentario[],
    ){
        this.id = id;
        this.ruta = ruta;
        this.descripcion = descripcion;
        this.hashtags = hashtags;
        this.fechaSubida = fechaSubida;
        this.usuario = usuario;
        this.meGusta = meGusta;
        this.comentarios = comentarios;
    }

}
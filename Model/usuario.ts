import { Foto } from "./foto";

export class Usuario {
    nombre: string;
    email: string;
    password: string;
    fechaRegistro: Date;
    fotoPerfil: string;
    seguidores: Usuario[];
    siguiendo: Usuario[];
    fotoSubidas:Foto[];
    constructor(
        nombre: string,
        email: string,
        password: string,
        fechaRegistro: Date,
        fotoPerfil: string,
        seguidores: Usuario[],
        siguiendo: Usuario[],
        fotoSubidas:Foto[],
    ){
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.fechaRegistro = fechaRegistro;
        this.fotoPerfil = fotoPerfil;
        this.seguidores = seguidores;
        this.siguiendo = siguiendo;
        this.fotoSubidas =fotoSubidas;
    }
}
export class Producto {

    _id?: string;
    codigoAlumno: string;
    nombre: string;
    codigoCarrera: string;
    campo: string;
    fecha: Date;

    constructor(codigoAlumno:string ,nombre:string, codigoCarrera:string, campo: string, fecha: Date){
        this.codigoAlumno = codigoAlumno;
        this.nombre = nombre;
        this.codigoCarrera = codigoCarrera;
        this.campo = campo;
        this.fecha = fecha;
    }

}
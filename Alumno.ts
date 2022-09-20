import { Documento } from "./Documento";

export class Alumno {
    private nombre:string;
    private apellido:string;
    private documento:Documento;
    private nota:number;
    private aprobado:boolean;

    constructor(nombre:string, apellido:string, documento:Documento, nota:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.nota = nota;
        this.aprobado = nota > 7;
    }

    // Metodos Getters y Setters

    public getNombre():string {
        return this.nombre;
    }
    public setNombre(nombre:string):void{
        this.nombre = nombre;
    }



    public getApellido():string {
        return this.apellido;
    }
    public setApellido(apellido:string):void{
        this.apellido = apellido;
    }



    public getDocumento():Documento {
        return this.documento;
    }
    public setDocumento(documento:Documento):void{
        this.documento = documento;
    }



    public getNota():number {
        return this.nota;
    }
    public setNota(nota:number):void {
        if (this.nota >= 1 || this.nota <=10) {
            this.nota = nota;
        } else {
            console.log("ERROR! La nota debe ser un número entre 1 y 10")
        }
    }



    public isAprobado():boolean {
        return this.aprobado;
    }
}


/* --------------------------------------------------------------------------------- */

// let doc1 = new Documento("DNI", "31010912");
// console.log(doc1);
// let alumno1 = new Alumno("Lucas","Fernandez", doc1, 1);

// console.log(alumno1);
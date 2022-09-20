"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(nombre, apellido, documento, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.nota = nota;
        this.aprobado = nota > 7;
    }
    // Metodos Getters y Setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellido() {
        return this.apellido;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getDocumento() {
        return this.documento;
    }
    setDocumento(documento) {
        this.documento = documento;
    }
    getNota() {
        return this.nota;
    }
    setNota(nota) {
        if (this.nota >= 1 || this.nota <= 10) {
            this.nota = nota;
        }
        else {
            console.log("ERROR! La nota debe ser un número entre 1 y 10");
        }
    }
    isAprobado() {
        return this.aprobado;
    }
}
exports.Alumno = Alumno;
/* --------------------------------------------------------------------------------- */
// let doc1 = new Documento("DNI", "31010912");
// console.log(doc1);
// let alumno1 = new Alumno("Lucas","Fernandez", doc1, 1);
// console.log(alumno1);

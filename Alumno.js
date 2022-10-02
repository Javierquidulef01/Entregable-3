"use strict";
exports.__esModule = true;
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, documento, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.nota = nota;
        this.aprobado = nota > 7;
    }
    // Metodos Getters y Setters
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Alumno.prototype.getDocumento = function () {
        return this.documento;
    };
    Alumno.prototype.setDocumento = function (documento) {
        this.documento = documento;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (nota) {
        if (this.nota >= 1 || this.nota <= 10) {
            this.nota = nota;
        }
        else {
            console.log("ERROR! La nota debe ser un número entre 1 y 10");
        }
    };
    Alumno.prototype.isAprobado = function () {
        return this.aprobado;
    };
    return Alumno;
}());
exports.Alumno = Alumno;
/* --------------------------------------------------------------------------------- */
// let doc1 = new Documento("DNI", "31010912");
// console.log(doc1);
// let alumno1 = new Alumno("Lucas","Fernandez", doc1, 1);
// console.log(alumno1);

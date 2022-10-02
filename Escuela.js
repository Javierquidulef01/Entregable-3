"use strict";
exports.__esModule = true;
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombre, alumnos, profesores) {
        this.alumnos = [];
        this.profesores = [];
        this.nombre = nombre;
        this.setAlumnos(alumnos);
        this.setProfesores(profesores);
    }
    /* METODOS GETTERS Y SETTERS */
    Escuela.prototype.getNombre = function () {
        return this.nombre;
    };
    Escuela.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Escuela.prototype.getAlumnos = function () {
        return this.alumnos;
    };
    // if: por si se settea mediante el constructor. 
    // else: por si ya existen alumnos. Se los agregará uno por uno al final del arreglo
    Escuela.prototype.setAlumnos = function (alumnos) {
        if (this.alumnos == undefined) {
            this.alumnos = alumnos;
        }
        else {
            for (var i = 0; i < alumnos.length; i++) {
                this.alumnos.push(alumnos[i]);
            }
        }
    };
    Escuela.prototype.getProfesores = function () {
        return this.profesores;
    };
    //METODO IDENTICO A setAlumnos() solo se cambió el nombre alumnos por profesores
    Escuela.prototype.setProfesores = function (profesores) {
        if (this.profesores == undefined) {
            this.profesores = profesores;
        }
        else {
            for (var i = 0; i < profesores.length; i++) {
                this.profesores.push(profesores[i]);
            }
        }
    };
    // No se permiten Documentos Duplicados (los Profesores se diferencian por su documento).
    Escuela.prototype.contratarProfesor = function (profesor) {
        var documentoIngresante = profesor.getDocumento();
        for (var i = 0; i < this.profesores.length; i++) {
            var documentoExistente = this.profesores[i].getDocumento();
            var mismoDocumento = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
            if (mismoDocumento) {
                console.log("El PROFESOR ha contratar ya es parte de la escuela.");
                return;
            }
        }
        this.profesores.push(profesor);
        console.log("PROFESOR CONTRATADO CON EXITO!");
    };
    //IDENTICO A contratarProfesor() pero con Alumnos
    Escuela.prototype.matricularAlumno = function (alumno) {
        var documentoIngresante = alumno.getDocumento();
        for (var i = 0; i < this.alumnos.length; i++) {
            var documentoExistente = this.alumnos[i].getDocumento();
            var mismoDocumento = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
            if (mismoDocumento) {
                console.log("El ALUMNO ha matricular ya es parte de la escuela.");
                return;
            }
        }
        this.alumnos.push(alumno);
        console.log("ALUMNO MATRICULADO CON EXITO!");
    };
    // El Alumno a expulsar se lo buscará por su Documento (tipo,nro).
    // al encontrarlo se obtendra la posicion/indice que ocupa en el arreglo de Alumnos
    Escuela.prototype.expulsarAlumno = function (alumno) {
        var documentoExpulsado = alumno.getDocumento();
        var posExpulsado = -1;
        for (var i = 0; i < this.alumnos.length; i++) {
            var documentoExistente = this.alumnos[i].getDocumento();
            var documentoEncontrado = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());
            if (documentoEncontrado) {
                posExpulsado = i;
                console.log("SE ENCONTRO AL ALUMNO A EXPULSAR!");
                break; //finaliza el ciclo for de manera forzada al encontrar el alumno
            }
        }
        if (posExpulsado < 0) {
            console.log("EL ALUMNO A EXPULSAR NO SE ENCUENTRA EN EL LISTADO DE ALUMNOS");
        }
        else {
            console.log(this.alumnos.splice(posExpulsado, 1)); //parametro1 indica el indice en donde se posicionara (posExpulsado). parametro2 indica la cantidad de elementos que se eliminarán (1) a partir de esa posicion. (comienza a contar desde donde está, osea posExpulsado seria el unico elemento a eliminar)
            console.log("ALUMNO EXPULSADO CON EXITO!");
        }
    };
    //IDENTICO A  expulsarAlumnos() pero con profesores
    Escuela.prototype.despedirProfesor = function (profesor) {
        var documentoExpulsado = profesor.getDocumento();
        var posDespedido = -1;
        for (var i = 0; i < this.profesores.length; i++) {
            var documentoExistente = this.profesores[i].getDocumento();
            var documentoEncontrado = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());
            if (documentoEncontrado) {
                posDespedido = i;
                console.log("SE ENCONTRO AL PROFESOR A DESPEDIR!");
                break;
            }
        }
        if (posDespedido < 0) {
            console.log("EL PROFESOR A DESPEDIR NO SE ENCUENTRA EN EL LISTADO DE PROFESORES");
        }
        else {
            console.log(this.profesores.splice(posDespedido, 1));
            console.log("PROFESOR DESPEDIDO CON EXITO!");
        }
    };
    return Escuela;
}());
exports.Escuela = Escuela;

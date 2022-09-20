"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
class Escuela {
    constructor(nombre, alumnos, profesores) {
        this.alumnos = [];
        this.profesores = [];
        this.nombre = nombre;
        this.setAlumnos(alumnos);
        this.setProfesores(profesores);
    }
    /* METODOS GETTERS Y SETTERS */
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getAlumnos() {
        return this.alumnos;
    }
    // if: por si se settea mediante el constructor. 
    // else: por si ya existen alumnos. Se los agregará uno por uno al final del arreglo
    setAlumnos(alumnos) {
        if (this.alumnos == undefined) {
            this.alumnos = alumnos;
        }
        else {
            for (let i = 0; i < alumnos.length; i++) {
                this.alumnos.push(alumnos[i]);
            }
        }
    }
    getProfesores() {
        return this.profesores;
    }
    //METODO IDENTICO A setAlumnos() solo se cambió el nombre alumnos por profesores
    setProfesores(profesores) {
        if (this.profesores == undefined) {
            this.profesores = profesores;
        }
        else {
            for (let i = 0; i < profesores.length; i++) {
                this.profesores.push(profesores[i]);
            }
        }
    }
    // No se permiten Documentos Duplicados (los Profesores se diferencian por su documento).
    contratarProfesor(profesor) {
        let documentoIngresante = profesor.getDocumento();
        for (let i = 0; i < this.profesores.length; i++) {
            let documentoExistente = this.profesores[i].getDocumento();
            let mismoDocumento = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
            if (mismoDocumento) {
                console.log("El PROFESOR ha contratar ya es parte de la escuela.");
                return;
            }
        }
        this.profesores.push(profesor);
        console.log("PROFESOR CONTRATADO CON EXITO!");
    }
    //IDENTICO A contratarProfesor() pero con Alumnos
    matricularAlumno(alumno) {
        let documentoIngresante = alumno.getDocumento();
        for (let i = 0; i < this.alumnos.length; i++) {
            let documentoExistente = this.alumnos[i].getDocumento();
            let mismoDocumento = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
            if (mismoDocumento) {
                console.log("El ALUMNO ha matricular ya es parte de la escuela.");
                return;
            }
        }
        this.alumnos.push(alumno);
        console.log("ALUMNO MATRICULADO CON EXITO!");
    }
    // El Alumno a expulsar se lo buscará por su Documento (tipo,nro).
    // al encontrarlo se obtendra la posicion/indice que ocupa en el arreglo de Alumnos
    expulsarAlumno(alumno) {
        let documentoExpulsado = alumno.getDocumento();
        let posExpulsado = -1;
        for (let i = 0; i < this.alumnos.length; i++) {
            let documentoExistente = this.alumnos[i].getDocumento();
            let documentoEncontrado = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());
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
    }
    //IDENTICO A  expulsarAlumnos() pero con profesores
    despedirProfesor(profesor) {
        let documentoExpulsado = profesor.getDocumento();
        let posDespedido = -1;
        for (let i = 0; i < this.profesores.length; i++) {
            let documentoExistente = this.profesores[i].getDocumento();
            let documentoEncontrado = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());
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
    }
}
exports.Escuela = Escuela;

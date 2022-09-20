"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Documento_1 = require("./Documento");
const Alumno_1 = require("./Alumno");
const Profesor_1 = require("./Profesor");
const Escuela_1 = require("./Escuela");
/*----------------------------------------------------------------------------------------*/
/* FUNCIONES QUE AYUDAN A CREAR VARIOS PROFESORES Y ALUMNOS */
// devuelve un numero entero aleatorio que se encuentrá entre dos numeros indicados (minimo y maximo)
function obtenerNroAleatorio(minimo, maximo) {
    let nroAleatorio = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
    return nroAleatorio;
}
// devuelve un arreglo de Profesores (pero sin su listado de alumnos)
function crearProfesores(cantidad) {
    let profesores = new Array(cantidad);
    for (let i = 0; i < profesores.length; i++) {
        let nombre = "Profesor" + (i + 1);
        let apellido = "ApellidoProfesor" + (i + 1);
        let nroDoc_MIN = 14000000;
        let nroDoc_MAX = 38000000;
        let documento = new Documento_1.Documento("DNI", String(obtenerNroAleatorio(nroDoc_MIN, nroDoc_MAX)));
        let profesor = new Profesor_1.Profesor(nombre, apellido, documento);
        profesores[i] = profesor;
    }
    return profesores;
}
// IDENTICO A  crearProfesores() pero con alumnos
function crearAlumnos(cantidad) {
    let alumnos = new Array(cantidad);
    for (let i = 0; i < alumnos.length; i++) {
        let nombre = "Alumno" + (i + 1);
        let apellido = "ApellidoAlumno" + (i + 1);
        let nroDoc_MIN = 23000000;
        let nroDoc_MAX = 48000000;
        let documento = new Documento_1.Documento("DNI", String(obtenerNroAleatorio(nroDoc_MIN, nroDoc_MAX)));
        let nota = obtenerNroAleatorio(1, 10);
        let alumno = new Alumno_1.Alumno(nombre, apellido, documento, nota);
        alumnos[i] = alumno;
    }
    return alumnos;
}
/*----------------------------------------------------------------------------------------*/
let cantAlumnos = 9;
let cantProfesores = 3;
let profesores = crearProfesores(cantProfesores);
let alumnos = crearAlumnos(cantAlumnos);
console.log("\n\n********************* INICIO PROGRAMA **********************");
let escuela = new Escuela_1.Escuela("Escuela Nro 1", alumnos, profesores);
console.log("------------------------ NOMBRE ESCUELA ------------------------");
console.log(escuela.getNombre());
console.log("--------------------- ALUMNOS REGISTRADOS ----------------------");
console.log(escuela.getAlumnos());
console.log("----------------------------------------------------------------");
console.log("-------------------- PROFESORES REGISTRADOS --------------------");
console.log(escuela.getProfesores());
console.log("----------------------------------------------------------------");
console.log("---------------------- ALUMNO SELECCIONADO ---------------------");
let alumnoSeleccionado = escuela.getAlumnos()[3];
console.log(alumnoSeleccionado);
console.log("----------------------------------------------------------------");
console.log("--------------------- INTENTO MATRICULAR -----------------------");
escuela.matricularAlumno(alumnoSeleccionado);
console.log("----------------------------------------------------------------");
console.log("---------------------- EXPULSAR ALUMNO --------------------------");
escuela.expulsarAlumno(alumnoSeleccionado);
console.log(escuela.getAlumnos());
console.log("-----------------------------------------------------------------");
console.log("--------------------- 2do INTENTO MATRICULAR  ---------------------");
escuela.matricularAlumno(alumnoSeleccionado);
console.log("ALUMNOS REGISTRADOS:");
console.log(escuela.getAlumnos());
console.log("-----------------------------------------------------------------");
//DISTRIBUIR ALUMNOs
// Los alumnos se reparten de a uno para cada profesor (pueden quedar grupos disparejos dependiendo la cant Alumnos y Profesores)
//los profesores solo reciben arreglos de alumnos. por eso se crea un arreglo de 1 alumno (?
function distribuirAlumnos(profesores, alumnos) {
    let posProfe = profesores.length - 1;
    for (let i = 0; i < alumnos.length; i++) {
        let arreglo_1alumno = [alumnos[i]];
        profesores[posProfe].setAlumnos(arreglo_1alumno);
        posProfe = posProfe - 1;
        if (posProfe < 0) {
            posProfe = profesores.length - 1;
        }
    }
}
distribuirAlumnos(escuela.getProfesores(), escuela.getAlumnos());
console.log("*************** PROFESORES CON SU LISTA DE ALUMNOS  ****************");
console.log(escuela.getProfesores());
console.log("********************* PROFESOR SELECCIONADO ************************");
let profesorSeleccionado = escuela.getProfesores()[0];
console.log(profesorSeleccionado);
console.log("********************* INTENTO CONTRATAR A PROFESOR ************************");
escuela.contratarProfesor(profesorSeleccionado);
console.log("********************* DESPEDIR AL PROFESOR ************************");
escuela.despedirProfesor(profesorSeleccionado);
console.log("************************* PROFESORES REGISTRADOS ***************************");
console.log(escuela.getProfesores());
console.log("********************* INTENTO NRO-2 CONTRATAR A PROFESOR ************************");
escuela.contratarProfesor(profesorSeleccionado);
console.log("************************* PROFESORES REGISTRADOS ***************************");
console.log(escuela.getProfesores());
console.log("************************* FIN DEL PROGRAMA!! ***************************");

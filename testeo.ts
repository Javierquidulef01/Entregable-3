import { Documento } from "./Documento";
import { Alumno } from './Alumno';
import { Profesor } from "./Profesor";
import { Escuela } from './Escuela';


/*----------------------------------------------------------------------------------------*/
/* FUNCIONES QUE AYUDAN A CREAR VARIOS PROFESORES Y ALUMNOS */

// devuelve un numero entero aleatorio que se encuentrá entre dos numeros indicados (minimo y maximo)
function obtenerNroAleatorio(minimo:number, maximo:number):number{
    let nroAleatorio:number = Math.floor(Math.random() * ((maximo - minimo) + 1) + minimo);
    return nroAleatorio;
}


// devuelve un arreglo de Profesores (pero sin su listado de alumnos)
function crearProfesores(cantidad:number):Profesor[] {
    let profesores:Profesor[] = new Array(cantidad);

    for (let i = 0; i < profesores.length; i++) {
        let nombre:string = "Profesor" + (i+1);
        let apellido:string = "ApellidoProfesor" + (i+1);
        let nroDoc_MIN: number = 14000000;
        let nroDoc_MAX: number = 38000000;
        let documento:Documento = new Documento("DNI", String(obtenerNroAleatorio(nroDoc_MIN, nroDoc_MAX)));

        let profesor:Profesor = new Profesor(nombre, apellido, documento);
        profesores[i] = profesor;
    }

    return profesores;
}


// IDENTICO A  crearProfesores() pero con alumnos
function crearAlumnos(cantidad:number):Alumno[] {
    let alumnos:Alumno[] = new Array(cantidad);

    for (let i = 0; i < alumnos.length; i++) {
        let nombre:string = "Alumno" + (i+1);
        let apellido:string = "ApellidoAlumno" + (i+1);
        let nroDoc_MIN:number = 23000000;
        let nroDoc_MAX:number = 48000000;
        let documento:Documento = new Documento("DNI", String(obtenerNroAleatorio(nroDoc_MIN, nroDoc_MAX)));
        let nota:number = obtenerNroAleatorio(1, 10);

        let alumno:Alumno = new Alumno(nombre, apellido, documento, nota);
        alumnos[i] = alumno;
    }

    return alumnos;
}


/*----------------------------------------------------------------------------------------*/

let cantAlumnos:number = 9;
let cantProfesores:number = 3;

let profesores:Profesor[] = crearProfesores(cantProfesores);
let alumnos:Alumno[] = crearAlumnos(cantAlumnos);



console.log("\n\n********************* INICIO PROGRAMA **********************");

let escuela:Escuela = new Escuela("Escuela Nro 1", alumnos, profesores);

console.log("------------------------ NOMBRE ESCUELA ------------------------");
                        console.log(escuela.getNombre());

console.log("--------------------- ALUMNOS REGISTRADOS ----------------------");
                        console.log(escuela.getAlumnos());
console.log("----------------------------------------------------------------");

console.log("-------------------- PROFESORES REGISTRADOS --------------------");
                        console.log(escuela.getProfesores());
console.log("----------------------------------------------------------------");


console.log("---------------------- ALUMNO SELECCIONADO ---------------------");
    let alumnoSeleccionado:Alumno = escuela.getAlumnos()[3];
    console.log(alumnoSeleccionado);
console.log("----------------------------------------------------------------");


console.log("--------------------- INTENTO MATRICULAR -----------------------");
                    escuela.matricularAlumno(alumnoSeleccionado);
console.log("----------------------------------------------------------------");


console.log("---------------------- EXPULSAR ALUMNO --------------------------");
                    escuela.expulsarAlumno(alumnoSeleccionado);
                    console.log(escuela.getAlumnos());
console.log("-----------------------------------------------------------------");


console.log("--------------------- 2do INTENTO MATRICULAR  ---------------------")
                    escuela.matricularAlumno(alumnoSeleccionado);
                    console.log("ALUMNOS REGISTRADOS:");
                    console.log(escuela.getAlumnos());
console.log("-----------------------------------------------------------------");


//DISTRIBUIR ALUMNOs
// Los alumnos se reparten de a uno para cada profesor (pueden quedar grupos disparejos dependiendo la cant Alumnos y Profesores)
//los profesores solo reciben arreglos de alumnos. por eso se crea un arreglo de 1 alumno (?
function distribuirAlumnos(profesores:Profesor[], alumnos:Alumno[]) {
    let posProfe:number = profesores.length -1; 

    for (let i:number = 0; i < alumnos.length; i++) {
        let arreglo_1alumno:Alumno[] = [ alumnos[i] ];

        profesores[posProfe].setAlumnos(arreglo_1alumno);
        posProfe = posProfe-1;

        if (posProfe < 0) {
            posProfe = profesores.length-1;
        }
    }
}


distribuirAlumnos(escuela.getProfesores(),escuela.getAlumnos());


console.log("*************** PROFESORES CON SU LISTA DE ALUMNOS  ****************");
console.log(escuela.getProfesores());


console.log("********************* PROFESOR SELECCIONADO ************************");
let profesorSeleccionado:Profesor = escuela.getProfesores()[0];
console.log(profesorSeleccionado);

console.log("********************* INTENTO CONTRATAR A PROFESOR ************************");
escuela.contratarProfesor(profesorSeleccionado);

console.log("********************* DESPEDIR AL PROFESOR ************************");
escuela.despedirProfesor(profesorSeleccionado);

console.log("************************* PROFESORES REGISTRADOS ***************************")
console.log(escuela.getProfesores());

console.log("********************* INTENTO NRO-2 CONTRATAR A PROFESOR ************************");
escuela.contratarProfesor(profesorSeleccionado);

console.log("************************* PROFESORES REGISTRADOS ***************************")
console.log(escuela.getProfesores());


console.log("************************* FIN DEL PROGRAMA!! ***************************")

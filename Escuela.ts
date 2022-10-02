import { Documento } from "./Documento";
import { Alumno } from "./Alumno";
import { Profesor } from "./Profesor";

export class Escuela {
    private nombre: string;
    private alumnos: Alumno[] = [];
    private profesores: Profesor[] = [];

    constructor(nombre: string, alumnos: Alumno[], profesores: Profesor[]) {
        this.nombre = nombre;
        this.setAlumnos(alumnos);
        this.setProfesores(profesores);
    }

    /* METODOS GETTERS Y SETTERS */
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }
    // if: por si se settea mediante el constructor. 
    // else: por si ya existen alumnos. Se los agregará uno por uno al final del arreglo
    public setAlumnos(alumnos: Alumno[]): void {
        if (this.alumnos == undefined) {
            this.alumnos = alumnos;
        } else {
            for (let i: number = 0; i < alumnos.length; i++) {
                this.alumnos.push(alumnos[i]);
            }
        }
    }

    public getProfesores(): Profesor[] {
        return this.profesores;
    }

    //METODO IDENTICO A setAlumnos() solo se cambió el nombre alumnos por profesores
    public setProfesores(profesores: Profesor[]): void {
        if (this.profesores == undefined) {
            this.profesores = profesores;
        } else {
            for (let i: number = 0; i < profesores.length; i++) {
                this.profesores.push(profesores[i]);
            }
        }
    }

    // No se permiten Documentos Duplicados (los Profesores se diferencian por su documento).
    public contratarProfesor(profesor: Profesor): void {
        let documentoIngresante: Documento = profesor.getDocumento();

        for (let i: number = 0; i < this.profesores.length; i++) {
            let documentoExistente: Documento = this.profesores[i].getDocumento();
            let mismoDocumento: boolean = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
            if (mismoDocumento) {
                console.log("El PROFESOR ha contratar ya es parte de la escuela.");
                return;
            }
        }

        this.profesores.push(profesor);
        console.log("PROFESOR CONTRATADO CON EXITO!");
    }

    //IDENTICO A contratarProfesor() pero con Alumnos
    public matricularAlumno(alumno: Alumno): void {
        let documentoIngresante: Documento = alumno.getDocumento();

        for (let i: number = 0; i < this.alumnos.length; i++) {
            let documentoExistente: Documento = this.alumnos[i].getDocumento();
            let mismoDocumento: boolean = (documentoExistente.getTipoDocumento() === documentoIngresante.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoIngresante.getNroDocumento());
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
    public expulsarAlumno(alumno: Alumno): void {
        let documentoExpulsado: Documento = alumno.getDocumento();
        let posExpulsado: number = -1;

        for (let i: number = 0; i < this.alumnos.length; i++) {
            let documentoExistente: Documento = this.alumnos[i].getDocumento();
            let documentoEncontrado: boolean = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());
            if (documentoEncontrado) {
                posExpulsado = i;
                console.log("SE ENCONTRO AL ALUMNO A EXPULSAR!");
                break; //finaliza el ciclo for de manera forzada al encontrar el alumno
            }
        }

        if (posExpulsado < 0) {
            console.log("EL ALUMNO A EXPULSAR NO SE ENCUENTRA EN EL LISTADO DE ALUMNOS");
        } else {
            console.log(this.alumnos.splice(posExpulsado, 1)); //parametro1 indica el indice en donde se posicionara (posExpulsado). parametro2 indica la cantidad de elementos que se eliminarán (1) a partir de esa posicion. (comienza a contar desde donde está, osea posExpulsado seria el unico elemento a eliminar)
            console.log("ALUMNO EXPULSADO CON EXITO!");
        }
    }

    //IDENTICO A  expulsarAlumnos() pero con profesores
    public despedirProfesor(profesor: Profesor): void {
        let documentoExpulsado: Documento = profesor.getDocumento();
        let posDespedido: number = -1;
    
        for (let i: number = 0; i < this.profesores.length; i++) {
            let documentoExistente: Documento = this.profesores[i].getDocumento();

            let documentoEncontrado: boolean = (documentoExistente.getTipoDocumento() === documentoExpulsado.getTipoDocumento()) && (documentoExistente.getNroDocumento() === documentoExpulsado.getNroDocumento());

            if (documentoEncontrado) {
                posDespedido = i;
                console.log("SE ENCONTRO AL PROFESOR A DESPEDIR!");
                break;
            }
        }

        if (posDespedido < 0) {
            console.log("EL PROFESOR A DESPEDIR NO SE ENCUENTRA EN EL LISTADO DE PROFESORES");
        } else {
            console.log(this.profesores.splice(posDespedido, 1));
            console.log("PROFESOR DESPEDIDO CON EXITO!")
        }
    }
}
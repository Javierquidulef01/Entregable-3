"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
class Profesor {
    constructor(nombre, apellido, documento, alumnos) {
        this.alumnos = [];
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        if (alumnos != undefined) {
            this.setAlumnos(alumnos);
        }
    }
    /* Metodos Getters y Setters */
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
    getAlumnos() {
        return this.alumnos;
    }
    setAlumnos(alumnos) {
        if (this.alumnos == undefined) {
            this.alumnos = alumnos;
        }
        else {
            // console.log(alumnos)
            for (let i = 0; i < alumnos.length; i++) {
                this.alumnos.push(alumnos[i]);
            }
        }
    }
}
exports.Profesor = Profesor;
/*--------------------------------------------------------------------------------------------------- */
/*
let a1:Alumno= new Alumno("user1","apellidoUser1",new Documento("DNI","12341231"),7);
let a2:Alumno= new Alumno("user2","apellidoUser2",new Documento("DNI","12341231"),3);
let a3:Alumno= new Alumno("user3","apellidoUser3",new Documento("DNI","12341231"),4);
let a4:Alumno= new Alumno("user4","apellidoUser4",new Documento("DNI","12341231"),9);
let a5:Alumno= new Alumno("user5","apellidoUser5",new Documento("DNI","12341231"),8);


console.log("********************alumnos******************")
let arregloA:Alumno[] = [a1,a2,a3,a4,a5];
console.log(arregloA)


console.log("********************profesor******************")
let profesor:Profesor = new Profesor("juan","lopez",new Documento("DNI","12341231"),arregloA);
console.log(profesor);



console.log("********** arreglo de 1 elemento (push?) se incorpora? **********************")
let a6:Alumno= new Alumno("user6","apellidoUser6",new Documento("DNI","12341231"),1);

arregloA = [a6];
profesor.setAlumnos(arregloA);

console.log(profesor);
*/ 

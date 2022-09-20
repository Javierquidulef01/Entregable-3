import { Documento } from "./Documento";
import { Alumno } from "./Alumno";

export class Profesor {
    private nombre:string;
    private apellido:string;
    private documento:Documento;
    private alumnos:Alumno[] = [];

    constructor(nombre:string, apellido:string, documento:Documento, alumnos?:Alumno[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        if (alumnos != undefined) {
            this.setAlumnos(alumnos);
        }
    }


    /* Metodos Getters y Setters */


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



    public getAlumnos():Alumno[] {
        return this.alumnos;
    }


    public setAlumnos(alumnos:Alumno[]):void {
        if (this.alumnos == undefined) {
            this.alumnos = alumnos;
        } else {
            // console.log(alumnos)
            for (let i:number = 0; i < alumnos.length; i++) {
                this.alumnos.push(alumnos[i]);

            }
        }
 
    }
}


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
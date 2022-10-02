export class Documento {
    private tipoDocumento: string; //DNI, LE, CI, PAS
    private nroDocumento: string;

    constructor(tipoDocumento: string, nroDocumento: string) {
        this.tipoDocumento = tipoDocumento;
        this.nroDocumento = nroDocumento;
    }

    public setTipoDocumento(tipoDocumento: string): void {
        this.tipoDocumento = tipoDocumento;
    }
    public getTipoDocumento(): string {
        return this.tipoDocumento;
    }

    public setNroDocumenot(nroDocumento: string): void {
        this.nroDocumento = nroDocumento;
    }
    public getNroDocumento(): string {
        return this.nroDocumento;
    }
}

/* --------------------------------------------------------------------------------- */

// let doc = new Documento("DNI","31912000");

// console.log(doc);
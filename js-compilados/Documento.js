"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documento = void 0;
class Documento {
    constructor(tipoDocumento, nroDocumento) {
        this.tipoDocumento = tipoDocumento;
        this.nroDocumento = nroDocumento;
    }
    setTipoDocumento(tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }
    getTipoDocumento() {
        return this.tipoDocumento;
    }
    setNroDocumenot(nroDocumento) {
        this.nroDocumento = nroDocumento;
    }
    getNroDocumento() {
        return this.nroDocumento;
    }
}
exports.Documento = Documento;
/* --------------------------------------------------------------------------------- */
// let doc = new Documento("DNI","31912000");
// console.log(doc);

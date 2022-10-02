"use strict";
exports.__esModule = true;
exports.Documento = void 0;
var Documento = /** @class */ (function () {
    function Documento(tipoDocumento, nroDocumento) {
        this.tipoDocumento = tipoDocumento;
        this.nroDocumento = nroDocumento;
    }
    Documento.prototype.setTipoDocumento = function (tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    };
    Documento.prototype.getTipoDocumento = function () {
        return this.tipoDocumento;
    };
    Documento.prototype.setNroDocumenot = function (nroDocumento) {
        this.nroDocumento = nroDocumento;
    };
    Documento.prototype.getNroDocumento = function () {
        return this.nroDocumento;
    };
    return Documento;
}());
exports.Documento = Documento;
/* --------------------------------------------------------------------------------- */
// let doc = new Documento("DNI","31912000");
// console.log(doc);

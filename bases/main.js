"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validation.validateDate = (fecha) => {
        return (isNaN(fecha.valueOf()))
            ? false : true;
    };
})(Validation || (Validation = {}));
console.log(Validation.validateText('Johan'));
//# sourceMappingURL=main.js.map
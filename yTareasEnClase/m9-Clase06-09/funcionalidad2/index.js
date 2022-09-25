"use strict";
exports.__esModule = true;
var date_fns_1 = require("date-fns");
(0, date_fns_1.format)(new Date(2014, 1, 11), 'yyyy-MM-dd');
var fechas = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
var fechasEnOrden = fechas.sort(date_fns_1.compareAsc);
console.log(fechasEnOrden);

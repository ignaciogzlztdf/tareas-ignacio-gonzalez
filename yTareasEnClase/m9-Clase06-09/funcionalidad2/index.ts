import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')

const fechas:Date[] = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
const fechasEnOrden:Date[] = fechas.sort(compareAsc);
console.log(fechasEnOrden);
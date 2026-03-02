import { getHeroByOwner } from './bases/08-imp-exp'
import { Owner } from './bases/data/heroes.data'

import './style.css'
import './bases/01-const-let'
import './bases/02-template-string'
import './bases/03-object-literal'
import './bases/04-arrays'
import './bases/05-funtions'
import './bases/06-obj-destructuring'
import './bases/06.1-Ejercicios'
import './bases/07-array-destructuring'
import './bases/07.1-tarea desestreucturación'
import './bases/08-imp-exp'
import './bases/09-promises'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`;

console.log(getHeroByOwner(Owner.DC))




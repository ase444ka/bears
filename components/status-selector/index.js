import BaseComponent from '../base-component.js';
import './dropdown.scss';
import initDropdown from './dropdown.js';


class StatusSelector extends BaseComponent {
  subElements = {};

  constructor(status, observer) {
    super();

    this.status = status

    this.observer = observer;


    this.render();
    initDropdown(this.element, (value) => {
      if (this.store.status === value) return
      this.store.dispatch('switch', value)

    })
  }

  get template() {

    return `
     <div class="dropdown dropdown_minimized" >
       <svg class="dropdown__arrow">
       <use href="./public/sprites.svg#arrow-down"></use>
       </svg>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_1" value="all"/>
         <label for="_1">Все</label>
       </div>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_2" value="accepted"/>
         <label for="_2">Принятые</label>
       </div>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_3" value="denied" />
         <label for="_3">Отклоненные</label>
       </div>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_4" value="reserved" />
         <label for="_4">В заповеднике</label>
       </div>
     </div>
    `;
  }


}

export default StatusSelector;

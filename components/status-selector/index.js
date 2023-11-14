import BaseComponent from '../base-component.js';
import connectToObserver from '../../core/observer/connect.js';
import connectToStore from '../../core/store/connect'
import './dropdown.scss';
import './dropdown.js'


class StatusSelector extends BaseComponent {
  subElements = {};

  constructor(status, observer) {
    super();

    this.status = status

    this.observer = observer;


    this.render();
    this.initEventListeners();
  }

  get template() {

    return `
     <div class="dropdown" >
       <svg class="dropdown__arrow">
       <use href="./public/sprites.svg#arrow-down"></use>
       </svg>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_1" value="Принятые"  checked/>
         <label for="_1">Принятые</label>
       </div>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_2" value="Отклоненные" />
         <label for="_2">Отклоненные</label>
       </div>
       <div class="dropdown__option">
         <input type="radio" name="t" id="_3" value="В заповеднике" />
         <label for="_3">В заповеднике</label>
       </div>
     </div>
    `;
  }

  initEventListeners() {
    const {accept, deny} = this.subElements;

    accept.addEventListener('pointerdown', async (event) => {
      if (accept.hasAttribute('disabled')) {
        console.log(response);
        return;
      }
      const {data} = await api.getBears()
      console.log(data)
      console.log('кнопка принять активна');
      this.acceptBear();
    });

    deny.addEventListener('pointerdown', (event) => {
      if (deny.hasAttribute('disabled')) {
        console.log('deny is disabled');
        return;
      }
      this.denyBear();
    });

    this.element.addEventListener('pointerdown', (event) => {
      if (event.target.classList.contains('button')) return
        this.showDescription()
    })
  }

  acceptBear() {
    this.dispatchEvent('accept', this.bear.id);
  }

  denyBear() {
    this.dispatchEvent('deny', this.bear.id);
  }

  showDescription() {
    console.log('this bear', this.bear)
    const modal = new Modal(this.bear)
    modal.show()
  }


  dispatchEvent(type = '', payload = {}) {
    this.observer.dispatchEvent({type, payload});
  }

  update(bear = {}) {
    this.bear = bear;
    this.element.innerHTML = this.template;
  }
}

export default connectToObserver(Card);

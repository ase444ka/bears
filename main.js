import './style.scss';
// import javascriptLogo from './javascript.svg';
// import viteLogo from '/vite.svg';
// import {setupCounter} from './counter.js';
import './ui-kit/button.scss';
// import './ui-kit/checkbox.scss';
// import './ui-kit/close.scss';
// import './ui-kit/card.scss';
// import './ui-kit/dropdown/dropdown.scss';
// import initDropdowns from './ui-kit/dropdown/dropdown.js';
// import './ui-kit/modal/modal.scss';
// import './ui-kit/modal/modal.js';
// import initModal from './ui-kit/modal/modal.js';

// const hide = (event) => {
//   alert('kjkj');
//   event.preventDefault;
// };

// document.querySelector('#app').innerHTML = /* jsx */ `
//   <div class="buttons-demo">
//     <button class="button button_yes">Принять</button>
//     <button class="button button_no">Отклонить</button>
//     <button class="button button_no button_border_white">Отклонить</button>
//   </div>
//   <div class="checkboxes-demo">
//     <label class="checkbox">
//       <input type="checkbox" class="checkbox__input" />
//       <div class="checkbox__state">
//         <div class="checkbox__control">
//           <svg class="checkbox__icon"><use href="./public/sprites.svg#check"></use></svg>
//         </div>
//         <div class="checkbox__label">Только из заповедника</div>
//       </div>
//     </label>
//     <label class="checkbox">
//       <input type="checkbox" class="checkbox__input" checked />
//       <div class="checkbox__state">
//         <div class="checkbox__control">
//           <svg class="checkbox__icon"><use href="./public/sprites.svg#check"></use></svg>
//         </div>
//         <div class="checkbox__label">Только из заповедника</div>
//       </div>
//     </label>
//   </div>
//   <div class="close-demo">
//     <button class="close">
//       <svg class="close__icon"><use href="./public/sprites.svg#cross"></use></svg>
//     </button>
//   </div>
//   <div class="cards-demo">
//   <div class="card">
//     <img class="card__image" alt="бурый медведь" src="./ui-kit/images/bear1.png">
//     <div class="card__reserved-label">В заповеднике</div>
//     <h5 class="card__title">Донна</h5>
//     <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
//     <div class="card__actions">
//       <button class="button button_yes">Принять</button>
//       <button class="button button_no">Отклонить</button>
//     </div>
//   </div>
//   <div class="card">
//     <img class="card__image" alt="бурый медведь" src="./ui-kit/images/bear1.png">
//     <div class="card__reserved-label">В заповеднике</div>
//     <h5 class="card__title">Донна</h5>
//     <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
//     <div class="card__actions">
//       <button class="button button_yes">Принять</button>
//       <button class="button button_no">Отклонить</button>
//     </div>
//   </div>
//   <div class="card card_reserved">
//     <img class="card__image" alt="бурый медведь" src="./ui-kit/images/bear1.png">
//     <div class="card__reserved-label">В заповеднике</div>
//     <h5 class="card__title">Донна</h5>
//     <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
//     <div class="card__actions">
//       <button class="button button_yes">Принять</button>
//       <button class="button button_no">Отклонить</button>
//     </div>
//   </div>
// </div>

// <input />

// <div class="dropdown" >
//   <svg class="dropdown__arrow">
//   <use href="./public/sprites.svg#arrow-down"></use>
//   </svg>
//   <div class="dropdown__option">
//     <input type="radio" name="t" id="_1" value="Принятые"  checked/>
//     <label for="_1">Принятые</label>
//   </div>
//   <div class="dropdown__option">
//     <input type="radio" name="t" id="_2" value="Отклоненные" />
//     <label for="_2">Отклоненные</label>
//   </div>
//   <div class="dropdown__option">
//     <input type="radio" name="t" id="_3" value="В заповеднике" />
//     <label for="_3">В заповеднике</label>
//   </div>
// </div>
// <br />
// <br />

// <div class="modal">
//   <div class="modal__window">
//     <div class="modal__wrapper">
//     <button class="close modal__close-button">
//           <svg class="close__icon"><use href="./public/sprites.svg#cross"></use></svg>
//     </button>
//     <div class="card modal__card">
//     <div class="card__reserved-label">В заповеднике</div>
//       <img class="card__image" alt="бурый медведь" src="./ui-kit/images/bear1.png">
//         <div class="card__content">
//       <h5 class="card__title">Донна</h5>
//       <p class="card__description"><span>Бурый медведь</span><span>Самец</span></p>
//       <p class="card__text">Некогда бурый медведь был обычен по всей Европе, включая Англию и Ирландию (Атласский медведь), а на востоке через Сибирь и Китай доходил до Японии. </p>
//       <p class="card__text">В Северную Америку он, вероятно, попал около 40 000 лет назад из Азии, через Берингов перешеек и широко расселился в западной части континента от Аляски и до севера Мексики.</p>
//       <div class="card__actions">
//         <button class="button button_yes">Принять</button>
//         <button class="button button_no">Отклонить</button>
//       </div>
//     </div>
//     </div>
//   </div>
//     </div>
//   </div>

// `;
// initDropdowns();
// initModal();

import BaseComponent from './components/base-component.js';
import CardsList from './components/cards-list';
import StatusSelector from './components/status-selector'
import ConnectToObserver from './core/observer/connect';



const bears = [
  {
    image: 'bear1',
    name: 'Варя',
    gender: 'самка',
    breed: 'бурый медведь',
    isReserved: true,
    status: 'none',
    text: 'lorem lorem',
  },
  {
    image: 'bear1',
    name: 'Миша',
    gender: 'самец',
    breed: 'белый медведь',
    isReserved: true,
    status: 'none',
    text: 'lorem lorem',
  },
  {
    image: 'bear1',
    name: 'Умка',
    gender: 'самка',
    breed: 'белый медведь',
    isReserved: false,
    status: 'none',
    text: 'lorem lorem',
  },
  {
    image: 'bear1',
    name: 'Джонни',
    gender: 'самец',
    breed: 'гризли',
    isReserved: false,
    status: 'none',
    text: 'lorem lorem',
  },
];

class App extends BaseComponent {
  subElements = {};

  constructor(observer) {

    super();

    this.observer = observer;
    this.initEventListeners();

    this.initStore();
    this.render()
  }

  async initStore() {
    this.store.dispatch('init');
  }

  render() {
    this.renderFooter()
    super.render();
    this.renderStatusSelector()
    this.renderCardList();
  }

  renderFooter() {
    document.querySelector('.footer__inner').innerHTML = `Все права защищены Happy Bears ${new Date().getFullYear()}©`
  }

  renderStatusSelector() {
    this.statusSelector = new StatusSelector()
    this.subElements.selector.append(this.statusSelector.element)
  }

  renderCardList() {
    this.cards = new CardsList();
    this.subElements.cards.append(this.cards.element);
  }



  get template() {
    return `<div>
      <div class="controls">
        <h2 class="controls__title">Поступившие заявки</h2>
        <label class="controls__checkbox"><input type="checkbox" id="reserved" />Только из заповедника</label>
        <div data-element="selector">
          <!--selector-->
        </div>
      </div>    
      <div data-element="cards">
        <!--cards-->
      </div>
    </div>`;
  }

  initEventListeners() {
    this.observer.subscribe('accept', (id) => {
      this.store.dispatch('accept', id);
    });
    this.observer.subscribe('deny', (id) => {
      this.store.dispatch('deny', id);
    });
    this.observer.subscribe('reset', () => {
      this.store.dispatch('reset');
    });
  }
}

const AppClass = ConnectToObserver(App);
const app = new AppClass();

document.querySelector('#app .container').append(app.element);

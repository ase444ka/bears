import BaseComponent from '../base-component.js';
import connectToObserver from '../../core/observer/connect.js';
import connectToStore from '../../core/store/connect.js';
import reducers from '../../reducers.js';

import './card.scss';

class Card extends BaseComponent {
  subElements = {};

  constructor(bear = {}, store, observer) {
    super();

    this.bear = bear;
    this.store = store;
    this.observer = observer;

    const {accepted, denied} = this.store.getState();

    this.acceptedBears = accepted.map((bear) => bear.id);
    this.deniedBears = denied.map((bear) => bear.id);

    this.render();
    this.initEventListeners();
  }

  get template() {
    const {image, name, gender, breed, isReserved, status} = this.bear;

    return `
      <div class="card ${isReserved ? 'card_reserved' : ''}">            
        <img class="card__image" alt="бурый медведь" src="./public/images/${image}.png">
        <div class="card__reserved-label">В заповеднике</div>
        <h5 class="card__title">${name}</h5>
        <p class="card__description"><span>${breed}</span><span>${gender}</span></p>
        <div class="card__actions">
          <button class="button button_yes" data-element="accept" ${
            status === 'accepted' ? 'disabled' : ''
          }>Принять</button>
          <button class="button button_no" data-element="deny" ${
            status === 'denied' ? 'disabled' : ''
          }>Отклонить</button>
        </div>
      </div>
    `;
  }

  initEventListeners() {
    const {accept, deny} = this.subElements;

    accept.addEventListener('pointerdown', (event) => {
      if (accept.hasAttribute('disabled')) {
        console.log('accept is disabled');
        return;
      }
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
  }

  acceptBear() {
    this.dispatchEvent('accept', {
      bear: this.bear,
    });
    this.store.dispatch(reducers.acceptApplication(this.bear));
  }

  denyBear() {
    this.dispatchEvent('deny', {
      bear: this.bear,
    });
    this.store.dispatch(reducers.denyApplication(this.bear));
  }


  dispatchEvent(type = '', payload = {}) {
    this.observer.dispatchEvent({type, payload});
  }

  update(bear = {}) {
    this.bear = bear;
    this.element.innerHTML = this.template;
  }
}

export default connectToStore(connectToObserver(Card));

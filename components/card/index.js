import BaseComponent from '../base-component.js';
import connectToObserver from '../../core/observer/connect.js';
import './card.scss';
import Modal from '../modal'


class Card extends BaseComponent {
  subElements = {};

  constructor(bear = {}, observer) {
    super();

    this.bear = bear;
    this.observer = observer;


    this.render();
    this.initEventListeners();
  }

  get template() {
    const {image, name, gender, breed, isReserved, status} = this.bear;

    return `
      <div class="card ${isReserved ? 'card_reserved' : ''}">            
        <img class="card__image" alt="бурый медведь" src="${image}">
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

    accept.addEventListener('pointerdown', async (event) => {
      if (accept.hasAttribute('disabled')) {
        return;
      }
      this.acceptBear();
    });

    deny.addEventListener('pointerdown', (event) => {
      if (deny.hasAttribute('disabled')) {
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

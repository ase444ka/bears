import BaseComponent from '../base-component';
import connectToObserver from '../../core/observer/connect'
import './modal.scss';
import '../ui/button.scss';

class Modal extends BaseComponent {
  constructor({image, name, gender, breed, isReserved, status, text, id}, observer) {
    super();

    this.observer = observer
    this.id = id;
    this.image = image;
    this.name = name;
    this.gender = gender;
    this.breed = breed;
    this.isReserved = isReserved;
    this.status = status;
    this.text = text;
    this.render();

    this.initEventListeners();
  }

  get template() {
    return `
    <div class="modal">
    <div class="modal__window">
      <div class="modal__wrapper">
        <button class="close modal__close-button" data-element="close">
              <svg class="close__icon"><use href="/bears/assets/sprites.svg#cross"></use></svg>
        </button>
        <div class="card modal__card ${
          this.isReserved ? 'card_reserved' : ''
        }"> 
          <div class="card__reserved-label">В заповеднике</div>
          <img class="card__image" alt="${this.name}" src="${this.image}">
            <div class="card__content">
          <h5 class="card__title">${this.name}</h5>
          <p class="card__description"><span>${this.breed}</span><span>${
      this.gender
    }</span></p>
          <p class="card__text">${this.text}</p>
          <div class="card__actions">
            <button class="button button_yes" data-element="accept"  ${
              this.status === 'accepted' ? 'disabled' : ''
            }>Принять</button>
            <button class="button button_no" data-element="deny"  ${
              this.status === 'denied' ? 'disabled' : ''
            } >Отклонить</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    `;
  }

  show() {
    document.body.append(this.element);
  }

  initEventListeners() {
    const {accept, deny, close} = this.subElements;

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

    close.addEventListener('pointerup', () => {
      this.destroy();
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.destroy();
      }
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.modal')) {
        return
      }
      if (!event.target.closest('.modal__card')) {
        this.destroy()
      }
    })
  }

  acceptBear() {
    this.dispatchEvent('accept', this.id);
    this.subElements.accept.setAttribute('disabled', true)
    this.subElements.deny.removeAttribute('disabled')
  }

  denyBear() {
    this.dispatchEvent('deny', this.id);
    this.subElements.deny.setAttribute('disabled', true)
    this.subElements.accept.removeAttribute('disabled')
  }


  dispatchEvent(type = '', payload = {}) {
    this.observer.dispatchEvent({type, payload});
  }

  remove() {
    if (this.element) {
      this.element.remove();
    }
  }

  destroy() {
    this.remove();
  }
}

export default connectToObserver(Modal)

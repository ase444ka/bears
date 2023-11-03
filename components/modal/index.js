import BaseComponent from '../base-component';
import './modal.scss';

// NOTE: Pattern. Abstract factory
export default class Modal extends BaseComponent {
  constructor({image, name, gender, breed, isReserved, status, text}) {
    super();
    this.image = image;
    this.name = name;
    this.gender = gender;
    this.breed = breed;
    this.isReserved = isReserved;
    this.status = status;
    this.text = text;
    this.render();

    this.subElements.close.addEventListener('pointerup', () => {
      this.destroy();
    });


    document.addEventListener('keyup', (event) => {
      if (event.key === 'Escape') {
        this.destroy();
      }
    });
  }

  get template() {
    return `
    <div class="modal">
    <div class="modal__window">
      <div class="modal__wrapper">
        <button class="close modal__close-button" data-element="close">
              <svg class="close__icon"><use href="./public/sprites.svg#cross"></use></svg>
        </button>
        <div class="card modal__card ${
          this.isReserved ? 'card_reserved' : ''
        }"> 
          <div class="card__reserved-label">В заповеднике</div>
          <img class="card__image" alt="${this.name}}" src="./public/images/${
      this.image
    }.png">
            <div class="card__content">
          <h5 class="card__title">${this.name}</h5>
          <p class="card__description"><span>${this.breed}</span><span>${
      this.gender
    }</span></p>
          <p class="card__text">${this.text}</p>
          <div class="card__actions">
            <button class="button button_yes">Принять</button>
            <button class="button button_no">Отклонить</button>
          </div>
        </div>
      </div>
    </div>
  </div>

    `;
  }

  show() {
    document.body.append(this.element)
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

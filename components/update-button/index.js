import './update-button.scss';
import BaseComponent from '../base-component';

class UpdateButton extends BaseComponent {
  constructor() {
    super();
    this.render();
    this.initEventListeners();
  }

  get template() {
    return `
            <button class="update-button" title="сбросить">
                <svg>
                    <use href="public/sprites.svg#update"></use>
                </svg>
            </button>
        `;
  }

  initEventListeners() {
    this.element.addEventListener('click', () => {
        this.element.classList.add('update-button_active')
        setTimeout(() => {
            this.element.classList.remove('update-button_active')
        }, 500)
      this.store.dispatch('reset')
    });
  }
}


export default UpdateButton
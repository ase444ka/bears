import BaseComponent from '../base-component.js';
import Card from '../card';

import './card-list.css';

export default class CardsList extends BaseComponent {
  constructor() {
    super();
    this.render();
    this.store.subscribe('bears', this);
    this.store.subscribe('status', this);
    this.store.subscribe('onlyReserved', this);
  }

  render() {
    super.render();
    this.renderCards();
  }

  get template() {
    return `
      <div class="card-list" data-element="body">
        <!-- Cards list -->
      </div>
    `;
  }

  renderCards() {
    const cards = this.getCardsList();

    this.element.innerHTML = '';
    this.element.append(...cards);
  }

  getCardsList() {
    const bears = this.store.getState().bears;
    let filteredBears = bears.filter((bear) =>
      this.store.getState('onlyReserved') ? bear.isReserved : true
    );
    switch (this.store.getState().status) {
      case 'all':
        break;
        case 'incoming':
        filteredBears = filteredBears.filter((bear) => !bear.status);
        break;
      case 'accepted':
        filteredBears = filteredBears.filter((bear) => bear.status === 'accepted');
        break;
      case 'denied':
        filteredBears = filteredBears.filter((bear) => bear.status === 'denied');
        break;
      case 'reserved':
        filteredBears = filteredBears.filter((bear) => bear.isReserved);
        break;
      default:
        console.log(this.store.getState());
    }
    return filteredBears.map((item) => {
      const card = new Card(item);

      return card.element;
    });
  }

  add(data) {
    this.data = [...this.data, ...data];

    const cards = this.getCardsList(data);

    this.element.append(...cards);
  }
}

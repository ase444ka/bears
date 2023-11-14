import BaseComponent from '../base-component.js';
import Card from '../card'

import './card-list.css';

export default class CardsList extends BaseComponent {
  constructor () {
    super();
    this.data = data;
    this.render();
    this.renderCards();
  }

  get template () {
    return `
      <div class="card-list" data-element="body">
        <!-- Cards list -->
      </div>
    `;
  }

  renderCards () {
    const cards = this.getCardsList(this.data);

    this.element.innerHTML = '';
    this.element.append(...cards);
  }


  getCardsList (data = []) {
    return data.map(item => {
      const card = new Card(item);

      return card.element;
    });
  }

  add (data) {
    this.data = [...this.data, ...data];

    const cards = this.getCardsList(data);

    this.element.append(...cards);
  }
}

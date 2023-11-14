/* import BaseComponent from './components/base-component.js';
import Store from './core/store/index.js';
import reducers from './reducers/index.js';

import CardsList from './components/cards-list';

const bears = [
  {
    image: 'bear1.png',
    name: 'Варя',
    gender: 'самка',
    breed: 'бурый медведь',
    isReserved: true,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Миша',
    gender: 'самец',
    breed: 'белый медведь',
    isReserved: true,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Умка',
    gender: 'самка',
    breed: 'белый медведь',
    isReserved: false,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Джонни',
    gender: 'самец',
    breed: 'гризли',
    isReserved: false,
    status: 'none',
  },
];

class App extends BaseComponent {
  subElements = {};

  constructor(store) {
    super();

    this.render();
    this.renderCardList();

    this.initEventListeners();
  }

  renderCardList() {
    this.cards = new CardsList(bears)
  }

  get template() {
    return `<div>
      <!--cards-->
    </div>`;
  }

  initEventListeners() {}
}

// TODO: move to "create-store" module
const storeKey = Symbol.for('storeKey');
const initStore = {
  accepted: [],
  denied: [],
};

const store = new Store(reducers, initStore);

globalThis[storeKey] = store;

const ConnectedApp = connectToStore(App);
const app = new ConnectedApp();

document.body.append(app.element);


import BaseComponent from './components/base-component.js';
import Store from './core/store/index.js';
import reducers from './reducers/index.js';

import CardsList from './components/cards-list';

const bears = [
  {
    image: 'bear1.png',
    name: 'Варя',
    gender: 'самка',
    breed: 'бурый медведь',
    isReserved: true,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Миша',
    gender: 'самец',
    breed: 'белый медведь',
    isReserved: true,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Умка',
    gender: 'самка',
    breed: 'белый медведь',
    isReserved: false,
    status: 'none',
  },
  {
    image: 'bear1.png',
    name: 'Джонни',
    gender: 'самец',
    breed: 'гризли',
    isReserved: false,
    status: 'none',
  },
];

class App extends BaseComponent {
  subElements = {};

  constructor(store) {
    super();

    this.render();
    this.renderCardList();

    this.initEventListeners();
  }

  renderCardList() {
    this.cards = new CardsList(bears)
  }

  get template() {
    return `<div>
      <!--cards-->
    </div>`;
  }

  initEventListeners() {}
}

// TODO: move to "create-store" module
const storeKey = Symbol.for('storeKey');
const initStore = {
  accepted: [],
  denied: [],
};

const store = new Store(reducers, initStore);

globalThis[storeKey] = store;

const app = new ConnectedApp();

document.body.append(app.element);
 */
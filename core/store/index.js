import cloneDeep from 'lodash.clonedeep';
import api from '../../api';

export default class Store {
  static #instance;

  state = [];

  listeners = [];

  get state() {
    return this.state;
  }

  set state(value) {
    this.state = value;
    this.activateListeners()
    
  }

  setState(value) {
    this.state = value
    this.activateListeners()
  }

  activateListeners() {
    for (const listener of this.listeners) {
      if (listener.render) {
        listener.render();
      } else {
      }
    }
  }

  // NOTE: Pattern: Singleton
  constructor(reducers = {}, initialState = []) {
    if (Store.#instance) {
      return Store.#instance;
    }

    this.state = [...initialState];

    Store.#instance = this;
  }

  async dispatch(action, payload) {
    let state, bear, response;
    if (payload) {
      state = cloneDeep(this.state);
      bear = state.find((bear) => bear.id === payload);
    }

    switch (action) {
      case 'accept':
        bear.status = 'accepted';
        break;
      case 'deny':
        bear.status = 'denied';
        break;
      case 'reset':
        state = this.state.map((bear) => ({...bear, status: null}));
        break;
      case 'init':
        break;
    }
    if (state?.length) {
      console.log('yyy');
      response = await api.postBears(state);
    } else {
      response = await api.getBears();
    }
    this.setState(response.data);
  }

  subscribe(listener) {
    if (!this.listeners.includes(listener)) {
      this.listeners.push(listener);
    }

    return () => {
      return this.listeners[eventName].delete(listener);
    };
  }
}

import actions from './actions';

export default class Store {
  static #instance;

  actions = actions;

  state = {
    bears: [],
    status: 'all',
  };

  set state(value) {
    console.error('oops', value);
    throw new Error('you can not verify state outside');
  }

  listeners = {};

  getState(slice) {
    return this.state[slice] || this.state;
  }

  setState(slice, value) {
    this.state[slice] = value;
    this.activateListeners(slice);
  }

  activateListeners(slice) {
    if (!this.listeners[slice]) {
      return
    }
    for (const [listener] of this.listeners[slice].entries()) {
      listener.render();
    }
  }

  // NOTE: Pattern: Singleton
  constructor() {
    if (Store.#instance) {
      return Store.#instance;
    }

    Store.#instance = this;
  }

  async dispatch(action, payload) {
    console.log('action name', action);
    
    const result = await this.actions[action](this.state, payload);
    console.log(result)
    const {slice, data} = result
    if (!slice) {
      return
    }
    this.setState(slice, data);
  }

  subscribe(slice, listener) {
    if (this.listeners[slice]) {
      this.listeners[slice].set(listener, null);
    } else {
      this.listeners[slice] = new Map([[listener, null]]);
    }

    return () => {
      return this.listeners[slice].delete(listener);
    };
  }
}

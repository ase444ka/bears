import Store from './index'
// NOTE: Pattern Decorator
const connectToStore = Component => class extends Component {
  static name = `connected to store ${Component.name}`;

  constructor(...props) {
    const store = new Store() 

    props.push(store);

    super(...props);
  }

  destroy () {
    if (this.subscriptions?.length) {
      for (const unsubscribe of this.subscriptions) {
        unsubscribe();
      }
    }

    if (super.destroy) {
      super.destroy();
    }
  }
};

export default connectToStore;

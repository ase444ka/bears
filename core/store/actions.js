import cloneDeep from 'lodash.clonedeep';
import api from '../../api';

async function postBears(body) {
  try {
    const data = await api.postBears(body);
    return data;
  } catch (e) {
    console.error('could not post bears ', e.message || '');
  }
}

async function getBears() {
    try {
      const data = await api.getBears();
      return data;
    } catch (e) {
      console.error('could not get bears ', e.message || '');
    }
  }

export default {
  async accept(state, payload) {
    const bears = cloneDeep(state.bears);
    const bear = bears.find((bear) => bear.id === payload);
    bear.status = 'accepted';
    const data = await postBears(bears)
    return {slice: 'bears', data}
  },

  async deny(state, payload) {
    const bears = cloneDeep(state.bears);
    const bear = bears.find((bear) => bear.id === payload);
    bear.status = 'denied';
    const data = await postBears(bears)
    return {slice: 'bears', data}
  },

  async reset(state) {
    const bears = cloneDeep(state.bears);
    const newBears = bears.map(bear => ({...bear, status: null}))
    const data = await postBears(newBears)
    return {slice: 'bears', data}
  },

  async init() {
    const data = await getBears()
    return {slice: 'bears', data}
  },

  switch(state, payload) {
    if (!['all', 'accepted', 'denied', 'reserved'].includes(payload)) {
        throw new Error('not allowed value - ', payload)
    }
    return {slice: 'status', data: payload}
  },

  setReverved(state, payload) {
    return {slice: 'onlyReserved', data: payload}
  }

  // let state, bear, response;
  // if (payload) {
  //   state = cloneDeep(this.state);
  //   bear = state.find((bear) => bear.id === payload);
  // }

  // switch (action) {
  //   case 'accept':
  //     bear.status = 'accepted';
  //     break;
  //   case 'deny':
  //     bear.status = 'denied';
  //     break;
  //   case 'reset':
  //     state = this.state.map((bear) => ({...bear, status: null}));
  //     break;
  //   case 'init':
  //     break;
  // }
  // if (state?.length) {
  //   console.log('yyy');
  //   response = await api.postBears(state);
  // } else {
  //   response = await api.getBears();
  // }
};

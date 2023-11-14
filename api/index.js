import axios from 'axios';

export default {
  async getBears() {
    const response = await axios.get(
      'https://bears-119ec-default-rtdb.firebaseio.com/bears.json'
    );
    return response.data;
  },
  async postBears(body) {
    const response = await axios.put(
      'https://bears-119ec-default-rtdb.firebaseio.com/bears.json',
      body
    );
    return response.data;
  },
};

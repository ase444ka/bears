import axios from 'axios';

export default {
  async getBears() {
    try {
        const response = await axios.get('https://bears-119ec-default-rtdb.firebaseio.com/bears.json')
        return response
    } catch (err) {
        alert('un error occured')
    } finally {
    }
  },
  async postBears(body) {
    try {
        const response = await axios.put('https://bears-119ec-default-rtdb.firebaseio.com/bears.json', body)
        return response
    } catch (err) {
        alert(err.message)
    } finally {
    }
  }
};

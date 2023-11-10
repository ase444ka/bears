import axios from 'axios';

export default {
  async getBears() {
    try {
        const response = await axios.get('https://bears-119ec-default-rtdb.firebaseio.com/bears.json')
        return response
    } catch (err) {
        alert('un error occured')
    } finally {
        console.log('request is finished')
    }
  }
};

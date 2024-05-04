import axios from 'axios';

export class PhotoApi {
  constructor () {
    this.q = '';
    this.page = 1;
    this.type = 'photo';
    this.orientation = 'horizontal';
    this.safesearch = 'true';
  }
  async getPhotos () {
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const config = {
      method: 'get',
      params: {
        key: '43655713-298c2d5fc75c194159c8fe276',
        q: this.q,
        image_type: this.type,
        orientation: this.orientation,
        safesearch: this.safesearch,
        per_page: 40,
        page: this.page,
      },
    };
    try {
      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

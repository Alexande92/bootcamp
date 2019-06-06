import { HTTP } from 'meteor/http';

class FanArtService {
  constructor () {
    this.apiKey = '037a5eb582f2d138b44ac24f3c6a7341';
    this.clientKey = '2bda3e2dd4d932a1b7de9d961392cd95';
    this.apiBase = 'http://webservice.fanart.tv/v3';
  }

  getCredentialsString () {
    return `?api_key=${this.apiKey}&client_key=${this.clientKey}`;
  }

  getResource (url) {
    try {
      return HTTP.call('GET', url);
    } catch (err) {
      console.log(`Couldn't fetch ${url} receive ${err}`);
      return {
        data: null,
      };
    }
  }

  getShowPoster (id) {
    return this.getResource(`${this.apiBase}/tv/${id}/${this.getCredentialsString()}`);
  }
}

export default FanArtService;

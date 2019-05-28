import { HTTP } from 'meteor/http';

class TraktApiService {
  constructor () {
    this.apiKey = '8fb3145a52babd068a1399f453cc15fd5c1c450140e893d3da0b1dce0f59418d';
    this.apiVersion = 2;
    this.apiBase = 'https://api.trakt.tv';
  }

  getHeaders () {
    return {
      'Content-Type': 'application/json',
      'trakt-api-version': this.apiVersion,
      'trakt-api-key': this.apiKey,
    };
  }

  getResource (url) {
    try {
      return HTTP.call('GET', url, {
        headers: this.getHeaders(),
      });
    } catch (err) {
      throw new Error(`Couldn't fetch ${url} receive ${err}`);
    }
  }

  getTrendingShows (page) {
    return this.getResource(`${this.apiBase}/shows/trending/?page=${page}&limit=20`);
  }
}

export default TraktApiService;

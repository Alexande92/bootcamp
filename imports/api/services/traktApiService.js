class TraktApiService {
  constructor () {
    this.apiKey = '8fb3145a52babd068a1399f453cc15fd5c1c450140e893d3da0b1dce0f59418d';
    this.apiVersion = 2;
    this.apiBase = 'https://api.trakt.tv';
  }

  getHeaders () {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('trakt-api-version', this.apiVersion);
    myHeaders.append('trakt-api-key', this.apiKey);

    return {
      headers: myHeaders,
    };
  }

  async getResource (url) {
    const res = await fetch(url, this.getHeaders());
    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url} receive ${res.status}`);
    }

    return res.json();
  }

  getTrendingShows (page) {
    return this.getResource(`${this.apiBase}/shows/trending/?page=${page}&limit=20`);
  }
}

export default TraktApiService;

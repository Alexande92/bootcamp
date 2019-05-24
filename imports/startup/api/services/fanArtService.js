class FanArtService {
  constructor () {
    this.apiKey = '037a5eb582f2d138b44ac24f3c6a7341';
    this.clientKey = '2bda3e2dd4d932a1b7de9d961392cd95';
    this.apiBase = 'http://webservice.fanart.tv/v3';
  }

  getCredentialsString () {
    return `?api_key=${this.apiKey}&client_key=${this.clientKey}`;
  }

  async getResource (url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Couldn't fetch ${url} receive ${res.status}`);
    }
    return res.json();
  }

  getShowPoster (id) {
    return this.getResource(`${this.apiBase}/tv/${id}/${this.getCredentialsString()}`);
  }
}

export default FanArtService;

import TraktApi from './services/traktApiService';
import FanartApi from './services/fanArtService';

class ShowService {
  constructor () {
    this.service = new TraktApi();
    this.posterService = new FanartApi();
    this.currentPage = 1;
    this.shows = [];
  }

  getShows () {
    const data = this.service.getTrendingShows(this.currentPage);
    this.shows = this.shows.concat(JSON.parse(data.content));

    if (data.length !== 0) {
      this.currentPage += 1;
      this.getShows();
    }

    this.getPosters();
    return this;
  }

  getPosters () {
    const data = this.shows;

    data.forEach((value, index) => {
      const showId = value.show.ids.tvdb;
      const posterImg = this.posterService.getShowPoster(showId).data;

      this.shows[index].poster = posterImg.tvposter ? posterImg.tvposter[0].url
        : posterImg.clearart[0].url;
    });
    return this;
  }
}

export default ShowService;

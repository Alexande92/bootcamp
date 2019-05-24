import TraktApi from './services/traktApiService';
import FanartApi from './services/fanArtService';

class ShowService {
  constructor () {
    this.service = new TraktApi();
    this.posterService = new FanartApi();
    this.currentPage = 1;
    this.shows = [];
    this.updateRate = 86400000;
  }

  getShows () {
    this.service.getTrendingShows(this.currentPage)
      .then((data) => {
        this.shows = this.shows.concat(data);
        if (data.length !== 0) {
          this.currentPage += 1;
          this.getShows();
        }
        this.getPosters();
        // console.log(this.shows);
      });
    return this;
  }

  getPosters () {
    this.shows.forEach((value, index) => {
      const showId = value.show.ids.tvdb;
      this.posterService.getShowPoster(showId)
        .then((data) => {
          this.shows[index].poster = data.tvposter[0].url;
        });
    });
    return this;
  }
}

export default ShowService;

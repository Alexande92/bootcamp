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

    if (JSON.parse(data.content).length !== 0) {
      this.currentPage += 1;
      this.getShows();
    }
    // console.log('Start poster parsing');
    // this.getPosters();

    console.log(this.shows);
    return this;
  }

  getPosters (shows) {
    shows.forEach((value, index) => {
      const showId = value.tvdb;
      const posterImg = this.posterService.getShowPoster(showId).data;

      if (value.tvdb === 296669) {
        console.log(posterImg);
      }

      if (!posterImg || (
        !posterImg.tvposter
        && !posterImg.clearart
        && !posterImg.showbackground
        && !posterImg.hdtvlogo)
      ) {
        shows[index].poster = null;
      } else if (posterImg.tvposter) {
        shows[index].poster = posterImg.tvposter[0].url;
      } else if (posterImg.hdtvlogo) {
        shows[index].poster = posterImg.hdtvlogo[0].url;
      } else if (posterImg.clearart) {
        shows[index].poster = posterImg.clearart[0].url;
      } else if (posterImg.showbackground) {
        shows[index].poster = posterImg.showbackground[0].url;
      }
    });

    return shows;
  }
}

export default ShowService;

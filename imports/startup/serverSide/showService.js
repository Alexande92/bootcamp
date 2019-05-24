import TraktApi from './services/traktApiService';
import FanartApi from './services/fanArtService';

class ShowService {
  constructor () {
    this.service = new TraktApi();
    this.posterService = new FanartApi();
    this.currentPage = 0;
    this.shows = [];
    this.isFinished = false;
  }

  getData () {
    while (!this.isFinished) {
      this.service.getTrendingShows(this.currentPage)
        .then((data) => {
          // console.log(currentPage);
          if (!data.length) {
            this.isFinished = true;
          } else {
            this.shows = this.shows.concat(data);
            console.log(this.shows);
          }
        });

      this.currentPage += 1;
    }
    return this;
  }

  // updatePosters () {
  //
  //   this.shows.forEach((value, index) => {
  //
  //   });
  //   this.posterService.getShowPoster(121361)
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }
}

export default ShowService;

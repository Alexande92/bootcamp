import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import ShowHandler, { Shows } from '../api/db/shows';
import ShowService from '../api/showService';

if (Meteor.isServer) {
  describe('Server side methods', () => {
    const showHandler = new ShowHandler();


    const showOne = {
      show: {
        title: 'Disney',
        year: 2019,
        ids: { tvdb: 123 },
      },
      watchers: '100',
    };

    const showTwo = {
      title: 'DisneyPoster',
      tvdb: 80379,
    };


    describe('Tests for show collection', () => {
      beforeEach(() => {
        Shows.remove({});
        Shows.insert(showOne.show);
      });

      it('shows successfully deleted', () => {
        showHandler.truncateData();
        const res = Shows.find()
          .count();
        expect(res)
          .toBe(0);
      });

      it('shows successfully added', () => {
        showHandler.truncateData()
          .saveShows([showOne]);
        const res = Shows.find({ title: showOne.show.title })
          .fetch();

        expect(res[0].title)
          .toBe('Disney');
        expect(res[0].year)
          .toBe(2019);
      });
    });

    describe('TraktAPI tests', () => {
      it('shouldn\'t have errors in the response', () => {
        const service = new ShowService();
        const res = JSON.parse(service.service.getTrendingShows(1).content);

        expect(res.length)
          .toBeGreaterThan(0);
      });

      it('should get API data', () => {
        const service = new ShowService();
        const res = service.getShows(false);
        expect(res.shows[0])
          .toHaveProperty(['watchers']);
        expect(res.shows[0])
          .toHaveProperty(['show']);
      });

      it('should get error in response', () => {
        const service = new ShowService();
        service.service.apiKey = 'test';
        const res = service.service.getTrendingShows(1);

        expect(res.message)
          .toMatch(/Couldn't fetch/);
      });
    });

    describe('FanArt API tests', () => {
      it('shouldn\'t have errors in the response', () => {
        const service = new ShowService();
        const res = service.posterService.getShowPoster(showTwo.tvdb);
        expect(res.statusCode)
          .toBe(200);
      });

      it('should get API data', () => {
        const service = new ShowService();
        const res = service.getPosters([showTwo]);

        expect(res[0].poster)
          .toMatch('https://assets.fanart.tv/fanart/tv/80379/tvposter/the-big-bang-theory-5214251a5b671.jpg');
      });
      //
      it('should get error in response', () => {
        const service = new ShowService();
        const res = service.posterService.getShowPoster(10);

        expect(res.message)
          .toMatch(/Couldn't fetch/);
      });
    });
  });
}

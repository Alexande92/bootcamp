import expect, { createSpy, spyOn, isSpy } from 'expect'
import ShowHandler, { Shows } from '../api/db/shows';
import {Meteor} from "meteor/meteor";

describe('FF Bootcamp project', () => {
  if (Meteor.isClient) {
    it('client is not server', () => {
      expect(Meteor.isServer).toEqual(false);
    });
  }

  if (Meteor.isServer) {
    it('package.json has correct name', async () => {
      const { name } = await import("../../package.json");
      expect(name).toBe('bootcamp-project');
    });

    it('server is not client', () => {
      expect(Meteor.isClient).toEqual(false);
    });
  }
});

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

    beforeEach(() => {
      Shows.remove({});
      Shows.insert(showOne.show);
    });


    it('shows successfully deleted', () => {
      showHandler.truncateData();
      const res = Shows.find().count();
      // console.log(res);
      expect(res).toBe(0);
    });

    it('shows successfully added', () => {
      showHandler.truncateData().saveShows([showOne]);
      const res = Shows.find({title: showOne.show.title}).fetch();
      console.log(res);

      expect(res[0].title).toBe('Disney');
      expect(res[0].year).toBe(2019);
    });
  });
}

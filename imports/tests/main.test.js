import expect from 'expect'
import { Meteor } from "meteor/meteor";
import './server';

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



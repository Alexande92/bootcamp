import expect  from 'expect'
import { Meteor } from "meteor/meteor";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('FF Bootcamp project', () => {
  if (Meteor.isClient) {
    it('client is not server', () => {
      expect(Meteor.isServer).toEqual(false);
    });
    import './client';
  }

  if (Meteor.isServer) {
    it('package.json has correct name', async () => {
      const { name } = await import("../../package.json");
      expect(name).toBe('bootcamp-project');
    });

    it('server is not client', () => {
      expect(Meteor.isClient).toEqual(false);
    });
    import './server';
  }
});



import expect, { createSpy, spyOn, isSpy } from 'expect'

// const assert = require('chai').assert;
// console.log(Chai);

describe('FF Bootcamp project', () => {
  it("package.json has correct name", async function () {
    const { name } = await import("../package.json");
    expect(name).toBe('bootcamp-project');
    // assert.strictEqual(name, "bootcamp-project");
  });

  if (Meteor.isClient) {
    it('client is not server', () => {
      expect(Meteor.isServer).toEqual(false);
      // assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it('server is not client', () => {
      expect(Meteor.isClient).toEqual(false);
      // assert.strictEqual(Meteor.isClient, false);
    });
  }
});

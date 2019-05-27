import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Shows = new Mongo.Collection('shows');

export default class ShowHandler {
  constructor () {
    this.shows = Shows;
    this.updateRate = 86400000;
  }

  truncateData () {
    this.shows.remove({});
    return this;
  }

  publish () {
    if (Meteor.isServer) {
      Meteor.publish('shows',
        () => this.shows.find());
    }
  }

  saveShows (shows) {
    shows.forEach((value) => {
      const { show } = value;
      this.shows.insert({
        title: show.title,
        watchers: value.watchers,
        year: show.year,
        poster: value.poster,
      });
    });

    return this;
  }
}

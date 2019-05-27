import { Meteor } from 'meteor/meteor';

import ShowHandler from '../imports/api/db/shows';
import ShowService from '../imports/api/showService';

Meteor.startup(() => {
  const showHandler = new ShowHandler();

  showHandler.publish();

  Meteor.setInterval(() => {
    const service = new ShowService();
    service.getShows();

    showHandler.truncateData()
      .saveShows(service.shows);
  }, showHandler.updateRate);
});

import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

import ShowHandler, { Shows } from '../imports/api/db/shows';
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

  Meteor.setInterval(() => {
    const now = new Date(Date.now());
    const compareTime = Date.parse(`${now.getFullYear()} ${now.getMonth() + 1} ${now.getDate()}`);
    const service = new ShowService();

    let shows = Shows.find({
      updatedDate: { $lt: compareTime },
    }, {
      limit: 20,
    }).fetch();


    shows = service.getPosters(shows);

    shows.forEach((value) => {
      Shows.update(
        { _id: value._id },
        {
          $set: {
            poster: value.poster ? value.poster.replace(/\/fanart\//i, '/preview/') : null,
            updatedDate: Date.now(),
          },
        }
      );
    });
  }, 300000);


  // setInterval(() => {
  //   HTTP.call('GET', 'http://calm-everglades-45949.herokuapp.com');
  // }, 300000);
});

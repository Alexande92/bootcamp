import React from 'react';
import PropTypes from 'prop-types';

const App = ({ loading, showList, test }) => (
  <div>
    <h1>
      TV App is going to be here,
      {test}
    </h1>
    <div>{loading}</div>
    {
      showList.map((show) => (
        <li key={show._id}>
          {show.title}
        </li>
      ))
    }
  </div>
);

App.displayName = 'App';
App.propTypes = {
  test: PropTypes.string,
  loading: PropTypes.bool,
  showList: PropTypes.array,
};

export default App;

import React from 'react';
import {BrowserRouter, Route, useHistory} from 'react-router-dom';
import features from './features';

const AppSwitch = () => {
  let history = useHistory();
  return (
    <BrowserRouter>
      {features.map(feature => (
        <Route
          history={history}
          key={feature.constants.NAME}
          path={`${feature.constants.ROOT}`}
          component={feature.route}
        />
      ))}
    </BrowserRouter>
  );
};

export default AppSwitch;

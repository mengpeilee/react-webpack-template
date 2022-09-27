import React from 'react';
import {Provider} from 'react-redux';
import Route from './route';
import store from './store';

const APP = () => {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
};

export default APP;

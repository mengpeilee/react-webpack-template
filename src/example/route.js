import React from 'react';
import {Route, useHistory, Switch} from 'react-router-dom';
import {Global, css} from '@emotion/core';
import {ROUTER_EXAMPLE_PAGE, ROUTER_EXAMPLE_USER} from './constants';
import {Main, User} from './containers';
import {ShareStyle} from '../util';
const {Fonts} = ShareStyle;
const AddDeviceswitch = () => {
  let history = useHistory();
  return (
    <>
      <Global
        styles={css`
          ${Fonts};
          body {
            background: #f2f2f7;
            margin: 0;
          }
        `}
      />
      <Switch>
        <Route
          exact
          history={history}
          path={ROUTER_EXAMPLE_PAGE}
          component={Main}
        />
        <Route history={history} path={ROUTER_EXAMPLE_USER} component={User} />
      </Switch>
    </>
  );
};

export default AddDeviceswitch;

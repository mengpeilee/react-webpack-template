import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {i18n, EN_LANG, TW_LANG} from './i18n';
import APP from './app';

i18n.changeLanguage(LANG_SELECTOR === 'tw' ? TW_LANG : EN_LANG, (err, t) => {
  //if (err) return console.log('something went wrong loading', err);
  t('key'); // -> same as i18next.t
});

ReactDOM.render(
  <React.StrictMode>
    <APP />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

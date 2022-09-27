import {combineReducers} from 'redux';
import features from './features';

const reducers = {};
features.forEach(feature => {
  reducers[feature.constants.NAME] = feature.reducer;
});

export default combineReducers(reducers);

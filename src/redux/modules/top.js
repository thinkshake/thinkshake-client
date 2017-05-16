// @flow

import Top from '../models/Top'
import { createAction } from 'redux-actions';

// action
const ADD_MYTOPIC   = 'top/ADD_MYTOPIC';

// action creator
export const topAction = {
  addMyTopic: createAction(ADD_MYTOPIC),
}

// reducer
export function topReducer(state: Top = new Top(), action: Object) {
  switch (action.type) {
    //TODO：とりあえず書いてみただけ。要検討。
    // case ADD_MYTOPIC:
    //   return state.set('myTopics', action.payload);
    default:
      return state;
  }
}

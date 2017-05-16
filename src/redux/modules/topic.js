// @flow

import Topic from '../models/Topic'
import { createAction } from 'redux-actions';

// action
const ADD_NEWCOMMENT = 'topic/ADD_NEWCOMMENT';

// action creator
export const topicAction = {
  addNewComment: createAction(ADD_NEWCOMMENT),
}

// reducer
export function topicReducer(state: Topic = new Topic(), action: Object) {
  switch (action.type) {
    //TODO：とりあえず書いてみただけ。要検討。
    // case ADD_NEWCOMMENT:
    //   return state.map.set(action.payload.topicName, action.payload.newTopic);
    default:
      return state;
  }
}

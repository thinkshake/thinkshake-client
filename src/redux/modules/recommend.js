// @flow

import Recommend from '../models/Recommend'
import { createAction } from 'redux-actions';

// action
const ADD_NEWPROJECT = 'recommend/ADD_NEWPROJECT';

// action creator
export const recommendAction = {
  addNewProject: createAction(ADD_NEWPROJECT),
}

// reducer
export function recommendReducer(state: Recommend = new Recommend(), action: Object) {
  switch (action.type) {
    //TODO：とりあえず書いてみただけ。要検討。
    // case ADD_NEWPROJECT:
    //   return state.list.push(action.payload);
    default:
      return state;
  }
}

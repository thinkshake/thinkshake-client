// @flow

import { List } from 'immutable';
// import Topic from '../../domains/Topic'

// Action名の定義
const ADD_COMMENT = 'topic/ADD_COMMENT';

// Action Creators
function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  };
}
export const actions = { addComment };

/* Reducersの実装 */
const init = List([]);
export function topicReducer(state = init, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state.push(action.comment);
    default:
      return state;
  }
}

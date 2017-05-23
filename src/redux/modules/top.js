// @flow

import { List } from 'immutable';
// import Top from '../../domains/Top'

// Action名の定義
// const SAMPLE_ACTION = 'top/SAMPLE_ACTION';

// Action Creators
// function sampleAction(payload) {
//   return {
//     type: SAMPLE_ACTION,
//     payload,
//   };
// }
// export const actions = { sampleAction };

/* Reducersの実装 */
const init = List([]);
export function topReducer(state = init, action) {
  switch (action.type) {
    // case SAMPLE_ACTION:
    //   return state.push(action.payload);
    default:
      return state;
  }
}

// @flow

// import { Record } from 'immutable';
import Navigation from '../../domains/Navigation'

// Action名の定義
const LOAD_TOP = 'top/LOAD_TOP';

// Action Creators
function loadTop(userId: string) {
  const projects: Object[] = Navigation.loadTop(userId);
  return {
    type: LOAD_TOP,
    projects,
  };
}
export const actions = { loadTop };

/* Reducersの実装 */
const init = {
  projects: [
    {
      id: 'init',
      title: 'init',
      topic: 'init',
      description: 'init',
      image: 'images/sample.png',
    },
  ],
};
// TODO: immutable.jsを使用する
// const init = Record({
//   projects: [
//     {
//       id: 'init',
//       title: 'init',
//       topic: 'init',
//       description: 'init',
//       image: 'images/sample.png',
//     },
//   ],
// });

export function topReducer(state = init, action) {
  switch (action.type) {
    case LOAD_TOP:
      // return state.set('projects', action.projects);
      return Object.assign({}, state, {
                  projects: action.projects,
              });

    default:
      return state;
  }
}

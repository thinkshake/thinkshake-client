/* Actionsの実装 */

// Action名の定義
const ADD_COMMENT = 'ADD_COMMENT';

// Action Creators
function addComment(comment) {
  // Action
  return {
    type: ADD_COMMENT,
    comment,
  };
}
export const actions = { addComment };

/* Reducersの実装 */

// TODO: state = []
export function appReducer(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return Object.assign({}, state, {
        comment: action.comment,
      });
    default:
      return state;
  }
}

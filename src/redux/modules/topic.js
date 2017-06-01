// @flow

// import { Record } from 'immutable';
import Navigation from '../../domains/Navigation';
import Collaboration from '../../domains/Collaboration';


// Action名の定義
const LOAD_COMMENTS = 'topic/LOAD_COMMENTS';
const ADD_COMMENT = 'topic/ADD_COMMENT';

// Action Creators
function loadComments(topicId: string) {
  const comments: Object[] = Navigation.loadComments(topicId);
  return {
    type: LOAD_COMMENTS,
    comments,
  };
}
function addComment(comment: string) {
  const newComment: Object = Collaboration.addComment(comment);
  return {
    type: ADD_COMMENT,
    newComment,
  };
}
export const actions = { loadComments, addComment };

/* Reducersの実装 */
// const init = Record([]);
const init = {
  comments: [
    {
      type: 'comment',
      id: 'init',
      fullName: 'init',
      userName: 'init',
      comment: 'init',
      image: 'images/sampleUser.png',
      hasChild: false,
    },
  ],
};
export function topicReducer(state = init, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return Object.assign({}, state, {
                  comments: action.comments,
              });

    case ADD_COMMENT:
      const newComments = state.comments.concat(action.newComment);
      return Object.assign({}, state, {
                  comments: newComments,
              });

    default:
      return state;
  }
}

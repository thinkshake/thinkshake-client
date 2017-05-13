/* @flow */

// import { createAction } from 'redux-actions';
// import { hashHistory } from 'react-router';
// // import { browserHistory, hashHistory } from 'react-router';
//
// export const utilAction = {
//   // locateはページ遷移を持つので,createActionを使わない
//   locate(path) {
//     hashHistory.push(path);
//     return {
//       type: 'locate',
//       payload: path,
//     };
//   },
//   changeTab: createAction('CHANGE_tab'),
//   setTopicId: createAction('SET_topicId'),
//   startSession: createAction('START_session'),
// };
// export const questionAction = {
//   setQuestion: createAction('SET_question'),
// };
// export const answerAction = {
//   setAnswerList: createAction('SET_answerList'),
//   setAnswerReader: createAction('SET_answerReader'),
//   setUpdateFlag: createAction('SET_updateFlag'),
// };
// export const talkAction = {
//   setComment: createAction('SET_comment'),
// };
// export const topicAction = {
//   setTopic: createAction('SET_topic'),
// };
// export const authAction = {
//   fetchLoginState: createAction('FETCH_loginState'),
//   failFetchingLoginState: createAction('FAIL_fetchingLoginState'),
//   fetchUser: createAction('FETCH_user'),
//   failFetchingUser: createAction('FAIL_fetchingUser'),
//   login: createAction('LOGIN'),
//   clickLogout: createAction('CLICK_logout'),
//   logout: createAction('LOGOUT'),
// };
// export const loadAction = {
//   loadTopic: createAction('LOAD_topic'),
// };


export function* rootSaga(): Generator<*, *, *> {
}


const initialState = {
  path: '/',
  session: false,
  title: 'Feed',
  tabValue: 'question',
  topicId: '',
};

type LoginState = {
  path: string,
  session: boolean,
  title: string,
  tabValue: string,
  topicId: string
};

type LoginAction = {
  type: string,
  payload: string
}

export const utilReducer = (state: LoginState = initialState, action: LoginAction) => {
  switch (action.type) {

    case 'locate': {
      return Object.assign({}, state, {
        path: action.payload,
      });
    }

    case 'START_session': {
      return Object.assign({}, state, {
        session: action.payload,
      });
    }

    case 'SET_topicId': {
      return Object.assign({}, state, {
        topicId: action.payload,
      });
    }

    case 'CHANGE_tab': {
      return Object.assign({}, state, {
        tabValue: action.payload,
      });
    }

    default:
      return state;
  }
};

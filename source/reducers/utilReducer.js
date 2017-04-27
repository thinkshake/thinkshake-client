const initialState = {
  path: '/',
  session: false,
  title: 'Feed',
  tabValue: 'question',
  topicId: '',
};

const utilReducer = (state = initialState, action) => {
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
export default utilReducer;

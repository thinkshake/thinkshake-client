// @flow

import { Record } from 'immutable';

type TopState = {
  myId: ?string,
  myName: ?string,
  myPoints: number[],
  myTopics: Object[],
}

const initialState: TopState = {
  myId: null,
  myName: '高橋翔太',
  myPoints: [10, 20, 50, 20, 90, 40],
  myTopics: [],
};

const TopRecord = Record(initialState);

export default class Top extends TopRecord {
  //TODO: business method
  getMyName() {
    return this.get('myName') || 'No name';
  }
}
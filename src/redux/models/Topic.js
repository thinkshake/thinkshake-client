// @flow

import { Record, Map } from 'immutable';

import type { Comment } from './Comment';
import type { Project } from './Project';

// const initialState: { [?string]: Array<Comment | Project> } = {
//    null : [],
// };

const initialMap : { [?string]: Array<Comment | Project> } = Map({
  '社会' : [
    {
      type: 'comment',
      id: '1',
      text: 'テストコメントです。社会',
      ownerName: 'Aさん',
      ownerId: 'テストID',
      update: new Date(),
    },
    {
      type: 'project',
      id: '2',
      name: 'テストプロジェクト',
      title: 'テストプロジェクトです。',
      text: 'テストプロジェクトです。',
      topic: '社会',
      ownerName: 'Aさん',
      ownerId: 'テストID',
      update: new Date(),
    },
  ],
  'スポーツ' : [
    {
      type: 'comment',
      id: '3',
      text: 'テストコメントです。スポーツ１',
      ownerName: 'Bさん',
      ownerId: 'テストID',
      update: new Date(),
    },
    {
      type: 'comment',
      id: '4',
      text: 'テストコメントです。スポーツ２',
      ownerName: 'Bさん',
      ownerId: 'テストID',
      update: new Date(),
    },
  ],
  '政治' : [
    {
      type: 'comment',
      id: '5',
      text: 'テストコメントです。政治',
      ownerName: 'Aさん',
      ownerId: 'テストID',
      update: new Date(),
    },
  ],
});

const initialState = {
  map : initialMap,
};

const TopicRecord = Record(initialState);

export default class Topic extends TopicRecord {
  //TODO: business method
}
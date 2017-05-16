// @flow

import { Record, List } from 'immutable';

import type { Project } from './Project';

// const initialList : Project[] = List([
//    {}
// ]);

const initialList : Project[] = [
  {
    type: 'project',
    id: '1',
    name: 'テストプロジェクト1',
    title: 'テストプロジェクト1です。',
    text: 'テストプロジェクト1です。',
    ownerName: 'Aさん',
    topic: 'トピック１',
    ownerId: 'テストID',
    update: new Date(),
  },
  {
    type: 'project',
    id: '2',
    name: 'テストプロジェクト2',
    title: 'テストプロジェクト2です。',
    text: 'テストプロジェクト2です。',
    ownerName: 'Aさん',
    topic: 'トピック2',
    ownerId: 'テストID',
    update: new Date(),
  },
  {
    type: 'project',
    id: '3',
    name: 'テストプロジェクト3',
    title: 'テストプロジェクト3です。',
    text: 'テストプロジェクト3です。',
    ownerName: 'Aさん',
    topic: 'トピック3',
    ownerId: 'テストID',
    update: new Date(),
  }
];

const initialState = {
  list : initialList,
};

const RecommendRecord = Record(initialState);

export default class Recommend extends RecommendRecord {
  //TODO: business method
}
// @flow

export type Project = {
  type: 'project',
  id: string,
  name: string,
  title: string,
  text: string,
  topic: string,
  ownerName: string,
  ownerId: string,
  update: Date,
};
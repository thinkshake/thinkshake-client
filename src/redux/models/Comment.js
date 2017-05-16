// @flow

export type Comment = {
  type: 'comment',
  id: string,
  text: string,
  ownerName: string,
  ownerId: string,
  update: Date,
};
// @flow

class Collaboration {

  constructor() {
  }

  addComment: Object = (comment: string) => {
    return {
      type: 'comment',
      id: 'id5',
      fullName: 'fullName1',
      userName: 'userName1',
      image: 'images/sampleUser.png',
      comment: comment,
      hasChild: false,
    };
  }

}
export default new Collaboration();
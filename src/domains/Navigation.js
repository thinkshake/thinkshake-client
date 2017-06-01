// @flow

class Navigation {

  constructor() {
  }

  loadTop: Object[] = (userId: string) => {
    const card1 = {
      id: 'id1',
      title: 'title1',
      topic: 'topic1',
      description: 'description1',
      image: 'images/sample.png',
    };
    const card2 = {
      id: 'id2',
      title: 'title2',
      topic: 'topic2',
      description: 'description2',
      image: 'images/sample.png',
    };
    const card3 = {
      id: 'id3',
      title: 'title3',
      topic: 'topic3',
      description: 'description3',
      image: 'images/sample.png',
    };
    return [
      card1,
      card2,
      card3,
    ];
  }

  loadComments: Object[] = (topicId: string) => {
    //  TODO: プロパティじゃなくて型定義を使いたい
    //        hasChildは使わず、返却した配列をみて判断させたい
    const commentWithoutChild = {
      type: 'comment',
      id: 'id1',
      fullName: 'fullName1',
      userName: 'userName1',
      image: 'images/sampleUser.png',
      comment: 'Hello, this is my comment. No child.',
      hasChild: false,
    };
    const commentWithChild = {
      type: 'comment',
      id: 'id2',
      fullName: 'fullName2',
      userName: 'userName2',
      image: 'images/sampleUser.png',
      comment: 'Hello, this is my comment. With child.',
      hasChild: true,
    };
    const project = {
      type: 'project',
      id: 'id3',
      title: 'title1',
      topic: 'topic1',
      description: 'description1',
      image: 'images/sample.png',
    };
    return [
      commentWithChild,
      project,
      commentWithoutChild,
    ];
  }

}
export default new Navigation();
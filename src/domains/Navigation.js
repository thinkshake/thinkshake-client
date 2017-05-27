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

}
export default new Navigation();
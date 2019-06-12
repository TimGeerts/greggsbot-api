import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    raids: [Raid]
  }
  type Raid {
    name: String
    description: String
    tags: [String]
    bosses: [Boss]
    extra: [Extra]
  }
  type Boss {
    name: String
    description: String
    tags: [String]
    thumbnail: [String]
    wowhead: [String]
    youtube: [String]
  }
  type Extra {
    name: String
    content: String
  }
`;

export const resolvers = {
  Query: {
    raids: () =>
      admin
        .database()
        .ref('raids')
        .orderByChild('name')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

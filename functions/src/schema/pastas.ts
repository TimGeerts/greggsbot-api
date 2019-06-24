import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    pastas: [Pasta]
  }
  type Pasta {
    tags: [String]
    content: String
    month: Int
  }
`;

export const resolvers = {
  Query: {
    pastas: () =>
      admin
        .database()
        .ref('pastas')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

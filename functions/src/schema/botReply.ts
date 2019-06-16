import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    botreplies: [WeightedString]
  }
`;

export const resolvers = {
  Query: {
    botreplies: () =>
      admin
        .database()
        .ref('botreplies')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

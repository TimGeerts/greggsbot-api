import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    answers: [WeightedString]
  }
`;

export const resolvers = {
  Query: {
    answers: () =>
      admin
        .database()
        .ref('answers')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

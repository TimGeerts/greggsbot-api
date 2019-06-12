import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    answers: [EightBallAnswer]
  }
  type EightBallAnswer {
    weight: Int
    content: String
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

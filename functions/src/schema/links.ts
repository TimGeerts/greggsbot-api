import * as admin from 'firebase-admin';

export const typeDef = `
  extend type Query {
    links: [TaggedString]
  }
`;

export const resolvers = {
  Query: {
    links: () =>
      admin
        .database()
        .ref('links')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

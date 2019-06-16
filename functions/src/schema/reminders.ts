import * as admin from 'firebase-admin';

export const typeDef = `
  type Reminder {
    channel: String
    cron: String
    enabled: Boolean
    guild: String
    mentions: [String]
    message: String
    title: String
  }
  extend type Query {
    reminders: [Reminder]
  }
`;

export const resolvers = {
  Query: {
    reminders: () =>
      admin
        .database()
        .ref('reminders')
        .once('value')
        .then((snap) => snap.val())
        .then((val) => Object.keys(val).map((key) => val[key]))
  }
};

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
  extend type Mutation {
    setReminder(reminder: String!): String
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
  },
  Mutation: {
    setReminder: (_: any, args: any) => {
      console.log(args);
      return 'great success';
    }
  }
};

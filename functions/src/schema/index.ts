import { typeDef as commonDefs } from './common';
import { typeDef as botDefs, resolvers as botReplyResolvers } from './botReply';
import { typeDef as eightBallDefs, resolvers as eightBallAnswerResolvers } from './eightBallAnswer';
import { typeDef as linkDefs, resolvers as linkResolvers } from './links';
import { typeDef as pastaDefs, resolvers as pastaResolvers } from './pastas';
import { typeDef as reminderDefs, resolvers as reminderResolvers } from './reminders';
import { typeDef as raidDefs, resolvers as raidResolvers } from './raids';
import { makeExecutableSchema } from 'apollo-server-express';
import merge = require('lodash/merge');

const baseDef = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;
const resolvers = {
  Query: {},
  Mutation: {}
};

export const schema = makeExecutableSchema({
  typeDefs: [baseDef, commonDefs, botDefs, eightBallDefs, linkDefs, pastaDefs, reminderDefs, raidDefs],
  resolvers: merge(
    resolvers,
    botReplyResolvers,
    eightBallAnswerResolvers,
    linkResolvers,
    pastaResolvers,
    reminderResolvers,
    raidResolvers
  )
});

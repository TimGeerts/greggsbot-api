import { ApolloServer } from 'apollo-server-express';
import express = require('express');
import * as cors from 'cors';
import { schema } from './schema';

export function configureServer() {
  const app = express();
  app.use(cors());

  const server = new ApolloServer({
    schema
  });

  // const typeDefs = gql`
  //   type Query {
  //     reminders: String
  //   }
  //   type Reminder {
  //     title: String
  //     message: String
  //   }
  // `;
  // const resolvers = {
  //   Query: {
  //     reminders: () => 'test'
  //     // admin
  //     //   .database()
  //     //   .ref('reminders')
  //     //   .once('value')
  //     //   .then((snap) => snap.val())
  //     //   .then((val) => {
  //     //     Object.keys(val).map((key) => val[key]);
  //     //   })
  //   }
  // };

  // const server = new ApolloServer({
  //   typeDefs,
  //   resolvers
  // });

  server.applyMiddleware({ app, path: '/', cors: true });
  return app;
}

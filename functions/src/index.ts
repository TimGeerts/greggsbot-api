import * as functions from 'firebase-functions';
import { configureServer } from './server';
import * as admin from 'firebase-admin';

admin.initializeApp();

const server = configureServer();

export const api = functions.https.onRequest(server);

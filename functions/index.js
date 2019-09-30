const { https } = require("firebase-functions");

const gqlServer = require("./graphql-server");

const server = gqlServer();

// Graphql api
// https://us-central1-<project-name>.cloudfunctions.net/api/
const api = https.onRequest(server);

module.exports = { api };

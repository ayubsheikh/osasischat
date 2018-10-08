const { authenticate } = require('@feathersjs/authentication').hooks;

const processMessage = require('../../hooks/process-message');

const poppulateUser = require('../../hooks/poppulate-user');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [processMessage()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [poppulateUser()],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

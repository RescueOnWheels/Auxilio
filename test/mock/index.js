const arraysEqual = require('./arraysEqual.test');
const debug = require('./debug.test');
const isDuplicate = require('./isDuplicate.test');
const normalize = require('./normalize.test');

describe('Mock', () => {
  describe('arraysEqual', arraysEqual);
  describe('debug', debug);
  describe('isDuplicate', isDuplicate);
  describe('normalize', normalize);
});

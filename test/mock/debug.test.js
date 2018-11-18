/* Packages */
const gubed = require('debug');
const chai = require('chai');
const fs = require('fs');

/* Test target */
const { Debug } = require('./../../');

chai.should();
module.exports = () => {
  const debug = Debug('RRS:Test');

  beforeEach(() => {
    if (fs.existsSync('rover.log')) {
      fs.unlinkSync('rover.log');
    }

    gubed.enable('RRS:Test');
  });

  describe('Output', () => {
    it('should not write the string to `rover.log` if the namespace is disabled.', () => {
      // Arrange
      gubed.enable('');

      // Act
      debug('Is this a test?');

      // Assert
      fs.existsSync('rover.log').should.equal(false);
    });

    it('should write the string to `rover.log` if the namespace is enabled.', () => {
      // Act
      debug('Is this a test?');

      // Assert
      fs.existsSync('rover.log').should.equal(true);
    });
  });

  describe('Test cases', () => {
    it('should write the string to `rover.log` if the namespace is enabled.', () => {
      // Act
      debug('%j', { a: 1 });

      // Arrange
      const content = (fs.readFileSync('rover.log')).toString().split(' ');
      content.shift(); // Remove date-time
      const output = content.join(' ').replace('\r\n', '');

      // Assert
      output.should.equal('RRS:Test {"a":1}');
    });
  });
};

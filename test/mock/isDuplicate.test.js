/* Packages */
const chai = require('chai');

/* Test target */
const { isDuplicate } = require('./../../');

chai.should();

module.exports = () => {
  // Arrange
  let isDupe;

  beforeEach(() => {
    // Arrange
    isDupe = undefined;
  });

  describe('output', () => {
    it('should return a boolean.', () => {
      // Arrange
      const array1 = [];
      const array2 = [];

      // Act
      isDupe = isDuplicate(array1, array2);

      // Assert
      isDupe.should.be.a('boolean');
    });
  });

  describe('test cases', () => {
    it('should return `false` if the history array is empty.', () => {
      // Arrange
      const command = [];
      const history = [];

      // Act
      isDupe = isDuplicate(command, history);

      // Assert
      isDupe.should.equal(false);
    });

    it('should return `false` if the history array is empty.', () => {
      // Arrange
      const command = [145, 23, 100];
      const history = [];

      // Act
      isDupe = isDuplicate(command, history);

      // Assert
      isDupe.should.equal(false);
    });

    it('should return `true` if the history array contains exactly the same command.', () => {
      // Arrange
      const command = [145, 23, 100];
      const history = [
        [145, 23, 100],
      ];

      // Act
      isDupe = isDuplicate(command, history);

      // Assert
      isDupe.should.equal(true);
    });

    it('should return `false` if the history array contains the same command but with a different value.', () => {
      // Arrange
      const command = [145, 23, 100];
      const history = [
        [145, 23, 50],
      ];

      // Act
      isDupe = isDuplicate(command, history);

      // Assert
      isDupe.should.equal(false);
    });

    it('should return `false` if the history array contains a different command.', () => {
      // Arrange
      const command = [145, 23, 100];
      const history = [
        [7, 0, 0, 0, 0, 0, 0],
      ];

      // Act
      isDupe = isDuplicate(command, history);

      // Assert
      isDupe.should.equal(false);
    });
  });
};

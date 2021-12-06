const Message = require('../../models/order');
const {assert} = require('chai');
const {mongoose, databaseUrl, options} = require('../../database');

describe('Message', () => {
  beforeEach(async () => {
    await mongoose.connect(databaseUrl, options);
    await mongoose.connection.db.dropDatabase();
  });

  afterEach(async () => {
    await mongoose.disconnect();
  });

  describe('#author', () => {
    it('is a String', () => {
      const authorAsAnInt = 1;

      const message = new Message({ author: authorAsAnInt });

      assert.strictEqual(message.author, authorAsAnInt.toString());
    });

    it('is required', () => {
      const message = new Message({ author: null })

      message.validateSync();

      const errors = message.errors;
      assert.equal(errors.author.message, 'Path `author` is required.');
    });
  });

  describe('#message', () => {
    it('is a String', () => {
      const messageAsAnInt = 1;

      const message = new Message({ message: messageAsAnInt });

      assert.strictEqual(message.message, messageAsAnInt.toString());
    });

    it('is required', () => {
      const message = new Message({ message: null })

      message.validateSync();

      const errors = message.errors;
      assert.equal(errors.message.message, 'Path `message` is required.');
    });
  });
});

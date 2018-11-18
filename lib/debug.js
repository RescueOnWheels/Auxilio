const fs = require('fs');
const Debug = require('debug');
const util = require('util');

/**
 * Write a formatted string to the log file.
 *
 * @function
 * @param  {...any} args - Arguments containing the base string and all placeholders.
 */
function write(...args) {
  const msg = `${util.format(...args)}\r\n`;
  fs.appendFileSync('rover.log', msg, (err) => { /* istanbul ignore next */
    if (!err) {
      return;
    }

    console.error(err); // eslint-disable-line no-console
    write(msg);
  });
}

module.exports = (name) => {
  const debug = Debug(name);

  return (...args) => {
    const base = args[0];
    args.shift();

    debug.useColors = false;
    debug.log = write;
    if (args.length > 0) {
      debug(base, ...args);
    } else {
      debug(base);
    }

    debug.useColors = true;
    debug.log = undefined;
    if (args.length > 0) {
      debug(base, ...args);
    } else {
      debug(base);
    }
  };
};

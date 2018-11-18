const fs = require('fs');
const Debug = require('debug');
const util = require('util');

function write(...args) {
  const msg = `${util.format(...args)}\r\n`;
  fs.appendFileSync('rover.log', msg, (err) => {
    if (err) throw err;
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
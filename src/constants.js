const { mergeRename } = require('./utils/others');

const IS_RPI = process.platform === 'linux' && process.arch == 'arm';
const PORT = {
  name: IS_RPI ? '/dev/ttyS0' : 'COM5',
  baudRate: 230400,
};
const SEPARATORS = Buffer.alloc(4);
SEPARATORS.writeUInt16BE(6891);
SEPARATORS.writeUInt16BE(25500, 2);

const STATES = {
  initial: 'params',
  charts: 'charts',
  research: 'research',
};


const DATA = {};

const COMMANDS = {}

module.exports = {
  IS_RPI,
  PORT,
  SEPARATORS,
  STATES,
  DATA,
  COMMANDS
};

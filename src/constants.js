const IS_RPI = process.platform === 'linux' && process.arch == 'arm';
const PORT = IS_RPI ? '/dev/ttyAMA0' : 'COM5';
const SEPARATORS = [];

module.exports = {
  IS_RPI,
  PORT,
  SEPARATORS
}
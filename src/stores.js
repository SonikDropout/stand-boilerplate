const { writable, derived } = require('svelte/store');

const serialData = writable({});

module.exports = {
  serialData
}
const App = require('./App.svelte').default;

console.log(App);

const app = new App({
	target: document.body,
});

window.app = app;

module.exports = app;
import Vuex from 'vuex'
import camelCase from 'lodash/camelCase'

const requireModule = require.context('./modules', false, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
	const moduleName       = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
	modules[moduleName]    = requireModule(fileName).default;
});

export default () => {
    return new Vuex.Store({modules})
}

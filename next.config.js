/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');
const WindiCSS = require('windicss-webpack-plugin');

module.exports = withPWA({
	reactStrictMode: true,
	webpack(config) {
		config.plugins.push(new WindiCSS());
		return config;
	},
});

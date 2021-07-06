// next.config.js
module.exports = {
	future: {
		webpack5: true,
	},
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ["en", "th"],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: "th",
		localeDetection: false,
	},
};

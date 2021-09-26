module.exports = {
	assetPrefix: process.env.NODE_ENV == "production" ? "/judegiordano.github.io" : undefined,
	images: {
		loader: "custom",
		domains: [
			"github.com",
			"judegiordano.github.io"
		]
	},
	poweredByHeader: false
};

module.exports = {
	webpack(config, options) {
		const { isServer } = options;

		// Rule for handling audio and video files
		config.module.rules.push({
			test: /\.(ogg|mp3|wav|mpe?g|mp4|webm|ogg|avi)$/, // Add supported video and audio formats
			exclude: config.exclude,
			use: [
				{
					loader: require.resolve("url-loader"),
					options: {
						limit: config.inlineImageLimit, // Adjust limit for audio/small videos
						fallback: require.resolve("file-loader"),
						publicPath: `${config.assetPrefix}/_next/static/media/`, // Public path for inlined data URLs or file-loader output
						outputPath: `${isServer ? "../" : ""}static/media/`, // Output directory for audio/video files (adjusted for server/client build)
						name: "[name]-[hash].[ext]",
						esModule: config.esModule || false,
					},
				},
			],
		});

		return config;
	},
};

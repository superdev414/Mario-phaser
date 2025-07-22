const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	devtool: "eval-source-map",
	entry: "./src/main.ts",
	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "bundle.min.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: [/\.vert$/, /\.frag$/],
				use: "raw-loader",
			},
			{
				test: /\.(gif|png|jpe?g|svg|xml|glsl)$/i,
				use: "file-loader",
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [path.join(__dirname, "dist/**/*")],
		}),
		new webpack.DefinePlugin({
			"typeof CANVAS_RENDERER": JSON.stringify(true),
			"typeof WEBGL_RENDERER": JSON.stringify(true),
			"typeof WEBGL_DEBUG": JSON.stringify(true),
			"typeof EXPERIMENTAL": JSON.stringify(true),
			"typeof PLUGIN_3D": JSON.stringify(false),
			"typeof PLUGIN_CAMERA3D": JSON.stringify(false),
			"typeof PLUGIN_FBINSTANT": JSON.stringify(false),
			"typeof FEATURE_SOUND": JSON.stringify(true),
		}),
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	devServer: {
		host: "0.0.0.0", // Allow external connections
		port: 8080,
		allowedHosts: "all", // Allow all hosts
		client: {
			overlay: true,
		},
		static: {
			directory: path.join(__dirname, "../public"),
		},
		compress: true,
		hot: true,
	},
};

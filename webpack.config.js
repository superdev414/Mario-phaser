"use strict";

const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: "./src/main.ts",

	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/build/",
		filename: "project.bundle.js",
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
				test: [/\.vert$/, /\.frag$/],
				use: "raw-loader",
			},
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			CANVAS_RENDERER: JSON.stringify(true),
			WEBGL_RENDERER: JSON.stringify(true),
		}),
	],
};

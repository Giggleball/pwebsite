module.exports = {

	//define entry point
	entry: './entry.js',


    //define output point
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
		{ 
			test: /\.scss$/, 
			loader: "style-loader!css-loader!sass-loader"
			} 
		]
	}
};



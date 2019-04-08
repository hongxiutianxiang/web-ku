const path = require('path');

module.exports = {
  //指定打包环境
  mode:'development',
  //单入口写法一
  entry: {
	  //chunk名称:入口文件路径
	  index: "./src/index.js",
	  about: "./src/about.js",
	  contact: "./src/contact.js"
	},
	//单入口写法二
  	// entry: './src/index.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
	    rules: [
	    //处理css
			{
			    test: /\.css$/,
			    use: [
			      'style-loader',
			      'css-loader'
			    ]
			},
	    //处理图片 
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
			  		{
			    		loader: 'url-loader',
			    			options: {
			      			limit: 10
			    		}
			  		}
				]
			}		   
	    ]
  	}

};





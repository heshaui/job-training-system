module.exports = {
	plugins: {
	    'postcss-pxtorem': {
		 	rootValue: 192, // 1/10 的设计稿宽度
			propList: ['*'],
	    },
	},
};
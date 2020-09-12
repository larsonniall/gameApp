const config = {
	port: process.env.PORT || 3000,
	mongoURI: process.env.MONGODB_URI || 'mongodb://localhost/3000'
};

export default config;
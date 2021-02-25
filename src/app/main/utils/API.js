import axios from 'axios';

export default axios.create({
	// baseURL: "api",
	// responseType: "json",
	proxy: {
		host: 'localhost/',
		port: 3001
	}
});

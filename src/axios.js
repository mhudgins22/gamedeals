import axios from "axios";

const instance = axios.create({
	baseURL: 'http://store.steampowered.com/',
	timeout: 10000,
});

export default instance;
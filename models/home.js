/**
 * 用户业务操作
 */

const axios = require('axios');

const indexData = {

	async getInfo() {
		//http://192.168.0.160/test/test2.json
		let Info=await axios.get('http://192.168.0.160/test/test2.json');
		return Info.data
	}

}

module.exports = indexData
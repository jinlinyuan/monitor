import axios from 'axios'
import {baseUrl} from 'assets/js/config'

export function defenceList(){
	let url = baseUrl + "/defenceAreaController.do?defence_list"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}

export function earlyData(){
	let url = baseUrl + "/indexController.do?index"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}

export function alarmData(){
	let url = baseUrl + "/alarmRecordController.do?alarm_list"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}
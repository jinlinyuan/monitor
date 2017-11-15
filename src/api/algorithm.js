import axios from 'axios'
import {baseUrl} from 'assets/js/config'
import qs from 'qs'
// 查询所有的算法
export function algorithmList(){
	let url = baseUrl + "/algorithmController.do?algorithm_list"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}
// 查询单个算法
export function algorithmSingleById(id){
	let url = baseUrl + "/algorithmController.do?go_update_algorithm"
	return axios.get(url,{
		params:{
			algorithmid:id
		}
	})
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}

// 删除单个算法
export function deleteAlgorithm(id){
	let url = baseUrl + "/algorithmController.do?delete_algorithm"
	return axios.get(url,{
		params:{
			algorithmid:id
		}
	})
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}

// 新增或者修改
export function saveAlgorithm(obj){
	let url = baseUrl + "/algorithmController.do?update_algorithm"
	return axios.post(url,qs.stringify(obj))
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}


// 查询所有的参数
export function algorithmParamList(){
	let url = baseUrl + "/algorithmParamController.do?algorithmParam_list"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response.data)
	})
	.catch(function(err){
	    console.log(err);
	});
}
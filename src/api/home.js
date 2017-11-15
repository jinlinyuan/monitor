import axios from 'axios'
import {baseUrl} from 'assets/js/config'

export function productList(){
	let url = baseUrl + "/productController.do?product_list"
	return axios.post(url)
	.then(function(response){
		return Promise.resolve(response)
	})
	.catch(function(err){
	    console.log(err);
	});
}

export function productSingle(id){
	let url = baseUrl + "/productController.do?product_single"
	return axios.get(url,{
		params:{
			productorid:id
		}
	})
	.then(function(response){
		return Promise.resolve(response)
	})
	.catch(function(err){
	    console.log(err);
	});
}
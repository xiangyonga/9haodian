


import axios from 'axios'
import qs from 'querystring'

const Post = ({url, data}) =>{
	return axios({
		method:"post",
		url:'/jd'+url,
		headers:{
			'Content-type':"application/x-www-form-urlencoded"
		},
		data: qs.stringify(data)
	})
}


export default Post


		// axios({
		// 	method:"post",
		// 	url:"/juooo/index/getNationalSildeList",
		// 	headers:{
		// 		'Content-type':"application/x-www-form-urlencoded"
		// 	},
		// 	data:{
		// 		confType:'L',
		// 		isSymbol:1,
		// 		limit:6
		// 	},
		// 	transformRequest: [function (data) {
		// 		return qs.stringify(data)
		// 	}],
		// }).then(res=>{
		// 	console.log(res.data)
		// })

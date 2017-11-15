import Vue from 'vue'
import Router from 'vue-router'

import Layout from "components/layout/layout"
import Home from "components/home/home"
import Early from "components/early/early"
import DeviceManage from "components/device-manage/device-manage"
import EventCtrl from "components/event-ctrl/event-ctrl"
import Histor from "components/histor/histor"
import RealMoni from "components/real-moni/real-moni"
import CallPolice from "components/call-police/call-police"
import Draw from "components/draw/draw"
import Login from "components/login/login"
import Algorithm from "components/algorithm/algorithm"

Vue.use(Router)

export default new Router({
	routes: [
	  	{
	  		path:"/",
	  		redirect: "/Home",
	  		component: Layout,
	  		children:[
	  			{
			  		path:"/Home",
			  		component: Home
			  	},
			  	{
			  		path:"/Algorithm",
			  		component: Algorithm
			  	},
			  	{
			  		path:"/RealMoni",
			  		component: RealMoni
			  	},
			    {
			      	path: '/DeviceManage',
			      	component: DeviceManage
			    },
			    {
			      	path: '/Histor',
			      	component: Histor,
			      	children:[
			            {
			                path:'/Histor/callPolice',
			                component:CallPolice
			            },
			            {
			                path:'/Histor/draw',
			                component:Draw
			            }
			        ]
			    },
			    {
			      	path: '/EventCtrl',
			      	component: EventCtrl
			    },
			    {
			      	path: '/Early',
			      	component: Early
			    }
	  		]
	  	},
	  	{
	  		path:"/Login",
	  		component: Login
	  	},
	]
})

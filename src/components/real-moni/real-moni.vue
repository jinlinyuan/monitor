<template>
	<div class="page-content-wrapper">
		<m-bread>
			<div class="bread_block">
				<i class="iconfont icon-4 active" @click="changeBlock(4,$event)"></i>
				<i class="iconfont icon-9" @click="changeBlock(9,$event)"></i>
			</div>
		</m-bread>
		<div class="list">
        	<div class="panel panel-info">
			  	<div class="panel-heading">防区列表</div>
				<ul class="list-group">
				    <li class="list-group-item" v-for="item in sectorList">
				    	<i class="icon iconfont" :class="item.flag == 1 ? 'icon-zhengchang' : 'icon-yichang'"></i>
				    	<span v-html="item.ipAddress"></span>
				    	<span v-html="item.state"></span>
				    	<span v-html="item.devState"></span>
				    </li>
				</ul>
			</div>
			<div class="panel panel-danger">
			  	<div class="panel-heading">报警信息</div>
			  	<table class="table">
				   	<thead>
				   		<tr>
				   			<th>设备</th>
				   			<th>信息</th>
				   		</tr>
				   	</thead>
				   	<tbody>
				   		<tr>
				   			<td>192.168.5.110</td>
				   			<td>闯入报警</td>
				   		</tr>
				   		<tr>
				   			<td>192.168.5.110</td>
				   			<td>闯入报警</td>
				   		</tr>
				   		<tr>
				   			<td>192.168.5.110</td>
				   			<td>闯入报警</td>
				   		</tr>
				   		<tr>
				   			<td>192.168.5.110</td>
				   			<td>闯入报警</td>
				   		</tr>
				   	</tbody>
				</table>
			</div>
        </div>
        <div class="page-content">
			<div class="img_container" :class="listCls" ref="real_list" v-for="item in real_list">
			  	<img :src="item.imgUrl" alt="..." class="img-rounded">
			</div>
        </div>
    </div>
</template>

<script type="text/javascript">
	import mBread from "base/bread/bread"
	import { addClass,removeClass } from 'assets/js/dom'

	export default {
		data(){
			return {
				defaultNum:4,
				realList:[{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				},{
					imgUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2864848776,311030124&fm=27&gp=0.jpg"
				}],
				sectorList:[{
					ipAddress:"192.168.5.110",
					flag:1,
					state:"布放状态",
					devState:"设备正常"
				},{
					ipAddress:"192.168.5.111",
					flag:1,
					state:"布放状态",
					devState:"设备正常"
				},{
					ipAddress:"192.168.5.112",
					flag:1,
					state:"布放状态",
					devState:"设备正常"
				},{
					ipAddress:"192.168.5.113",
					flag:0,
					state:"闲置状态",
					devState:"设备异常"
				},{
					ipAddress:"192.168.5.114",
					flag:1,
					state:"布放状态",
					devState:"设备正常"
				},{
					ipAddress:"192.168.5.115",
					flag:1,
					state:"布放状态",
					devState:"设备正常"
				},{
					ipAddress:"192.168.5.116",
					flag:0,
					state:"布放状态",
					devState:"设备异常"
				}]
			}
		},
		computed:{
			real_list(){
				return this.realList.slice(0,this.defaultNum)
			},
			listCls(){
				switch (this.defaultNum) {
					case 4:
						return "col-md-6 h50"
					case 9:
						return "col-md-4 h33"
				}
			}
		},
		methods:{
			changeBlock(num,event){
				this.defaultNum = num
				var sibilings = event.target.parentNode.children
				for (var i = 0; i < sibilings.length; i++) {
					removeClass(sibilings[i],'active')
				}
				addClass(event.target,'active')
			}
		},
		components:{
			mBread
		}
	}
</script>


<style scoped lang="less">
	.bread_block {
		float: right;
		margin-right: 100px;
		line-height: 40px;
		i {
			display: inline-block;
			width: 25px;
			height: 25px;
			font-size: 18px;
			color:#9e9e9e;
		}
		i.active {
			color:#333;
		}
	}
	.list {
		.icon-zhengchang {
			color:green;
		}
		.icon-yichang {
			color:red;
		}
		.icon {
			display: inline-block;	
			width: 20px;
		}
		li.list-group-item span {
			padding: 0 3px;
		}
	}
	.img_container {
		padding: 5px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.h50 {
		height: 50%;
	}
	.h33 {
		height: 33.3%;
	}
</style>
<template>
	<div class="page-content-wrapper">
		<div class="page-content">
			<el-row :gutter="20" class="elrow">
			  	<el-col :span="8">
				  	<div class="grid-content bg-purple echarts">
				  		<char :option="data" @click="clickChar" @ready="ready" class="char"></char>
				 	</div>
			  	</el-col>
			  	<el-col :span="8">
			  		<div class="grid-content bg-purple fq_list">
			  			<el-card class="box-card home">
							<div slot="header" class="clearfix">
							    <span class="card_text">防区列表</span>
							</div>
							<el-table
						      :data="defenceList"
						      style="width: 100%;">
						      	<el-table-column
							        prop="daname"
							        label="防区名"
							    >
						      	</el-table-column>
						      	<el-table-column
							        prop="alarmstatus"
							        label="状态"
							    >
						      	</el-table-column>
						    </el-table>
							<!-- <div v-for="(item,index) in defenceList" class="text item">
								<el-row>
								  	<el-col :span="8"><span  v-html="index+1"></span></el-col>
								  	<el-col :span="8"><span  v-html="item.daname"></span></el-col>
								  	<el-col :span="8"><span :class="item.alarmstatus==0 ? 'el-icon-warning' : ''"  v-html="item.alarmstatus==0 ? '警报' : '正常'"></span></el-col>
								</el-row>
							</div> -->
						</el-card>
			  		</div>
			  	</el-col>
			  	<el-col :span="8">
				  	<div class="grid-content bg-purple echarts">
				  		<char :option="dataLine" @click="clickChar" @ready="ready" class="char"></char>
				  	</div>
			  	</el-col>
			</el-row>

			<el-row>
				<el-card class="box-card home yc_list">
					<div slot="header" class="clearfix">
					    <span class="card_text">预警信息</span>
					    <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
					</div>
					<el-table
				      :data="alarmData"
				      style="width: 100%;">
				      	<el-table-column
					        prop="defenceAreaName"
					        label="防区名"
					    >
				      	</el-table-column>
				      	<el-table-column
					        prop="occourtime"
					        label="报警时间"
					    >
				      	</el-table-column>
				      	<el-table-column
				       	 	prop="algorithname"
				        	label="报警类型">
				      	</el-table-column>
				      	<el-table-column
				       	 	prop="devicename"
				        	label="设备类型">
				      	</el-table-column>
				      	<el-table-column
				       	 	prop="status"
				        	label="是否有效">
				      	</el-table-column>
				      	<el-table-column
				       	 	prop="flagtag"
				        	label="是否处理">
				      	</el-table-column>
				      	<el-table-column
						    label="操作"
						    width="100">
						    <template slot-scope="scope">
						        <el-button
						          	size="mini"
						          	type="danger"
						          	@click="handleEdit(scope.$index, scope.row)">预警处理</el-button>
						        
						    </template>
					    </el-table-column>
				    </el-table>
				</el-card>
			</el-row>
	    </div>
    </div>
</template>

<script type="text/javascript">
	import {productList,productSingle} from 'api/home'
	import {defenceList,earlyData,alarmData} from 'api/defence'
	import Char from 'base/char/char'

	export default {
		data(){
			return {
				defenceList:[],
				target:[],
				indexData:{},
				alarmData:[],
				tableData: [{
		            date: '2016-05-02',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1518 弄'
		        }, {
		            date: '2016-05-04',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1517 弄'
		        }, {
		            date: '2016-05-01',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1519 弄'
		        }, {
		            date: '2016-05-03',
		            name: '王小虎',
		            address: '上海市普陀区金沙江路 1516 弄'
		        }],
			}
		},
		computed: {
			data(){
				return {
					title : {
				        text: '预警报表',
				        x:'center'
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: ['已处理预警','未处理预警','标记','忽略']
				    },
				    series : [
				        {
				            name: '访问来源',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:[
				                {value:this.indexData.YAlarmCount, name:'已处理预警'},
				                {value:this.indexData.NAlarmCount, name:'未处理预警'},
				                {value:this.indexData.BlarmCount, name:'标记'},
				                {value:this.indexData.HlarmCount, name:'忽略'}
				            ],
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
				        }
				    ]
				}
			},
			dataLine(){
				return {
					title : {
				        text: '布防信息',
				        x:'center'
				    },
					tooltip: {
				        trigger: 'item',
				        formatter: "{a} <br/>{b}: {c} ({d}%)"
				    },
				    toolbox: {
				        show : true,
				        feature : {
				            saveAsImage : {show: true}
				        }
				    },
				    legend: {
				        orient: 'vertical',
				        x: 'left',
				        data : ['已布防','未布防']
				    },
				    series: [
				        {
				            name:'信息',
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
				            label: {
				                normal: {
				                    show: true,
				                    position: 'inner'
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:[
				                {value:this.indexData.buFangDevice, name:'以布防'},
				                {value:this.indexData.cheFangDevice, name:'未布防'}
				            ]
				        }
				    ]
				}
			}	
		},
		created(){
			this.getDefenceList()
			this.getEarlyData()
			this.getAlarmData()
		},
		mounted(){
			let that = this
			window.onresize = function(){
				for (var i = 0; i < that.target.length; i++) {
					that.target[i].resize()
				}
			}
		},
		methods:{
			getDataList(){
				productList().then((res)=>{
					console.log(res)
				})
			},
			getProductSingle(){
				productSingle(6001).then((res)=>{
					console.log(res)
				})
			},
			// 防区列表
			getDefenceList(){
				defenceList().then((res)=>{
					res.obj.forEach((item) => {
					  	item.alarmstatus = item.alarmstatus == 0 ? "警报" : "正常"
					})
					this.defenceList = res.obj
				})
			},
			// 预警数据
			getEarlyData(){
				earlyData().then((res)=>{
					this.indexData = res.attributes
				})
			},
			// 获取预警信息
			getAlarmData(){
				alarmData().then((res)=>{
					this.alarmData = this.formatAlarmData(res.obj)
				})
			},
			ready(instance){
				this.target.push(instance)
			},
			clickChar(event, instance, echarts){
				
			},
			formatAlarmData(list){
				list.forEach((item) => {
					item.occourtime = new Date(item.occourtime).Format("yyyy-MM-dd hh:mm:ss")
					item.status = item.status == 0 ? "无效" : "有效"
					item.flagtag = item.flagtag == 0 ? "未处理" :""
				})
				return list
			}
		},
		components: {
	      	Char
	    }
	}
</script>

<style scoped lang="less">

	.page-container .page-content-wrapper .page-content {
		left: 200px;
		top:50px;
		padding: 10px 15px;
		.elrow {
			margin-bottom: 15px;
		}
		.card_text {
			font-weight: bold;
			font-size: 18px;
		}
		.echarts {
			padding: 15px;
			box-sizing: border-box;
			box-shadow: 0 0 10px rgba(0,0,0,0.38);
			width: 100%;
    		height: 300px;
    		color:#fff;
		}
		.fq_list {
			box-shadow: 0 0 10px rgba(0,0,0,0.38);
			height: 300px;
			.box-card {
				height: 300px;
			}
			.text {
			    font-size: 14px;
			}

		    .item {
		    	margin-bottom: 18px;
		  	}

			.clearfix:before,
			.clearfix:after {
			    display: table;
			    content: "";
			}
			.clearfix:after {
			    clear: both
			}
			.el-icon-warning {
				color: #FA5555;
			}
		}
	}
</style>
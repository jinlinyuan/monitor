<template>
	<el-col :span="12">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			    <span class="text">参数</span>
			    <el-button style="float: right; padding: 3px 0" type="text">新增参数</el-button>
			</div>
			<el-table
		      	:data="algorithmParamData"
		      	highlight-current-row
		      	style="width: 100%">
		      	<el-table-column
			       	type="index"
			        label="序号"
			        width="100"
			    >
		      	</el-table-column>
		      	<el-table-column
			        prop="paramName"
			        label="参数名"
			    >
				</el-table-column>
		      	<el-table-column
				    label="操作"
				    width="200">
				    <template slot-scope="scope">
				        <el-button
				          size="mini"
				          type="primary"
				          @click="handleEditPa(scope.$index, scope.row)">编辑</el-button>
						<el-button
				          size="mini"
				          type="danger"
				          @click="handleDeletePa(scope.$index, scope.row)">删除</el-button>
				    </template>
			    </el-table-column>
		    </el-table>
		    <!-- <div class="block">
			    <el-pagination
			      	:current-page="currentPage4"
			      	:page-sizes="[10, 15, 20]"
			      	:page-size="100"
			      	layout="total, sizes, prev, pager, next, jumper"
			      	:total="400">
			    </el-pagination>
			</div> -->
		</el-card>
		<el-dialog
		  	:title="paDialogTitle"
		  	:visible.sync="dialogVisiblePa"
		  	width="50%"
		  	:close-on-click-modal="false"
		  	>
			<span>这是一段信息</span>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisiblePa = false">取 消</el-button>
			    <el-button type="primary" @click="dialogVisiblePa = false">确 定</el-button>
			</span>
		</el-dialog>
    </el-col>
</template>

<script type="text/javascript">
	import { algorithmParamList } from 'api/algorithm'
	import {mapMutations} from 'vuex'
	export default {
		data(){
			return {
				algorithmParamData:[],
				dialogVisiblePa:false,	
				paDialogTitle:"",
			}
		},
		created(){
			this.getAlgorithmParamData()
		},
		methods:{
			getAlgorithmParamData(){
				algorithmParamList().then((res)=>{
					this.algorithmParamData = res.obj
					this.setParmasList(this.algorithmParamData)
				})
			},
			handleEditPa(index,row){
				console.log(123)
				this.dialogVisiblePa = true
				this.paDialogTitle = "编辑参数"
			},
			handleDeletePa(index,row){
				this.$confirm('你确定要删除该参数吗？')
				.then(()=>{
					console.log('删除')
				}).catch(()=> {
					console.log('不删除')
				});
			},
			...mapMutations({
				setParmasList:'SET_PARAMSLIST'
			})
		}
	}
</script>

<style lang="less">
</style>
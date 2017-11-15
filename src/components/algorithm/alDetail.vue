<template>
	<el-col :span="12">
		<el-card class="box-card">
			<div slot="header" class="clearfix">
			    <span class="text">算法</span>
			    <el-button style="float: right; padding: 3px 0" type="text" @click="editAl">新增算法</el-button>
			</div>
			<el-table
		      	:data="algorithmData"
		      	highlight-current-row
		      	style="width: 100%">
		      	<el-table-column
			       	type="index"
			        label="序号"
			        width="100"
			    >
		      	</el-table-column>
		      	<el-table-column
			        prop="algorithName"
			        label="算法名"
			    >
				</el-table-column>
			    <el-table-column
			        prop="version"
			        label="版本"
			    >
		      	</el-table-column>
		      	<el-table-column
				    label="操作"
				    width="200">
				    <template slot-scope="scope">
				        <el-button
				          size="mini"
				          type="primary"
				          @click="handleEditAl(scope.$index, scope.row)">查看</el-button>
						<el-button
				          size="mini"
				          type="danger"
				          @click="handleDeleteAl(scope.$index, scope.row)">删除</el-button>
				    </template>
			    </el-table-column>
		    </el-table>
		</el-card>
		<el-dialog
		  	:title="alDialogTitle"
		  	:visible.sync="dialogVisibleAl"
		  	width="30%"
		  	:close-on-click-modal="false"
		  	>
			<el-form ref="form" :model="algorithmSingle" label-width="80px">
				<el-form-item label="算法名称">
				    <el-input v-model="algorithmSingle.algorithName" placeholder="请输入算法名称"></el-input>
				</el-form-item>
				<el-form-item label="算法版本">
					<el-input v-model="algorithmSingle.version" placeholder="请输入算法版本"></el-input>
				</el-form-item>
				<el-form-item label="参数信息">
				    <el-checkbox-group v-model="algorithmParam">
				    	<el-row>
						  	<el-col v-for="item in paramsList" :span="8">
						  		<el-checkbox type="paramArray" :label="item.algorithmParamId">{{item.paramName}}</el-checkbox>
						  	</el-col>
						</el-row>
				    </el-checkbox-group>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
			    <el-button @click="dialogVisibleAl = false">取 消</el-button>
			    <el-button type="primary" @click="save">确 定</el-button>
			</span>
		</el-dialog>
	</el-col>
</template>

<script type="text/javascript">
	import { algorithmList,algorithmSingleById,saveAlgorithm,deleteAlgorithm } from 'api/algorithm'
	import {checkData} from 'assets/js/dom'

	import {mapGetters} from 'vuex'
	export default {
		data(){
			return {
				algorithmData:[],
				dialogVisibleAl:false,
				alDialogTitle:"",
				algorithmSingle:{},
				algorithmParam:[]
			}
		},
		computed:{
			...mapGetters([
		        'paramsList',
		    ])
		},
		created(){
			this.getAlgorithmList()
		},
		methods:{
			getAlgorithmList(){
				algorithmList().then((res)=>{
					this.algorithmData = res.obj
				})
			},
			handleEditAl(index,row){
				algorithmSingleById(row.algorithmid).then((res)=>{
					this.dialogVisibleAl = true
					this.alDialogTitle = "查看算法"
					this.algorithmSingle = res.attributes.algorithm
					this.algorithmParam = this.formatParamList(res.attributes.algorithmParamList)
				})
			},
			formatParamList(arr){
				let list = []
				arr.forEach((item)=>{
					list.push(item.algorithmParamId)
				})
				return list
			},
			handleDeleteAl(index,row){
				this.$confirm('你确定要删除该算法吗？')
				.then(()=>{
					deleteAlgorithm(row.algorithmid).then((res)=>{
						if(res.success){
							this.$notify({
					          message: '恭喜你，操作成功',
					          type: 'success',
					          position: 'bottom-right',
					          duration:1000
					        });
							this.getAlgorithmList()
						}
					})
				});
			},
			editAl(){
				this.dialogVisibleAl = true
				this.alDialogTitle = "新增算法"
				this.algorithmSingle = {}
			},
			save(){
				this.algorithmSingle.paramArray = this.algorithmParam.join()
				saveAlgorithm(this.algorithmSingle).then((res)=>{
					if(res.success){
						this.dialogVisibleAl = false
						this.getAlgorithmList()
					}
				})
			}
		}
	}
</script>

<style lang="less">
</style>
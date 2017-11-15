<template>
	<div class="page-sidebar-wrapper">
		<div class="user">
			<div class="img">
				<img src="">
			</div>
			<div class="text">
				<div>king</div>
				<time>2017-11-14</time>
			</div>
		</div>
		<div>
			<el-row class="tac">
				<el-col>
				    <el-menu
				      :default-active="$route.path"
				      class="el-menu-vertical-demo"
				      background-color="#545c64"
				      text-color="#fff"
				      active-text-color="#ffd04b"
					  router
					  >
					    <el-menu-item index="/Home">
					       	<i class="iconfont icon-shouye"></i>
					        <span slot="title">首&emsp;&emsp;页</span>
					    </el-menu-item>
					     <el-menu-item index="/Algorithm">
					       	<i class="iconfont icon-equipment"></i>
					        <span>算法参数</span>
					    </el-menu-item>
					    <el-menu-item index="/DeviceManage">
					       	<i class="iconfont icon-equipment"></i>
					        <span>设备管理</span>
					    </el-menu-item>
					    <el-menu-item index="/Early">
					       	<i class="iconfont icon-yujing"></i>
					        <span>预警信息</span>
					    </el-menu-item>
					    <el-menu-item index="/EventCtrl">
					       	<i class="iconfont icon-shijian"></i>
	               		 	<span>事件中心</span>
					    </el-menu-item>
					    <el-menu-item index="/RealMoni">
					       	<i class="iconfont icon-jiankong"></i>
	                		<span>用户管理</span>
					    </el-menu-item>
					    <el-menu-item index="/EventCtrl">
					       	<i class="iconfont icon-shijian"></i>
	                		<span>日志管理</span>
					    </el-menu-item>
					    <el-menu-item index="/Histor/callPolice">
					       	<i class="iconfont icon-lishirenwu"></i>
	                		<span>历史记录</span>
					    </el-menu-item>
					    <el-menu-item index="/EventCtrl">
					       	<i class="iconfont icon-shijian"></i>
	                		<span>系统设置</span>
					    </el-menu-item>
			    	</el-menu>
			  	</el-col>
			</el-row>
		</div>
	</div>
</template>

<script type="text/javascript">
	

</script>

<style lang="less" scoped>
	.user {
		margin: 20px 0;
		padding: 0 15px;
		&:after {
			clear: both;
			content: "";
			display: block;
		}
		.img {
			float: left;
			width: 60px;
			height: 60px;
			border-radius: 50%;
			background-color: #fff;
			vertical-align: middle;
		}
		.text {
			float: left;
			font-style: italic;
			font-size: 16px;
			padding-top: 10px;
		    padding-left: 5px;
		    color: #eee;
		}
	}
	.tac {
		.el-menu {
			border-right: none;
			.el-menu-item  {
				font-size: 16px;
				height: 50px;
    			line-height: 50px;
			}
		}
	}
</style>
<template>
	<div class="page-content-wrapper">
		<div class="page-content">
			<el-main>
				<el-row :gutter="20">
					<aldetail></aldetail>
					<paramdetail></paramdetail>
				</el-row>
			</el-main>
		</div>
	</div>
</template>

<script type="text/javascript">

	import aldetail from 'components/algorithm/alDetail'
	import paramdetail from 'components/algorithm//paramDetail'
	export default {
		components: {
            aldetail,
            paramdetail
        }
	}
</script>

<style lang="less" scoped>
	.text {
		font-size: 18px;
		font-weight: bold;
	}
</style>
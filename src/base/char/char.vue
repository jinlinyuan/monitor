<template>
	<IEcharts :option="option" @ready="onReady" @click="onClick"></IEcharts>
</template>

<script type="text/javascript">
	import IEcharts from 'vue-echarts-v3/src/full.vue';
	export default {
		props : {
  			option: {
  				type:Object,
  				default:{}
  			}
  		},
  		methods:{
  			onReady(instance){
  				this.$emit("ready",instance)
  			},
  			onClick(event, instance, echarts){
  				this.$emit("click",event, instance, echarts)
  			}
  		},
  		components: {
	      	IEcharts
	    }
	}
</script>

<style lang="less" scoped>
		
</style>	
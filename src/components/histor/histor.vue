<template>
	<div class="page-container">
		<m-bread>
            <ul class="nav nav-pills">
                <router-link tag="li" class="his-item" to="/Histor/callPolice">
                    <span>报警记录</span>
                </router-link>
                <router-link tag="li" class="his-item" to="/Histor/draw">
                    <span>撤布防记录</span>
                </router-link>
            </ul>
        </m-bread>
        <div class="page_container">
            <router-view></router-view>
        </div>
	</div>
</template>

<script type="text/javascript">
	import mBread from "base/bread/bread"

	export default {
		components:{
			mBread
		}
	}
</script>


<style scoped lang="less">
    .nav-pills {
        margin-left: 10px;
        padding-top: 5px;
        .his-item {
            border-radius: 4px;
            padding: 10px 15px;
            color: #e2e4e6;
            background-color: #7b7777;
            cursor: pointer;
        }
        .router-link-active {
            color: #FFEB3B;
            background-color: #3F51B5;
        }
    }
</style>
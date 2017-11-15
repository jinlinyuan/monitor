<template>
    <div class="layout">
        <m-header></m-header>
        <div class="page-container">
            <Navbar></Navbar>
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/javascript">
  
    import mHeader from 'components/header/header'
    import Navbar from 'components/navbar/navbar'

    export default {
        components: {
            mHeader,
            Navbar
        }
    }
</script>

<style lang="less" scoped>
    .layout {
      height: 100%;
    }
</style>
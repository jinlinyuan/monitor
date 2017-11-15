<template>
    <div class="header">
        <div class="mon_cont clearfix">
            <div class="logo">
                <!-- <a class="logo_bg" href="" title="">
                    <img src="asn" alt="">
                </a> -->
                <span class="logo_text">智能视频分析系统</span>
            </div>
            <div class="opera">
                <div class="about">关于</div>
                <div class="logout">退出</div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
}
</script>

<style scoped lang="less">
.header {
    position: fixed;
    top: 0;
    left: 200px;
    width: 100%;
    height: 50px;
    background-color: #eee;
    color: #67544e;
    border-bottom: 1px solid #d1d1d1;
    letter-spacing: 1px;
    z-index: 30;
    .mon_cont {
        .logo {
            float: left;
            margin-left: 15px;
            .logo_bg {
                display: inline-block;
                width: 120px;
                height: 50px;
                vertical-align: middle;
            }
            .logo_text {
                font-size: 20px;
                line-height: 50px;
                text-shadow: 0 0 2px #d0c5c1;
            }
        }
        .opera {
            float: right;
            margin-right: 50px;
            line-height: 49px;
            .about,.logout {
                float: left;
                height: 49px;
                padding: 0 15px 0 30px;
                cursor: pointer;
            }
            .about:hover,.logout:hover {
                background-color: #0871c3;
            }
        }
    }
}
</style>

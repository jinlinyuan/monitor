<template>
    <div class="page-content-wrapper">
        <m-bread>
            <div class="sector_text">
                <span class="">防区列表</span>
                <button type="button" class="btn btn-danger btn-sm">删除防区</button>
                <button type="button" class="btn btn-primary btn-sm">添加防区</button>
            </div>
            <div class="device_list">
                <span>设备列表</span>
            </div>
        </m-bread>
        <div class="list">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in sectorList">
                    <i class="icon iconfont" :class="item.flag == 1 ? 'icon-zhengchang' : 'icon-yichang'"></i>
                    <span v-html="item.ipAddress"></span>
                    <span v-html="item.state"></span>
                    <span v-html="item.devState"></span>
                </li>
            </ul>
        </div>
        <div class="page-content">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>设备名</th>
                        <th>所属防区</th>
                        <th>设备类型</th>
                        <th>IP地址</th>
                        <th>端口号</th>
                        <th>厂家</th>
                        <th>RtspURL</th>
                    </tr>
                </thead>
                <tbody>
                   <tr v-for="(item,index) in device_list">
                       <td>{{index}}</td>
                       <td>{{item.name}}</td>
                       <td>{{item.suoshu}}</td>
                       <td>{{item.leixing}}</td>
                       <td>{{item.ip}}</td>
                       <td>{{item.port}}</td>
                       <td>{{item.changjia}}</td>
                       <td>{{item.RtspURL}}</td>
                   </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script type="text/javascript">
	import mBread from "base/bread/bread"

	export default {
        data(){
            return {
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
                }],
                device_list:[{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                },{
                   name:"192.168.5.110",
                   suoshu:"abc",
                   leixing:"网络相机",
                   ip:"192.168.5.110",
                   port:"8080",
                   changjia:"海康威视",
                   RtspURL:"rtsp://admin:@192.168.5.110/h2/dev.ts"
                }]
            }
        },
		components:{
			mBread
		}
	}
</script>


<style scoped lang="less">
    .sector_text {
        float: left;
        width: 300px;
        margin: 0 10px;
        span {
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
            vertical-align: middle;
        }
    }
    .icon-zhengchang {
        color:green;
    }
    .icon-yichang {
        color:red;
    }
    .device_list {
        float: left;
        span {
            line-height: 50px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
</style>
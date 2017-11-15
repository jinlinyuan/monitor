<template>
    <div class="page-content-wrapper">
        <m-bread>
            <div class="early_set">
                <span>预警设置</span>
            </div>
            <div class="early_rule">
                <span>预警规则</span>
            </div>
        </m-bread>
        <div class="list">
           <div class="panel panel-info" v-show="early_panel == 'rqjc' ">
                <div class="panel-heading">入侵检测</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="panel panel-info" v-show="early_panel == 'zqjc' ">
                <div class="panel-heading">撞墙检测</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="panel panel-info" v-show="early_panel == 'pgjc' ">
                <div class="panel-heading">攀高检测</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="panel panel-info" v-show="early_panel == 'ryzl' ">
                <div class="panel-heading">人员滞留</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="panel panel-info" v-show="early_panel == 'djjc' ">
                <div class="panel-heading">打架检测</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="panel panel-info" v-show="early_panel == 'bxcy' ">
                <div class="panel-heading">拌线穿越</div>
                <div class="panel-body">
                    <p>当前设备:{{early_name}}</p>
                    <div class="form-group">
                        <input type="" name="" class="form-control">
                    </div>
                    <div class="form-group">
                        <select name="" class="form-control">
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                            <option value="">123</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-content">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>设备名</th>
                        <th>入侵检测</th>
                        <th>撞墙检测</th>
                        <th>攀高检测</th>
                        <th>人员滞留</th>
                        <th>打架检测</th>
                        <th>拌线穿越</th>
                        <th>围墙攀爬</th>
                        <th>分级警戒</th>
                        <th>离岗检测</th>
                        <th>起身检测</th>
                        <th>目标识别</th>
                        <th>物品遗留</th>
                        <th>人流统计</th>
                        <th>人脸遮挡</th>
                        <th>物体移除</th>
                        <th>抛物异常</th>
                        <th>倒地异常</th>
                        <th>出血异常</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in early_list">
                        <td>{{item.name}}</td>
                        <td @click="rqjcMethod(item)">{{item.rqjc.state ? '启用' : ''}}</td>
                        <td @click="zqjcMethod(item)">{{item.zqjc.state ? '启用' : ''}}</td>
                        <td @click="pgjcMethod(item)">{{item.pgjc.state ? '启用' : ''}}</td>
                        <td @click="ryzlMethod(item)">{{item.ryzl.state ? '启用' : ''}}</td>
                        <td @click="djjcMethod(item)">{{item.djjc.state ? '启用' : ''}}</td>
                        <td @click="bxcyMethod(item)">{{item.bxcy.state ? '启用' : ''}}</td>
                        <td >{{item.wqpp.state ? '启用' : ''}}</td>
                        <td >{{item.fjjj.state ? '启用' : ''}}</td>
                        <td >{{item.lgjc.state ? '启用' : ''}}</td>
                        <td >{{item.qsjc.state ? '启用' : ''}}</td>
                        <td >{{item.mbsb.state ? '启用' : ''}}</td>
                        <td >{{item.wpyl.state ? '启用' : ''}}</td>
                        <td >{{item.rltj.state ? '启用' : ''}}</td>
                        <td >{{item.rlzd.state ? '启用' : ''}}</td>
                        <td >{{item.wtyc.state ? '启用' : ''}}</td>
                        <td >{{item.pwyc.state ? '启用' : ''}}</td>
                        <td >{{item.ddyc.state ? '启用' : ''}}</td>
                        <td >{{item.cxyc.state ? '启用' : ''}}</td>
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
                early_panel:"",
                early_name:"",
                early_list:[{
                    name:"192.168.5.123",
                    rqjc:{ state:true},
                    zqjc:{state:false},
                    pgjc:{state:false},
                    ryzl:{state:false},
                    djjc:{state:false},
                    bxcy:{state:false},
                    wqpp:{state:false},
                    fjjj:{state:false},
                    lgjc:{state:false},
                    qsjc:{state:false},
                    mbsb:{state:false},
                    wpyl:{state:false},
                    rltj:{state:false},
                    rlzd:{state:false},
                    wtyc:{state:false},
                    pwyc:{state:false},
                    ddyc:{state:false},
                    cxyc:{state:false}
                },{
                    name:"192.168.5.124",
                    rqjc:{ state:true},
                    zqjc:{state:false},
                    pgjc:{state:false},
                    ryzl:{state:false},
                    djjc:{state:false},
                    bxcy:{state:false},
                    wqpp:{state:false},
                    fjjj:{state:false},
                    lgjc:{state:false},
                    qsjc:{state:false},
                    mbsb:{state:false},
                    wpyl:{state:false},
                    rltj:{state:false},
                    rlzd:{state:false},
                    wtyc:{state:false},
                    pwyc:{state:false},
                    ddyc:{state:false},
                    cxyc:{state:false}
                },{
                    name:"192.168.5.125",
                    rqjc:{ state:true},
                    zqjc:{state:false},
                    pgjc:{state:false},
                    ryzl:{state:false},
                    djjc:{state:false},
                    bxcy:{state:false},
                    wqpp:{state:false},
                    fjjj:{state:false},
                    lgjc:{state:false},
                    qsjc:{state:false},
                    mbsb:{state:false},
                    wpyl:{state:false},
                    rltj:{state:false},
                    rlzd:{state:false},
                    wtyc:{state:false},
                    pwyc:{state:false},
                    ddyc:{state:false},
                    cxyc:{state:false}
                },{
                    name:"192.168.5.126",
                    rqjc:{ state:true},
                    zqjc:{state:false},
                    pgjc:{state:false},
                    ryzl:{state:false},
                    djjc:{state:false},
                    bxcy:{state:false},
                    wqpp:{state:false},
                    fjjj:{state:false},
                    lgjc:{state:false},
                    qsjc:{state:false},
                    mbsb:{state:false},
                    wpyl:{state:false},
                    rltj:{state:false},
                    rlzd:{state:false},
                    wtyc:{state:false},
                    pwyc:{state:false},
                    ddyc:{state:false},
                    cxyc:{state:false}
                }]
            }
        },
        methods:{
            rqjcMethod(item){
                this.early_name = item.name
                this.early_panel = 'rqjc'
            },
            zqjcMethod(item){
                this.early_name = item.name
                this.early_panel = 'zqjc'
            },
            pgjcMethod(item){
                this.early_name = item.name
                this.early_panel = 'pgjc'
            },
            ryzlMethod(item){
                this.early_name = item.name
                this.early_panel = 'ryzl'
            },
            djjcMethod(item){
                this.early_name = item.name
                this.early_panel = 'djjc'
            },
            bxcyMethod(item){
                this.early_name = item.name
                this.early_panel = 'bxcy'
            }
        },
		components:{
			mBread
		}
	}
</script>


<style scoped lang="less">
    .early_rule {
        float: left;
       
        margin-right: 10px;
        span {
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
    .early_set {
        float: left;
        width: 300px;
        margin: 0 10px;
        span {
            line-height: 40px;
            font-size: 20px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
    .page-container .page_container .page-sidebar-wrapper {
        right: 10px;
        left:auto;
    }
	.page-container .page_container .page-content-wrapper {
		left:10px;
        right:320px;
	}
</style>
<template>
    <div class="page-content-wrapper">
        <m-bread>
            <div class="event_text">
                <span class="">待处理事件</span>
            </div>
            <div class="form-inline event_search">
                <div class="form-group">
                    <label for="date">时间段</label>
                    <input type="datetime-local" class="form-control input-sm" id="date">
                </div>
                <div class="form-group">
                    <label for="todate">--</label>
                    <input type="datetime-local" class="form-control input-sm" id="todate">
                </div>
                <div class="form-group">
                    <select name="" class="form-control input-sm">
                        <option value="">全部报警事件</option>
                    </select>
                </div>
                <div class="form-group">
                   <input type="text" class="form-control input-sm" id="search">
                </div>
                <button type="button" class="btn btn-primary btn-sm">搜索</button>
            </div>
        </m-bread>
        <div class="page-content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4">
                        <div class="panel panel-info">
                            <div class="panel-heading">区域入侵-防区1-设备3</div>
                            <div class="panel-body">
                                123
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
    .event_text {
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
    .event_search {
        padding-top: 4px;
    }
    .page-container .page-content-wrapper .page-content {
       left: 185px;
    }
</style>
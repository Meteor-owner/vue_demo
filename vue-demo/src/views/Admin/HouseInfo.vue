<template>
    <div class="user-container">
        <div class="user-box">
            <el-form :inline="true" :model="houseList" class="demo-form-inline">
                <el-form-item label="房源编号">
                    <el-input v-model="houseList.id" placeholder="请输入编号"></el-input>
                </el-form-item>
                <el-form-item label="所在城市">
                    <el-input v-model="houseList.city" placeholder="请输入城市"></el-input>
                </el-form-item>
                <el-form-item label="发布日期">
                    <el-date-picker v-model="houseList.publish_date" type="month" placeholder="选择发布日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查 询</el-button>
                    <el-button type="primary">更 新</el-button>
                </el-form-item>

            </el-form>
            <div class="dataTable">
                <table class="basic-table" border="1">
                    <thead>
                        <tr>
                            <th width="180">编号</th>
                            <th width="180">城市</th>
                            <th width="180">小区</th>
                            <th width="180">装修情况</th>
                            <th width="180">朝向</th>
                            <th width="240">楼层</th>
                            <th width="180">建造时间</th>
                            <th width="180">发布时间</th>
                            <th width="180">更新时间</th>
                            <th width="180">租赁方式</th>
                            <th width="180">关注人数</th>
                            <th width="180">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="info in houseInfo" :key="info.id">
                            <td>{{ info.id }}</td>
                            <td>{{ info.location }}</td>
                            <td>{{ info.village }}</td>
                            <td>{{ info.decoration }}</td>
                            <td>{{ info.direction }}</td>
                            <td>{{ info.cur_floor }} / {{ info.tol_floor }}层</td>
                            <td>{{ info.build_year }}</td>
                            <td>{{ info.publish_year }}-{{ info.publish_month > 10 ? info.publish_month :
                                `0${info.publish_month}` }}</td>
                            <td>{{ info.update_date }}</td>
                            <td>{{ info.rental_type }}</td>
                            <td>{{ info.follow_num }}</td>
                            <td>
                                <!-- <button type="button" class="btn btn-primary">编辑</button> -->
                                <button type="button" class="btn btn-danger">下 架</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="page">
                    <el-pagination layout="prev, pager, next, jumper" @current-change="handleCurrentChange"
                        :current-page="pagination.page_num" :page-size="pagination.page_size" :total="count"
                        :background="isBackground">
                    </el-pagination>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            houseInfo: [],
            houseList: {
                id: "",
                city: "",
                publish_date: '',
            },
            pagination: {
                r_id: "",
                page_num: 1,
                page_size: 10,
                order: 1,
                // userid: cookies.get("userid")
            },
            count: 0,
            isBackground: true
        }
    },
    methods: {
        getData() {
            axios.get('https://yapi.pro/mock/220305/houses').then((result) => {
                this.count = result.data.data.length;
                const fullData = result.data.data;
                const start = (this.pagination.page_num - 1) * this.pagination.page_size;
                const end = start + this.pagination.page_size;
                const show_data = fullData.slice(start, end);

                this.houseInfo = [];
                for (let item of show_data) {
                    this.houseInfo.push(item);
                }
                // console.log(this.houseInfo);
            }).catch((err) => {
                console.error('Error fetching the users:', err);
            });
        },
        onSubmit() {

        },
        handleCurrentChange(newPage) {
            this.pagination.page_num = newPage;
            this.getData();
            // window.scrollTo(0, 0);
        },
    },
    mounted() {
        this.getData();
    }
}
</script>


<style scoped>
.user-container {
    padding: 3% 0;
}

.user-box {
    width: 80%;
    margin: 2% 10%;
}

.el-button--primary {
    color: #FFF;
    background-color: #9e7d81;
    border-color: #9e7d81;
}

.el-button--primary:hover {
    color: #FFF;
    background-color: #a38185;
    border-color: #a38185;
}

.el-button--primary:active {
    color: #FFF;
    background-color: #9c7b7f;
    border-color: #9c7b7f;
}

.dataTable {
    width: 100%;
    text-align: center;
}

.basic-table {
    width: 100%;
    border-collapse: collapse;
}

.basic-table thead {
    background-color: #f5f7fa;
}

.basic-table th,
.basic-table td {
    border: 1px solid #ebeef5;
    padding: 10px;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
}

.basic-table tr:hover {
    background-color: #ecf5ff;
}

.basic-table th {
    color: #303133;
}

.btn {
    padding: 5px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn-primary {
    background-color: #9e7d81;
    color: white;
}

.btn-primary:hover {
    background-color: #a38185;
    border-color: #a38185;
}

.btn-primary:active {
    background-color: #9c7b7f;
    border-color: #9c7b7f;
}

.btn-danger {
    background-color: #f56c6c;
    color: white;
}

.btn-danger:hover {
    background-color: #e66767;
    border-color: #e66767;
}

.btn-danger:active {
    background-color: #e76e6e;
    border-color: #e76e6e;
}

.btn:not(:last-child) {
    margin-right: 8px;
}

.page {
    margin-top: 20px;
}

.el-form-item {
    margin-right: 20px;
}
</style>

<style lang="scss">
.el-input__inner:focus {
    border-color: #9e8d71;
}

.el-date-picker__header-label:hover,
.el-picker-panel__icon-btn:hover,
.el-picker-panel__icon-btn:hover,
.el-month-table td.today .cell,
.el-month-table td .cell:hover,
.el-month-table td.current:not(.disabled) .cell {
    color: #9e7d81;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #9e8d71;
    color: #fff;
}

.el-pagination.is-background .el-pager li:hover {
    color: #9e8d71;
}

.el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #9e8d71;
}

.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
    background-color: #9e8d71;
    color: #FFF;
}
</style>
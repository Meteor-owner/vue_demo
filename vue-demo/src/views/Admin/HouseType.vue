<template>
    <div class="user-container">
        <div class="user-box">
            <el-form :inline="true" :model="searchForm" class="demo-form-inline">
                <el-form-item label="编号">
                    <el-input v-model="discounts.id" placeholder="请输入编号"></el-input>
                </el-form-item>
                <el-form-item label="折扣">
                    <el-input v-model="discounts.discount" placeholder="请输入折扣"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">打折</el-button>
                </el-form-item>
            </el-form>
            <div class="dataTable">
                <table class="basic-table" border="1">
                    <thead>
                        <tr>
                            <th width="140">编号</th>
                            <th width="140">城市</th>
                            <th width="140">小区</th>
                            <th width="160">房屋类型</th>
                            <th width="140">电梯</th>
                            <th width="140">空调</th>
                            <th width="140">热水器</th>
                            <th width="140">床</th>
                            <th width="140">电视</th>
                            <th width="140">冰箱</th>
                            <th width="140">洗衣机</th>
                            <th width="140">WIFI</th>
                            <th width="140">天然气</th>
                            <th width="140">近地铁</th>
                            <!-- <th width="140">家具</th> -->
                            <th width="300">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="types in priceList" :key="types.id">
                            <td>{{ types.id }}</td>
                            <td>{{ types.location }}</td>
                            <td>{{ types.village }}</td>
                            <td>{{ types.room_type }}</td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_elevator === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_ac === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_heater === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_bed === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_tv === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_fridge === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_wm === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_wifi === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.has_gas === 'y'"></i>
                            </td>
                            <td>
                                <i class="el-icon-check" v-if="types.near_metro === 'y'"></i>
                            </td>
                            <td>
                                <button type="button" class="btn btn-primary">编辑</button>
                                <button type="button" class="btn btn-danger">下架</button>
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
            priceList: [],
            discounts: {
                id: "",
                discount: "",
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

                this.priceList = [];
                for (let item of show_data) {
                    this.priceList.push(item);
                }
                // console.log(this.priceList);
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
    text-align: center;
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
    padding: 5px 10px;
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
</style>

<style lang="scss">
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
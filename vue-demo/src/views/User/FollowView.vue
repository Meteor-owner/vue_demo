<template>
    <div class="container-follow">
        <div class="follow-group">
            <h2>我的关注</h2>
            <el-divider></el-divider>
            <el-container>
                <el-main>
                    <div class="dataTable">
                        <table class="basic-table">
                            <thead>
                                <tr>
                                    <th width="50">编号</th>
                                    <th width="100">房源</th>
                                    <th width="100">城市</th>
                                    <th width="100">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in rentHouse" :key="item.id">
                                    <td>{{ item.id }}</td>
                                    <td>
                                        <router-link :to="'/detail?id=' + item.id">
                                            <img src="../../assets/img/room.jpg" alt="">
                                        </router-link>
                                    </td>
                                    <td>{{ item.location }}</td>
                                    <td>
                                        <button type="button" class="btn btn-primary">取 消 关 注</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pages">
                        <el-pagination layout="prev, pager, next, jumper" @current-change="handleCurrentChange"
                            :total="count" :current-page="pagination.page_num" :page-size="pagination.page_size"
                            :background="isBackground">
                        </el-pagination>
                    </div>
                </el-main>
            </el-container>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            rentHouse: [],
            followList: [],
            count: 0,
            pagination: {
                r_id: "",
                page_num: 1,
                page_size: 6,
                order: 1,
                // userid: cookies.get("userid")
            },
            isBackground: true

        }
    },
    methods: {
        getData() {
            axios.get('https://yapi.pro/mock/220305/index').then((result) => {
                this.count = result.data.data.length;
                const followList = result.data.data;
                const start = (this.pagination.page_num - 1) * this.pagination.page_size;
                const end = start + this.pagination.page_size;
                const show_data = followList.slice(start, end);
                // console.log('count: ',this.count);
                this.rentHouse = [];
                for (let item of show_data) {
                    this.rentHouse.push(item);
                }
                // console.log("rental: ", this.rentHouse);
            });
        },
        handleCurrentChange(newPage) {
            this.pagination.page_num = newPage;
            this.getData();
            window.scrollTo(0, 0);
        },
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scoped>
.container-follow {
    height: 60%;
}

.follow-group {
    margin-top: 2%;
}

.el-container {
    width: 100%;
    padding-left: 0;
}

.el-main {
    margin: auto;
    padding: 10px;
}

.dataTable {
    width: 100%;
    text-align: center;
    margin: auto;
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
    font-size: 18px;
    text-align: center;
    vertical-align: middle;
    border: 0;
}

.basic-table tr:hover {
    background-color: #ecf5ff;
}

.basic-table th {
    color: #303133;
}

.basic-table img {
    height: auto;
    width: 80%;
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
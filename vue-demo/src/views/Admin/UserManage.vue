<template>
    <div class="user-container">
        <div class="user-box">
            <el-form :inline="true" :model="userInfo" class="demo-form-inline">
                <el-form-item label="手机号">
                    <el-input v-model="userInfo.phone" placeholder="请输入手机号"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="userInfo.email" placeholder="请输入邮箱"></el-input>
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
                            <th width="180">昵称</th>
                            <th width="180">姓名</th>
                            <th width="140">性别</th>
                            <th width="180">手机号</th>
                            <th width="180">邮箱</th>
                            <th width="180">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userList" :key="user.id">
                            <td>{{ user.username }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.gender === 'male' ? '男' : '女' }}</td>
                            <td>{{ user.phone }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <button type="button" class="btn btn-primary" @click="dialogVisible = true">编 辑</button>
                                <button type="button" class="btn btn-danger">删 除</button>
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
                <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
                    <el-form ref="form" :model="userAlter" label-width="80px">
                        <el-form-item label="昵称">
                            <el-input v-model="userAlter.username"></el-input>
                        </el-form-item>
                        <el-form-item label="姓名">
                            <el-input v-model="userAlter.name"></el-input>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                </el-dialog>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            userList: [],
            userInfo: {
                phone: "",
                email: "",
            },
            pagination: {
                r_id: "",
                page_num: 1,
                page_size: 10,
                order: 1,
                // userid: cookies.get("userid")
            },
            count: 0,
            isBackground: true,
            dialogVisible: false,
            userAlter:{
                username:'',
                name:'',
            }
        }
    },
    methods: {
        getData() {
            axios.get('https://yapi.pro/mock/220305/userList').then((result) => {
                this.count = result.data.data.length;
                const fullData = result.data.data;
                const start = (this.pagination.page_num - 1) * this.pagination.page_size;
                const end = start + this.pagination.page_size;
                const show_data = fullData.slice(start, end);

                this.userList = [];
                for (let item of show_data) {
                    this.userList.push(item);
                }
                // console.log(this.userList);
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
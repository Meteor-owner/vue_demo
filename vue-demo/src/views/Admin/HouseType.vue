<template>
    <div class="user-container">
        <div class="user-box">
            <el-form :inline="true" :model="houseType" class="demo-form-inline">
                <el-form-item label="编号">
                    <el-input v-model="houseType.id" placeholder="请输入编号"></el-input>
                </el-form-item>
                <el-form-item label="所在城市">
                    <el-input v-model="houseType.city" placeholder="请输入城市"></el-input>
                </el-form-item>
                <el-form-item label="房源类型">
                    <el-select v-model="type" placeholder="请选择房源类型">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
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
                            <th width="300">操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="types in houseInfo" :key="types.id">
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
                                <button type="button" class="btn btn-primary" @click="editType(types, types.id)">编 辑</button>
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
                <el-dialog title="个人信息" :visible.sync="dialogVisible" width="30%">
                    <el-form ref="form" :model="typeAlter" label-width="60px">
                        <el-form-item label="电梯">
                            <el-switch v-model="typeAlter.elevator" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="空调">
                            <el-switch v-model="typeAlter.ac" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="热水器">
                            <el-switch v-model="typeAlter.heater" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="床">
                            <el-switch v-model="typeAlter.bed" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="电视">
                            <el-switch v-model="typeAlter.tv" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="冰箱">
                            <el-switch v-model="typeAlter.fridge" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="洗衣机">
                            <el-switch v-model="typeAlter.wm" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="WIFI">
                            <el-switch v-model="typeAlter.wifi" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="天然气">
                            <el-switch v-model="typeAlter.gas" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                        <el-form-item label="近地铁">
                            <el-switch v-model="typeAlter.metro" active-color="#13ce66" inactive-color="#ff4949">
                            </el-switch>
                        </el-form-item>
                    </el-form>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="saveTypeAlter()">确 定</el-button>
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
            houseInfo: [],
            houseType: {
                id: "",
                city: "",
                type: "",
            },
            pagination: {
                r_id: "",
                page_num: 1,
                page_size: 10,
                order: 1,
                // userid: cookies.get("userid")
            },
            options: [{
                value: 1,
                label: '住宅'
            }, {
                value: 2,
                label: '公寓'
            },],
            count: 0,
            isBackground: true,
            type: '',
            dialogVisible: false,
            typeAlter: {
                elevator: '',
                ac: '',
                heater: '',
                bed: '',
                tv: '',
                fridge: '',
                wm: '',
                wifi: '',
                gas: '',
                metro: '',
            },
            curIndex: null,
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
        editType(types, id) {
            this.typeAlter = {
                elevator: types.has_elevator === 'y',
                ac: types.has_ac === 'y',
                heater: types.has_heater === 'y',
                bed: types.has_bed === 'y',
                tv: types.has_tv === 'y',
                fridge: types.has_fridge === 'y',
                wm: types.has_wm === 'y',
                wifi: types.has_wifi === 'y',
                gas: types.has_gas === 'y',
                metro: types.near_metro === 'y',
            };
            this.dialogVisible = true;
            this.curIndex = id;
            console.log('index: ',this.curIndex);
        },
        saveTypeAlter() {
            const savedData = {
                has_elevator: this.typeAlter.elevator ? 'y' : 'n', 
                has_ac: this.typeAlter.ac ? 'y' : 'n', 
                has_heater: this.typeAlter.heater ? 'y' : 'n', 
                has_bed: this.typeAlter.bed ? 'y' : 'n', 
                has_tv: this.typeAlter.tv ? 'y' : 'n', 
                has_fridge: this.typeAlter.fridge ? 'y' : 'n', 
                has_wm: this.typeAlter.wm ? 'y' : 'n', 
                has_wifi: this.typeAlter.wifi ? 'y' : 'n', 
                has_gas: this.typeAlter.gas ? 'y' : 'n', 
                near_metro: this.typeAlter.metro ? 'y' : 'n', 
            };
            console.log(savedData);
            this.dialogVisible=false
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

.el-form-item {
    margin-right: 20px;
}
</style>

<style lang="scss">
.el-input__inner:focus {
    border-color: #9e8d71;
}

.el-select .el-input__inner:focus {
    border-color: #9e8d71;
}

.el-select .el-input.is-focus .el-input__inner {
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
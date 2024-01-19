<template>
    <div class="container-follow">
        <div class="follow-group">
            <h2>浏览记录</h2>
            <el-divider></el-divider>
            <el-container>
                <el-main>
                    <div class="house-list">
                        <div class="house-list-item" v-for="item in rentHouse" :key="item.id">
                            <div class="house-img">
                                <router-link :to="'/detail?id=' + item.id">
                                    <img src="../../assets/img/room.jpg" alt="">
                                </router-link>
                            </div>
                            <div class="house-introduction">
                                <router-link :to="'/detail?id=' + item.id" style="text-decoration: none;">
                                    <h3 class="house-title">{{ item.location }}</h3>
                                </router-link>
                                <p class="house-info">{{ item.bedroom }}室 {{ item.livingroom }}厅 {{
                                    item.wc }}卫
                                    {{ item.area }}㎡</p>
                            </div>
                        </div>
                    </div>
                    <div class="pages">
                        <el-pagination layout="prev, pager, next, jumper" @current-change="handleCurrentChange" :total="count"
                            :current-page="pagination.page_num" :page-size="pagination.page_size" 
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
                console.log('count: ',this.count);
                this.rentHouse = [];
                for (let item of show_data) {
                    this.rentHouse.push(item);
                }
                console.log("rental: ", this.rentHouse);
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
    padding-left: 8%;
}

.house-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    width: 100%;
    margin-top: -2%;
}

.house-list-item {
    position: relative;
    width: 40%;
    height: 40%;
    margin: 0 5%;
    /* border: red 1px solid; */
    text-align: center;
}

.house-img {
    position: relative;
    width: 80%;
    height: auto;
    cursor: pointer;
    perspective: 1000px;
    /* overflow: hidden; */
}

.house-img img {
    width: 100%;
    height: auto;
}

.house-title {
    margin: 2px 0 4px 0;
    font-size: 16px;
    color: #333;
}

.house-info {
    font-size: 14px;
    margin-top: -1px;
}

.house-introduction {
    width: 50%;
    text-align: center;
    margin-left: 15%;
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
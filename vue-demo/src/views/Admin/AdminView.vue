<template>
    <div class="container">
        <el-container>
            <el-header>
                <div class="header">
                    <div class="img">
                        <router-link to="/">
                            <img src="../../assets/img/logo.png" alt="">
                        </router-link>
                    </div>
                    <div class="name">
                        <span>Meteor Rental Management</span>
                    </div>
                    <div class="welcome">
                        <span>欢迎，管理员</span>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <div class="aside">
                        <div class="navbar">
                            <h2><i class="el-icon-s-promotion"></i> 功能导航</h2>
                        </div>
                        <el-menu :default-openeds="['1', '2', '3']" text-color="#9e7d81" active-text-color="#fff">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-s-platform"></i>系统管理</template>
                                <el-menu-item index="1-1" @click="selectComponent('1-1')">用户管理</el-menu-item>
                                <el-menu-item index="1-2" @click="selectComponent('1-2')">价格管理</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-s-home"></i>房源管理</template>
                                <el-menu-item index="2-1" @click="selectComponent('2-1')">房源信息管理</el-menu-item>
                                <el-menu-item index="2-2" @click="selectComponent('2-2')">房屋类型管理</el-menu-item>
                                <el-menu-item index="2-3" @click="selectComponent('2-3')">房源审核</el-menu-item>
                            </el-submenu>
                            <el-submenu index="3">
                                <template slot="title"><i class="el-icon-s-marketing"></i>系统分析</template>
                                <el-menu-item index="3-1" @click="selectComponent('3-1')">房源分析</el-menu-item>
                                <el-menu-item index="3-2" @click="selectComponent('3-2')">价格分析</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </div>
                </el-aside>
                <el-main>
                    <div class="main">
                        <component :is="curComponent"></component>
                    </div>
                </el-main>
            </el-container>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
import UserManage from './UserManage.vue'
import PriceManage from './PriceManage.vue'
import HouseInfo from './HouseInfo.vue'
import HouseType from './HouseType.vue'
import HouseReview from './HouseReview.vue'
import HouseAnalyze from './HouseAnalyze.vue'

export default {
    components: {
        UserManage,
        PriceManage,
        HouseInfo,
        HouseType,
        HouseReview,
        HouseAnalyze
    },
    data() {
        return {
            curIndex: 1 - 1,
            curComponent: '',
        }
    },
    methods: {
        selectComponent(index) {
            // console.log(index);
            if (index === '1-1') {
                this.curComponent = 'UserManage';
            } else if (index === '1-2') {
                this.curComponent = 'PriceManage';
            } else if (index === '2-1') {
                this.curComponent = 'HouseInfo';
            } else if (index === '2-2') {
                this.curComponent = 'HouseType';
            } else if (index === '2-3') {
                this.curComponent = 'HouseReview';
            } else if (index === '3-1') {
                this.curComponent = 'HouseAnalyze';
            } else if (index === '3-2') {
                this.curComponent = 'PriceAnalyze';
            }
            // console.log(this.curComponent);

        },

    }
}
</script>

<style scoped>
.container {
    width: 100%;
    background: #f7f8fc;
}

.header {
    height: 100%;
    display: flex;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    margin: 5px 0;
    background: #fff;
    position: relative;
}

.img {
    margin-left: 2%;
    /* border: #9e9e9e 1px solid; */
    margin-top: -10px;
}

.img img {
    width: 80px;
    height: auto;
}

.name {
    height: 69%;
    text-align: center;
    margin-top: 0.5%;
    margin-left: 1%;
    font-family: fzyihei-m20s;
    font-size: 30px;
    color: #9e7d81;
    font-weight: 700;
}

.welcome {
    /* width: 20px; */
    height: 70%;
    margin-top: 0.9%;
    position: absolute;
    right: 0;
    margin-right: 5%;
    color: #9e7d81;
    font-size: 20px;
}

.aside {
    background: #fff;
    margin: 8% 5% 5% 10%;
    border-radius: 10px;
    height: 700px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    padding-top: 6px;
}

.navbar {
    text-align: center;
    color: #9e7d81;
}

.el-menu {
    margin-top: 10%;
}

.el-submenu .el-menu-item {
    min-width: 100%;
}

.el-main {
    padding: 10;
    overflow-y: hidden;
}

.main {
    background: #fff;
    border-radius: 10px;
    height: 100%;
    box-shadow: 0 4px 9px rgba(0, 0, 0, 0.2);
}
.el-footer{
    background: #f7f8fc;
}
</style>

<style lang="scss">
.el-aside {
    border: 0 !important;
    user-select: none;
}

.el-menu-item.is-active {
    background-color: #9e7d81;
}

.el-menu-item:hover {
    color: white !important;
    background: #9e7d81;
}
</style>
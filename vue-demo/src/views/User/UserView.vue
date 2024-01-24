<template>
    <div class="container">
        <main-bar></main-bar>
        <div class="main">
            <div class="box2">
                <el-container>
                    <el-aside width="230px" style="border: 1px solid #eee">
                        <div class="aside">
                            <div class="head-img">
                                <el-avatar :size="120" fit="scale-down" @error="errorHandler">
                                    <el-image :src="require('../../assets/img/head-img.jpg')"></el-image>
                                </el-avatar>
                            </div>
                            <div class="username">
                                <span>{{ name }}</span>
                            </div>
                            <el-menu :default-openeds="['1', '2']" text-color="#9e7d81" active-text-color="#fff"
                                default-active="1-1">
                                <el-submenu index="1">
                                    <template slot="title"><i class="el-icon-message"></i>个人中心</template>
                                    <el-menu-item index="1-1" @click="selectComponent('1-1')">我的关注</el-menu-item>
                                    <el-menu-item index="1-2" @click="selectComponent('1-2')">我的发布</el-menu-item>
                                    <el-menu-item index="1-3" @click="selectComponent('1-3')">我的租房</el-menu-item>
                                    <el-menu-item index="1-4" @click="selectComponent('1-4')">浏览记录</el-menu-item>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title"><i class="el-icon-setting"></i>账户设置</template>
                                    <el-menu-item index="2-1" @click="selectComponent('2-1')">个人资料</el-menu-item>
                                </el-submenu>
                            </el-menu>
                        </div>
                    </el-aside>
                    <el-main>
                        <div class="content">
                            <component :is="curComponent"></component>
                        </div>
                    </el-main>
                </el-container>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '../../components/FooterBar.vue'
import MainBar from "../../components/MainBar.vue"
import InfoView from './InfoView.vue'
import FollowView from './FollowView.vue'
import PublishView from './PublishView.vue'
import RentalView from './RentalView.vue'
import BrowserView from './BrowserView.vue'

export default {
    components: { MainBar, FooterBar, InfoView, FollowView, PublishView, RentalView, BrowserView },
    inject: ['reload'],
    data() {
        return {
            curComponent: 'FollowView',
            curIndex: 1 - 1,
            name: "Meteor",
            signal: "light",
            // tableData: [{
            //     id: 1,
            //     name: "meteor",
            //     signal: "light"
            // }]
        }
    },
    methods: {
        selectComponent(index) {
            // console.log(index);
            if (index === '1-1') {
                this.curComponent = 'FollowView';
            } else if (index === '1-2') {
                this.curComponent = 'PublishView';
            } else if (index === '1-3') {
                this.curComponent = 'RentalView';
            } else if (index === '1-4') {
                this.curComponent = 'BrowserView';
            } else if (index === '2-1') {
                this.curComponent = 'InfoView';
            }
            // console.log(this.curComponent);

        },
        errorHandler() {
            return true
        }
    }
}
</script>

<style scoped>
.container {
    background-color: #f7f8fc;
    /* height: 700px; */
}

.main {
    padding: 0 10%;
    margin: 0.7% 10%;
    width: 60%;
    height: auto;
    align-items: center;
    background: #f7f8fc;
    margin-bottom: 1%;
}

.head-img {
    width: 120px;
    height: 120px;
    margin: 3% 0 7% 20%;
    padding-top: 10%;
}

.head-img img {
    height: 120px;
    width: auto;
}

.username {
    margin: auto;
    margin-bottom: 7%;
}

.username span {
    font-size: 20px;
    color: #9e7d81;
}

.box2 {
    margin: 0 auto;
    /* height: 800px; */
    /* border: red 1px solid; */
    display: flex;
    justify-content: space-between;
    text-align: center;
}

.content {
    width: 90%;
    height: 100%;
    background: #fff;
    padding: 0 5%;
}

.aside {
    background: #fff;
    border-radius: 10px;
    height: 700px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}

.el-aside {
    padding: 10px;
    border: 0 !important;
    user-select: none;
}

.el-main {
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}

.el-menu-item.is-active {
    background-color: #9e7d81;
}

.el-menu-item:hover {
    color: white !important;
    background: #9e7d81;
}
</style>


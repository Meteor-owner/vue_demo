<template>
    <div class="container">
        <main-bar></main-bar>
        <div class="main">
            <div class="box1">
                <div class="head-img">
                    <img src="../assets/img/bnt.gif">
                </div>
                <div class="user-description">
                    <div class="">

                    </div>
                </div>
            </div>
            <div class="box2">
                <el-container>
                    <el-aside width="230px" style="border: 1px solid #eee">
                        <el-menu :default-openeds="['1', '2']" text-color="#9e7d81" active-text-color="#fff"
                            default-active="1-1" @select="selectComponent">
                            <el-submenu index="1">
                                <template slot="title"><i class="el-icon-message"></i>个人中心</template>
                                <el-menu-item index="1-1">我的关注</el-menu-item>
                                <el-menu-item index="1-2">我的发布</el-menu-item>
                                <el-menu-item index="1-3">浏览记录</el-menu-item>
                            </el-submenu>
                            <el-submenu index="2">
                                <template slot="title"><i class="el-icon-setting"></i>账户设置</template>
                                <el-menu-item index="2-1">个人资料</el-menu-item>
                                <el-menu-item index="2-2">密码设置</el-menu-item>
                            </el-submenu>
                        </el-menu>
                    </el-aside>
                    <el-main>
                        <el-table :data="tableData" border v-if="curIndex === '2-1'">
                            <el-table-column prop="name" label="名称" width="250"></el-table-column>
                            <el-table-column prop="updatetime" label="最后操作时间" width="250"></el-table-column>
                            <el-table-column label="操作">
                                <el-button type="primary" size="mini">编辑</el-button>
                                <el-button type="danger" size="mini">删除</el-button>
                            </el-table-column>
                        </el-table>
                    </el-main>
                </el-container>
            </div>
        </div>
        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '../components/FooterBar.vue'
import MainBar from "../components/MainBar.vue"

export default {
    components: { MainBar, FooterBar },
    data() {
        return {
            curComponent: null,
            curIndex: 2-1,
        }
    },
    methods: {
        selectComponent(index) {
            if (index == -'1-1') {
                this.curComponent = 'FooterBar';
                console.log(this.curComponent);
            }
        }
    }
}
</script>

<style scoped>
.container {
    background: #f7f8fc;
}

.main {
    padding: 0 10%;
    margin: 3px 10%;
    width: 60%;
    border: #9e9e9e 1px solid;
    height: auto;
    align-items: center;
}

.box1 {
    display: flex;
    justify-content: space-around;
    width: 100%;
    border: red 1px solid;
    height: 200px;
    padding: 10px;
}

.head-img {
    width: 120px;
    height: 120px;
    margin-top: 3%;
}

.head-img img {
    height: 120px;
    width: auto;
}

.user-description {
    width: 70%;
    margin-left: -10%;
    border: #9e9e9e 1px solid;
}

.box2 {
    margin: 0 auto;
    height: 800px;
    border: red 1px solid;
    display: flex;
    justify-content: space-between;
}

.el-aside {
    padding: 10px;
}

.el-main {
    padding: 10px;
}

.el-menu-item.is-active {
    background-color: #9e7d81;
}

.el-menu-item:hover {
    color: white !important;
    background: #9e7d81;
}
</style>


<template>
    <div class="container">
        <el-container>
            <el-header>

            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu :default-openeds="['1', '2']" text-color="#9e7d81" active-text-color="#fff"
                        default-active="1-1">
                        <el-submenu index="1">
                            <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                            <el-menu-item index="1-1" @click="selectComponent('1-1')">用户管理</el-menu-item>
                            <el-menu-item index="1-2" @click="selectComponent('1-2')">房源管理</el-menu-item>
                            <el-menu-item index="1-3" @click="selectComponent('1-3')">我的租房</el-menu-item>
                            <el-menu-item index="1-4" @click="selectComponent('1-4')">浏览记录</el-menu-item>
                        </el-submenu>
                        <el-submenu index="2">
                            <template slot="title"><i class="el-icon-setting"></i>房源管理</template>
                            <el-menu-item index="2-1" @click="selectComponent('2-1')">个人资料</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </el-aside>
                <el-container>
                    <el-main>Main</el-main>
                    <el-footer>Footer</el-footer>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped></style>

<style lang="scss">
.el-aside {
    // padding: 10px;
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
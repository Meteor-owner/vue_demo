<template>
    <header>
        <div class="header">
            <img src="../assets/img/logo.png" alt="">
            <div>
                <router-link to="/">
                    首页
                </router-link>
                <router-link to="/houseList">
                    房源
                </router-link>
                <router-link to="/offer">
                    发布房源
                </router-link>
                <router-link to="/userPage">
                    个人中心
                </router-link>
            </div>

        </div>
    </header>
</template>

<style scoped>
header {
    background: #fff;
    position: relative;
    margin: 0 auto 20px;
    width: 100%;
    height: 60px;
    line-height: 80px;
}

.header img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 15%;
}
.header div{
    margin-right: -20%;
    height:100%;
    width: 50%;

}
.header a {
    margin-right: 5%;
    margin-top: -10px;
    text-decoration: none;
    float: right;
    font-size: 18px;
    color: #777;
}
</style>

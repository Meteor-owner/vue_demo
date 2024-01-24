<template>
    <header>
        <div class="container">
            <div class="logo">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="nav-link">
                <ul class="fll">
                    <router-link to="/">
                        <li>首页</li>
                    </router-link>
                    <router-link to="/houseList">
                        <li>房源</li>
                    </router-link>
                    <router-link to="/offer">
                        <li>发布房源</li>
                    </router-link>
                    <router-link to="/userPage">
                        <li>个人中心</li>
                    </router-link>
                </ul>
            </div>
            <div class="login">
                <span>
                    <router-link to="" v-if="username">欢迎，{{ username }}</router-link>
                    <router-link to="/login" v-else>登录</router-link>
                </span>
                <span class="line">|</span>
                <a v-if="username" @click="logout" class="logout">退出</a>
                <router-link to="/register" v-else>立即注册</router-link>
            </div>
        </div>

    </header>
</template>

<script>
import cookie from 'js-cookie'
export default {
    data() {
        return {
            username: cookie.get('username')
        }
    },
    method: {
        logout() {

        }
    }
}
</script>

<style scoped>
.container {
    margin: 0 60% 0 0;
    width: 92%;
    align-items: center;
    display: flex;
    /* justify-content: space-around; */
}

header {
    height: 60px;
    box-sizing: border-box;
    z-index: 997;
    background: rgb(244, 244, 244);
    /* position: fixed;
    width: 100%;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000; */
}

.logo {
    /* border: #9e8d71 1px solid; */
    margin: -8px 0 0 10%;
}

.logo img {
    height: 70px;
    width: auto;
}

.nav-link {
    /* border: #9e8d71 1px solid; */
    margin: -23px 0 0 25%;
}


li {
    list-style: none;
    margin-right: 35px;
    float: left;
    height: 59px;
    font-size: 18px;
    line-height: 59px;
    color: #000;
}

li:hover {
    color: #9e8d71;
    border-bottom: 2px solid #9e8d71;
    box-sizing: border-box;
}

ul .active {
    color: #9e8d71;
    border-bottom: 2px solid #9e8d71;
    box-sizing: border-box;
}

.login {
    float: right;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    /* border: #9e8d71 1px solid; */
    margin: -10px 0 0 20%;
}

.login .line {
    color: #000;
    font-size: 18px;
}

.login img {
    width: 14px;
    height: 14px;
}

.login a {
    margin: 0 10px;
    text-decoration: none;
    font-family: 微软雅黑;
    font-size: 16px;
    color: #000;
    font-family: fzyihei-m20s;
}

.login a:hover {
    color: #9e8d71;
    /* border-bottom: 2px solid #9e8d71; */
    box-sizing: border-box;
}

.logout {
    cursor: pointer;
}</style>
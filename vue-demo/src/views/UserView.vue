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
                <div class="sidebar">

                </div>
                <div class="content">

                </div>
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.box1 {
    display: flex;
    justify-content: space-around;
    width: 100%;
    /* background: red; */
    border: red 1px solid;
    height: 200px;
}

.head-img {
    width: 120px;
    height: 120px;
    margin-top: 3%;
    /* border: #9e9e9e 1px solid; */
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
    /* width: 1500px; */

}</style>


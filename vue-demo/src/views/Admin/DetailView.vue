<template>
    <div class="container">
        <div class="box">
            <div class="detail">
                <h1>基本信息</h1>
                <div class="detail-info">
                    <div class="detail-left">
                        <p>地址：<span>{{ houseList.location }}市{{ houseList.village }}</span></p>
                        <p>租赁方式：<span>{{ houseList.rental_type }}</span></p>
                        <p>房屋户型：<span>{{ houseList.bedroom }}室{{ houseList.livingroom }}厅{{ houseList.wc }}卫</span></p>
                        <p>建筑面积：<span>{{ houseList.area }}㎡</span></p>
                        <p>套内面积：<span>{{ houseList.inner_area }}㎡</span></p>
                        <p>装修情况：<span>{{ houseList.decoration }}</span></p>
                        <p>建筑类型：<span>多层</span></p>
                    </div>
                    <div class="detail-right">
                        <p>租金：<span>{{ houseList.price }}元/月</span></p>
                        <p>付款方式：<span></span></p>
                        <p>所在楼层：<span>{{ houseList.cur_floor }} | {{ houseList.tol_floor }}层</span></p>
                        <p>房屋类型：<span>{{ houseList.room_type }}</span></p>
                        <p>房屋朝向：<span>{{ houseList.direction }}</span></p>
                        <p>配备电梯：<span>{{ houseList.has_elevator === 'y' ? '有电梯' : '无电梯' }}</span></p>
                        <p>梯户比例：<span>{{ houseList.stair_to_house_ratio }}</span></p>
                    </div>
                </div>
                <h1>基础设施</h1>
                <div class="special">
                    <table class="basic-table" border="1">
                        <thead>
                            <tr>
                                <th width="140">编号</th>
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
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ houseList.id }}</td>
                                <td>{{ houseList.room_type }}</td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_elevator === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_ac === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_heater === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_bed === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_tv === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_fridge === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_wm === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_wifi === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.has_gas === 'y'"></i>
                                </td>
                                <td>
                                    <i class="el-icon-check" v-if="houseList.near_metro === 'y'"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="special-detail">
                        <p>核心卖点：<span>{{ houseList.highlights }}</span></p>
                        <p>户型介绍：<span>{{ houseList.house_introduce }}</span></p>
                        <p>小区介绍：<span>{{ houseList.village_introduce }}</span></p>
                        <p>周边配套：<span>{{ houseList.peripheral_matching }}</span></p>
                    </div>
                </div>
                <h1>房屋图片</h1>
                <div class="base-info">
                    <div class="main-info">
                        <div class="show-pic">
                            <div class="big-img">
                                <img :src="picList[cur_index]" alt="" @click="expandImg(picList[cur_index])">
                            </div>
                            <div v-if="show_img" class="modal" @click.self="closeImg">
                                <div class="modal-content">
                                    <span class="close" @click="closeImg">&times;</span>
                                    <img :src="big_img" class="modal-image">
                                </div>
                            </div>
                            <div class="image">
                                <div class="signal">
                                    <div class="arrow left-arrow" @click="handleLeftClick">&#10094;</div>
                                    <div class="img-container">
                                        <div class="img-show" ref="imgContainer">
                                            <img v-for="(image, index) in picList" :key="index" :src="image"
                                                class="img-content" :class="{ 'img-active': index === cur_index }"
                                                @click="imgChange(index)">
                                        </div>
                                    </div>
                                    <div class="arrow right-arrow" @click="handleRightClick">&#10095;</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import cookies from 'js-cookie'

export default {
    data() {
        return {
            houseList: [],
            houseId: '',
            isActive: 1,
            picList: [require('../../assets/img/detail_img/room0.jpg'), require('../../assets/img/detail_img/room1.jpg'), require('../../assets/img/detail_img/room2.jpg'), require('../../assets/img/detail_img/room3.jpg'), require('../../assets/img/detail_img/room4.jpg'), require('../../assets/img/detail_img/room5.jpg'), require('../../assets/img/detail_img/room6.jpg'), require('../../assets/img/detail_img/room7.jpg')],
            cur_index: 0,
            position: 0,
            show_img: false,
            big_img: '',
        }
    },
    methods: {
        getData() {
            axios.get('https://yapi.pro/mock/220305/houses').then((result) => {
                this.houseList = result.data.data;
                console.log('id of house:', this.houseList[this.houseId - 1]);
                this.houseList = this.houseList[this.houseId - 1];
            });
        },
        handleLeftClick() {
            if (this.cur_index > 0) {
                this.cur_index--;
            } else {
                this.cur_index = this.picList.length - 1;
            }
            const container = this.$refs.imgContainer;
            const imgWidth = 125;
            this.position -= imgWidth;
            container.scrollLeft = this.position;
        },
        handleRightClick() {
            if (this.cur_index < this.picList.length - 1) {
                this.cur_index++;
            } else {
                this.cur_index = 0;
            }
            const container = this.$refs.imgContainer;
            // console.log(container.scrollLeft);
            const imgWidth = 125;
            this.position += imgWidth;
            if (this.position >= (this.picList.length * imgWidth)) {
                this.position = 0;
            }
            container.scrollLeft = this.position;
        },
        imgChange(index) {
            this.cur_index = index;
        },
        expandImg(selected) {
            this.big_img = selected;
            this.show_img = true;
        },
        closeImg() {
            this.show_img = false;
        }
    },
    mounted() {
        this.getData();
        this.houseId = /* cookies.get('houseId') */ 1;
        console.log('id: ', this.houseId);
    },
}
</script>

<style>
.box {
    margin: 0 5%;
}

h1 {
    margin: 30px 0;
    font-size: 25px;
    color: #333;
}

.main-info {
    display: flex;
    justify-content: space-between;
}

.show-pic {
    position: relative;
    height: 548px;
    margin: auto;
    width: 55%;
}

.big-img {
    height: 442px;
    position: relative;
    width: 100%;
}

.big-img img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    left: 0;
    top: 0;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
}

.modal-content {
    margin: 0 10% 0;
    padding: 20px;
    width: 80%;
}

.modal-image {
    width: 100%;
    /* 或者 'auto' 如果您希望保持图片的原始比例 */
    height: auto;
    /* 保持图片比例 */
}

.close {
    color: #9e8d71;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.modal {
    /* 当 showModal 为 true 时显示 */
    display: block;
    margin-bottom: -17px;
    padding-bottom: 17px;
    margin-right: -17px;
    padding-right: 17px;
}

.signal {
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.5);
    align-items: center;
    margin-top: -5%;
}

signal img {
    cursor: pointer;
    transition: transform 0.3s ease;
}

.signal img:hover {
    transform: scale(1.1);
}

.signal img:active {
    transform: scale(0.9);
}

.arrow {
    cursor: pointer;
    margin-bottom: 17px;
    user-select: none;
    /* color: #9e8d71; */
}

.left-arrow,
.right-arrow {
    font-size: 24px;
    width: 30px;
    text-align: center;
}

.img-content {
    flex: 0 0 auto;
    width: 120px;
    height: 90px;
    margin-right: 5px;
}

.img-show {
    width: auto;
    height: calc(90px + 17px);
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-behavior: smooth;
    align-items: flex-start;
    margin-bottom: -17px;
    padding-bottom: 17px;
    position: relative;
}

.img-container {
    margin: 0 5px;
    width: 510px;
    overflow: hidden;
    display: flex;
    position: relative;
}

.img-active {
    border: black 3px solid;

}

.detail-info {
    width: 70%;
    display: flex;
    justify-content: space-around;
    margin: auto;
}

.detail-info p {
    margin-bottom: 15px;
    font-size: 14px;
    color: #999;
}

.detail-info span {
    color: #333;
}
.special{
    border: #333 1px solid;
}
.special p {
    margin-bottom: 20px;
    font-size: 14px;
    color: #999;
}

.special span {
    color: #333;
}

.special .label {
    display: inline-block;
    padding: 4px;
    margin-right: 10px;
    color: #fff;
    border-radius: 4px;
    background: #5f1985;
}
.special-detail{
    border: #333 1px solid;
}
</style>
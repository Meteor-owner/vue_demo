<template>
    <div class="container">
        <main-bar></main-bar>
        <div class="box">
            <div class="page-nav">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>发布房源</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="main">
                <section>
                    <div class="title">
                        <h1>发布出租房源</h1>
                        <h3>上传您的出租房屋清单</h3>
                        <p>请在下面提供有关您出租房产的详细信息，以便与潜在租户分享。</p>
                    </div>
                    <div class="upload-form">
                        <form class="form">
                            <div class="form-item">
                                <label>所在城市</label>
                                <input type="text" id="address" name="address" placeholder="请输入城市名" aria-label="City"
                                    required />
                            </div>
                            <div class="form-item">
                                <label>小区</label>
                                <input type="text" id="community" name="community" placeholder="请输入小区名"
                                    aria-label="Community" required />
                            </div>
                            <div class="form-item">
                                <label>房屋地址</label>
                                <input type="text" id="building" name="building" placeholder="楼栋号" aria-label="Building"
                                    required />
                                <input type="text" id="unit" name="unit" placeholder="单元号" aria-label="Unit" required />
                                <input type="text" id="house" name="house" placeholder="门牌号" aria-label="House" required />
                            </div>
                            <div class="form-item">
                                <label style="padding-bottom: 0; padding-top: 15px;">期望租金</label>
                                <input type="number" id="price" name="price" placeholder="请输入您的期望租金" aria-label="Price"
                                    required />
                                <span class="span">元/月</span>
                            </div>
                            <div class="form-item">
                                <label>房屋布局</label>
                                <input type="number" id="bedrooms" name="bedrooms" placeholder="请输入房间数量"
                                    aria-label="Number of Bedrooms" required />
                                <input type="number" id="living_rooms" name="living_rooms" placeholder="请输入客厅数量"
                                    aria-label="Number of Living Rooms" required />
                                <input type="number" id="bathrooms" name="bathrooms" placeholder="请输入洗手间数量"
                                    aria-label="Number of Bathrooms" required />
                            </div>
                            <div class="form-item">
                                <label>出租方式</label>
                                <!-- <input type="text" id="rental_way" name="rental_way" placeholder="请选择"
                                    aria-label="RentalWay" required /> -->
                                <el-cascader :options="options" v-model="rental_way" placeholder="请选择"
                                    @change="handleWayChange" clearable></el-cascader>
                            </div>
                            <div class="form-item">
                                <label>称呼</label>
                                <input type="text" id="renter_name" name="renter_name" placeholder="我们应该如何称呼您"
                                    aria-label="RenterName" required />
                            </div>
                            <div class="form-item">
                                <label>手机号码</label>
                                <input type="text" id="phone" name="phone" placeholder="您的联系方式，方便我们及时与您联系"
                                    aria-label="Phone" required />
                            </div>
                            <button type="submit" onclick="event.preventDefault()">提交委托</button>
                        </form>
                    </div>
                </section>
            </div>

        </div>

        <footer-bar></footer-bar>
    </div>
</template>

<script>
import FooterBar from '../components/FooterBar.vue'
import MainBar from '../components/MainBar.vue'
export default {
    components: { MainBar, FooterBar },
    data() {
        return {
            community: '',
            options: [{
                value: 'integrating',
                label: '整租'
            }, {
                value: 'sharing',
                label: '合租'
            }]
        }
    }
}
</script>

<style scoped>
.box {
    margin: 0 auto;
    width: 1100px;
    padding: 0 10%;
}

.page-nav {
    margin-top: 10px;
    font-size: 14px;
}

.title {
    text-align: center;
}
.title h1{
    font-size: 28px;
}
.main {
    padding: 0 10%;
    margin-bottom: 5%;
}

.form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
}

form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
}

.form-item {
    border-bottom: 1px solid #ccc;
    display: flex;
}

.form-item label {
    height: 40px;
    margin: 0 4px;
    padding-top: 10px;
    width: 84px;
    font-size: 16px;
}

.form-item input[type="text"],
.form-item input[type="number"] {
    padding: 8px;
    width: 80%;
    border: none;
    height: 40px;
    margin-bottom: 5px;
    margin-top: -5px;
    font-size: 15px;
}

#bedrooms,
#living_rooms,
#bathrooms,
#building,
#unit,
#house {
    width: 30%;
    margin-left: 10px;
    background-color: #f5f5f6;
    margin-bottom: 5px;
    margin-top: -5px;
}

.span {
    margin-left: -48%;
    margin-top: 1.7%;
    font-weight: 800;
}

form button {
    background-color: #c30d23;
    color: white;
    width: 40%;
    border: none;
    padding: 8px;
    margin: 0 auto;
    border-radius: 4px;
    transition: transform 0.1s ease;
    height: 40px;
}

form button:hover {
    background-color: #e60000;
}

form button:active {
    transform: scale(0.95);
    border: none;
}
</style>

<style lang="scss">
.el-cascader-panel {
    height: 80px;
}

.el-cascader .el-input .el-input__inner:focus,
.el-cascader .el-input.is-focus .el-input__inner {
    border-color: #9e7d81
}

.el-cascader-node.in-active-path,
.el-cascader-node.is-active,
.el-cascader-node.is-selectable.in-checked-path {
    color: #9e7d81;
}

.el-input__inner::placeholder {
    color: #919ba2
}
</style>
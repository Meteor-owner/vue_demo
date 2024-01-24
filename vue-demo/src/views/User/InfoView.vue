<template>
    <div class="container-info">
      <div class="account">
        <el-form ref="form" :model="info" label-width="100px">
          <h2>个人信息</h2>
          <el-divider></el-divider>
          <el-form-item label="昵称">
            <span>{{ info.username }}</span>
          </el-form-item>
          <el-form-item label="手机号">
            <span>{{ info.phone }}</span>
          </el-form-item>
          <el-form-item label="头像">
            <img :src="getPath(info.head_img)" alt="">
          </el-form-item>
          <el-form-item label="邮箱">
            <span>{{ info.email }}</span>
          </el-form-item>
          <el-form-item label="姓名">
            <span>{{ info.name }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{ info.gender == 1 ? '男' : '女' }}</span>
          </el-form-item>
          <el-form-item label="个人介绍">
            <span>{{ info.desc }}</span>
          </el-form-item>
        </el-form>
      </div>
      <div class="edit">
        <el-button type="text" @click="dialogFormVisible = true"><span>编辑</span></el-button>
        <el-dialog title="基本信息" :visible.sync="dialogFormVisible">
          <div class="update">
            <el-form :model="form">
              <el-form-item label="昵称" :label-width="formLabelWidth">
                <el-input v-model="form.username" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="性别" :label-width="formLabelWidth">
                <el-radio-group v-model="form.gender">
                  <el-radio :label="'1'">男</el-radio>
                  <el-radio :label="'2'">女</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" :label-width="formLabelWidth">
                <el-input v-model="form.email" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="个人简介" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.desc" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" plain @click="tips">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      info: {},
      dialogFormVisible: false,
      formLabelWidth: '120px',
      last_info: [{
        username: '',
        name: '',
        gender: '',
        phone: '',
        email: '',
        desc: ''
      }],
      form: {}
    }
  },
  methods: {
    getDate() {
      axios.get('https://yapi.pro/mock/220305/userInfo').then((result) => {
        this.info = result.data.data[0];
        console.log(this.info);
      });
    },
    getPath(img) {
      return require('../../assets/img/' + img);
    },
    tips() {
      this.dialogFormVisible = false;
      this.$notify({
        title: '成功',
        message: '修改成功',
        type: 'success',
        duration: 2000
      });
    },
  },
  mounted() {
    this.getDate();
    this.form = this.last_info[0];
  },
}
</script>

<style scoped>
.container-info {
  width: 100%;
  background: #fff;
  height: 60%;
  position: relative;
}

.account {
  margin-top: 5%;
  /* border: red 1px solid; */
  background: #fff;
}

.account .el-form-item {
  padding-right: 10%;
}

.el-form-item span {
  font-size: 14px;
  margin-left: -40%;
  color: #909196;
}

.el-form-item img {
  height: 90px;
  width: auto;
  margin-left: -40%;
}

.edit {
  width: 20%;
  background: #fff;
  position: absolute;
  top: 0;
  right: 0;
}

.edit span {
  font-size: 15px;
  color: #9e7d81;
}

.update .el-input {
  width: 200px;
  float: left;
  margin-left: 5px;
}

.update .el-radio-group {
  float: left;
  margin-top: 15px;
  margin-left: 5px;
}

.update .el-textarea {
  width: 400px;
  margin-left: 5px;
  float: left;
}

.dialog-footer .el-button--primary {
  color: #FFF;
  background-color: #9e7d81;
  border-color: #9e7d81;
}

.dialog-footer .el-button--primary:hover {
  color: #FFF;
  background-color: #a38185;
  border-color: #a38185;
}
</style>

<style lang="scss">
.el-radio.is-checked .el-radio__inner {
  background-color: #9e7d81;
  border-color: #9e7d81;
}

.el-radio .el-radio__inner::before {
  border-color: #9e7d81;
}

.el-radio__inner:hover {
  border-color: #9e7d81;
}

.el-radio__input.is-checked+.el-radio__label {
  color: #9e7d81;
}

.el-form-item__label {
  font-size: 16px;
}
</style>

<template>
  <div class="container">
    <div class="account">
        <el-form ref="form" :model="account" label-width="100px">
          <el-form-item label="昵称"></el-form-item>
          <el-form-item label="手机号">
          </el-form-item>
          <el-form-item label="头像">

          </el-form-item>
          <el-form-item label="登录密码">
            <!-- <el-input type="password" v-model="form.password" autocomplete="off"></el-input> -->
          </el-form-item>
          <el-form-item label="邮箱">
            <!-- <el-input v-model="form.email"></el-input> -->
          </el-form-item>
        </el-form>
    </div>
    <div class="info">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account:[{
        username: '',
        phone: '',

      }]
    }
  }
}
</script>

<style scoped>
.container {
  width: 90%;
  border: red 1px solid;
}
</style>

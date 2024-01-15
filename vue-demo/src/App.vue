<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isRouterAlive: true
    }
  },
  provide() { // 父组件中返回要传给下级的数据
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      console.log('触发reload函数')
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true;
      });
    }
  }
}
</script>

<style></style>

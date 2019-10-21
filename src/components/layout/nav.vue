<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/network">网元管理</el-menu-item>
      <el-submenu index="/my">
        <template slot="title">我的</template>
        <el-menu-item index="/my-direct">我的指令</el-menu-item>
      </el-submenu>
      <el-submenu index="/setup">
        <template slot="title">系统设置</template>
        <el-menu-item index="/setup/role-set">选项1</el-menu-item>
      </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    name: 'Nav',
    data() {
      return {
        activeIndex: '/network',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>

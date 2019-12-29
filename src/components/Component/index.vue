<template>
  <div class="fill-contain flex" id="components">
    <el-menu background-color="#545c64" text-color="#fff" 
      :default-active="$route.path" active-text-color="#ffd04b" router>
      <el-menu-item v-for="value in labelList" :key="value.name"
        :index="value.path">
        <i :class="value.icon"></i>
        <span slot="title">{{value.name}}</span>
      </el-menu-item>
      </el-menu>
    <div class="flex-remain" style="margin-left:20px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      labelList: [
        { name:'图表', path:'/component/echart', icon:'el-icon-s-data'},
        { name:'Ztree', path:'/component/ztree', icon:'el-icon-share'},
        { name:'编辑器', path:'/component/editor', icon:'el-icon-edit'},
      ]
    }
  },
  mounted(){
    console.log(this.$route.path)
  }
};
</script>

<style>
</style>
<template>
  <el-dialog
    title="用户登录"
    :visible.sync="loginVisible"
    width="30%"
    center>
    <el-input v-model="username" placeholder="请输入用户名" style="margin-bottom:20px;"></el-input>
    <el-input v-model="password" placeholder="请输入密码"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="loginVisible = false">取 消</el-button>
      <el-button type="primary" @click="confirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data(){
    return {
      username:"",
      password:"",
      loginVisible:false
    }
  },
  methods:{
    ...mapActions('user',['delayMock']),
    toggleVisible(){
      this.loginVisible = !this.loginVisible;
    },
    confirm(){
      this.delayMock({name:this.username});
      this.toggleVisible()
    }
  }
}
</script>

<style>

</style>
<template>
  <div id="app">
    <layoutHead>
      <template v-slot:logo>
        <img src="/images/logo.jpg" alt="logo">
      </template>
      <template v-slot:nav>
        <ul class="flex-align-center">
          <router-link tag="li" v-for="value in menus" 
          :key="value.path" :to="value.path">{{value.name}}</router-link>
        </ul>
      </template>
      <template v-slot:login>
        <div class="login" v-if="userInfo.name">{{userInfo.name}}</div>
        <div class="login" v-else @click="login">登录</div>
      </template>
    </layoutHead>
    <layoutMain></layoutMain>
    <login ref="login"></login>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import layoutHead from 'cps/common/layoutHead'
import layoutMain from 'cps/common/layoutMain'
import login from 'cps/Login'
export default {
  components:{
    layoutHead,
    layoutMain,
    login
  },
  data(){
    return {
      menus:[
        {name:'首页',path:'/home'},
        {name:'组件',path:'/component'},
      ]
    }
  },
  computed:{
    ...mapGetters(['userInfo'])
  },
  methods:{
    login(){
      this.$refs.login.toggleVisible();
    }
  }
}
</script>
<style lang="scss">
img {
  width: 40px;
  height: auto;
  border-radius: 50%;
}
ul {
  margin-left: 30px; 
  li {
    line-height: $head-height;
    padding: 0 25px;
    cursor: pointer;
    &:hover {
      background: rgba(0,0,0,.2);
    }
  }
}
.login {
  cursor: pointer;
}

</style>

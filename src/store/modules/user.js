import { Loading } from 'element-ui';
const user = {
  state:{
    userInfo:{}
  },
  mutations:{
    USER_CHANGE:(state, userInfo) => {
      state.userInfo = userInfo;
    }
  },
  actions:{
    delayMock({commit}, userInfo){
      let loadingInstance = Loading.service({ 
        fullscreen: true ,
        text:'登录中，请稍后...',
        background:'rgba(0,0,0,.6)'
      });
      setTimeout(() => {
        loadingInstance.close();
        commit('USER_CHANGE', userInfo)
      },1500)
    }
  },
  namespaced:true
}
export default user;
import {defineStore} from 'pinia';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    userData: 'datos de usuario',
  }),
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    setUserData(payload){
      this.userData = payload;
    }
  }
})
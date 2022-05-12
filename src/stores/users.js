import {defineStore} from 'pinia';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    name: "",
    entryChannel: "",
    token: "",
    idVendor: "",
    rpt:"",
  }),
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    currentUser(){
      return (this.name !== "" && this.entryChannel !== "" && this.token !== "" && this.idVendor !== "" && this.rpt !== "") ? true : false;
    },
    async getCities(){
      try {
        
      } catch (error) {
        
      }finally{

      }
    }
  }
})
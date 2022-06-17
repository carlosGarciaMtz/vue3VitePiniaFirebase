import {defineStore} from 'pinia';
import { useEnvironmentStore } from './environment.js';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    name: "",
    entryChannel: "",
    token: "",
    idVendor: "",
    rpt:"",
  }),
  persist: true,
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    currentUser(){
      return (this.name !== "" && this.entryChannel !== "" && this.token !== "" && this.idVendor !== "" && this.rpt !== "");
    },
    async getCities(){
      const env = useEnvironmentStore();
      try {
        const URLCITIES = env.env.api[env.env.stage].url + "/cities";
        let headers = new Headers();
        headers.append("Authorization", "LvBAPM3WDAO8d9hMBDFWvDsiRk28tvas");
        headers.append("x-access-origin", "IZZI");
        headers.append("x-access-channel", "Portal OC");

        const requestOptions = {
          method: "GET",
          headers: headers,
          redirect: "follow",
        };

        const resp = await fetch(URLCITIES, requestOptions).then(response => response.json());
        return resp
      } catch (error) {
        return error
      }
    },
    async loginOC(payload,city){
      const env = useEnvironmentStore();
      try {
        const URLLOGIN = env.env.api[env.env.stage].auth

        const headers = new Headers();
        headers.append("x-access-origin", "IZZI");
        headers.append("x-access-channel", "PORTALOC");
        headers.append("Content-Type", "application/json");

        var requestOptions = {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(payload),
          redirect: 'follow'
        };

        const resp = await fetch(URLLOGIN,requestOptions).then(response => response.json());  
        console.log("response loginOC", resp)
        if(!resp.response){
          if(resp.message){
            return {message:resp.message} 
          }
          return {message:resp.izziError}
        }

        this.name = resp.response.nombre;
        this.entryChannel = resp.response.canal;
        this.token = resp.response.token;
        this.idVendor = resp.response.vendedor;
        this.rpt = city
        return true;

      } catch (error) {
        return {message:error.message}
      }
    },
    logout(){
      this.$reset();
    },
    async getCarrusel(){
      const env = useEnvironmentStore();
      try {
        const URL = env.env.api[env.env.stage].url + `/carrusel?rpt=${this.rpt}`;
        let headers = new Headers();
        headers.append("x-access-origin", "IZZI");
        headers.append("x-access-channel", "PORTAL OC");

        const requestOptions = {
          method: "GET",
          headers: headers,
          redirect: "follow",
        };

        const resp = await fetch(URL, requestOptions).then(response => response.json());
        return resp
      } catch (error) {
        return error
      }
    }
  }
})
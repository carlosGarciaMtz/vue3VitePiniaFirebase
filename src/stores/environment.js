import {defineStore} from 'pinia';

export const useEnvironmentStore = defineStore('env',{
  state: () => ({
    env: {
      stage: "test",
      api: {
          url: "https://i6u3l5bzrbfldgkdy7yrbhj4hy.appsync-api.us-east-2.amazonaws.com/graphql",
          key: "da2-xiswyvcqqbadfm5ygtlkcnxqom",
          proxy:{
              url: "https://dev.izziapiweb.mx/izziuxp-web-oc/v1/api",
              auth: "https://dev.izziapiweb.mx/izziuxp-web-oc/v1/auth/loginOC"
          },
          dev:{
              url: "https://dev.izziapiweb.mx/izziuxp-web-oc/v1/api",
              auth: "https://dev.izziapiweb.mx/izziuxp-web-oc/v1/auth/loginOC"
          },
          test:{
              url: "https://test.izziapiweb.mx/izziuxp-web-oc/v1/api",
              auth: "https://test.izziapiweb.mx/izziuxp-web-oc/v1/auth/loginOC"
          }
      },
      api2:{
          dev:{
              url: "https://dev.izziapiweb.mx/izzimovilapi/dev",
              auth: "https://dev.izziapiweb.mx/izzimovilapi/auth/dev/login",
              key : "ypgx9tIp6PbmZlnFJiA5vvUnW1WeAHaT"	
          },
          test:{
              url: "https://test.izziapiweb.mx/izzimovilapi/test",
              auth: "https://test.izziapiweb.mx/izzimovilapi/auth/test/login",
              key : "EV5JPlu9OdSt3rZt1gSYnBSbeRRUVi5O"			
          }
      }
    }
  }),
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    setStage(payload){
      this.env.stage = payload;
    },
    setEnv(payload){
      this.env = payload;
    }
  }
})
import {defineStore} from 'pinia';

export const useEnvStore = defineStore('envStore',{
  state: () => ({
    env:{
      prod:{
        loginURI: 'signin',
        logoutURI: 'signout',
        tokenURL: 'http://172.21.151.23:9000',
        tokenURL:  'http://172.21.151.23:9000',
        loginURL: 'https://www.izziflex.mx/flex-api/login/',
        serverURL: 'https://www.izziflex.mx/flex-api/services',
        servicesURL: 'https://api.wizzplus.mx/',
        serviciosIzzi:'https://api.wizzplus.mx/',
      },
      dev:{
        loginURI: 'signin',
        logoutURI: 'signout',
        tokenURL: 'http://172.21.151.23:9000',
        tokenURL:  'http://172.21.151.23:9000',
        loginURL: 'http://52.1.210.173:8081/flex-api/login/',
        serverURL: 'http://52.1.210.173:8081/flex-api/services',
        servicesURL: 'http://200.77.160.48/wizzmobile/',
        serviciosIzzi:'http://200.77.160.48/wizzmobile/',
      }
    },
    envStage: "",
  }),
  getters: {  
  },
  actions:{
    setEnv(payload){
      this.envStage = payload;
    }
  }
})
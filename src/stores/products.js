import { defineStore } from 'pinia';
import { useEnvStore } from './enviroment.js'

export const useProductStore = defineStore('productStore',{
  state: () => ({
    loader: false,
    pocket:[],
    flex: [],
    typeProduct:"",
  }),
  getters: {
  },
  actions:{
    async getProducts(productType){
      this.loader = true;
      const envStore = useEnvStore();
      const  URL = envStore.env[envStore.envStage].serverURL + `/products/?productType=${productType}`;
      try {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
        const resp = await fetch(URL, requestOptions).then(response => response.json());
        productType== 'POCKET'? this.pocket=resp.response : this.flex=resp.response;
        this.typeProduct = productType
      } catch (error) {
        console.table(error);
      }finally{
        this.loader = false;
      }
    }
  }
})
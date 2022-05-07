import {defineStore} from 'pinia';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    userData: {}
  }),
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    async registerUser(email, password){
      try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        this.userData = user
      } catch (error) {
        console.log(error);
      }
    }
  }
})
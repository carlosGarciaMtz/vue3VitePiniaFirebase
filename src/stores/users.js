import {defineStore} from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    userData: null,
    loader:false,
  }),
  getters: {
    minuscula(state){
      return state.userData.toLowerCase();
    }
  },
  actions:{
    async registerUser(email, password){
      this.loader = true;
      try {
        const {user} = await createUserWithEmailAndPassword(auth, email, password);
        this.userData = {
          email: user.email,
          uid: user.uid
        };
        router.push('/');
      } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
          alert(`El email ${email} ya esta registrado`);
        }
      }finally{
        this.loader = false;
      }
    },
    async login(email, password) {
      this.loader = true;
      try {
        const {user} = await signInWithEmailAndPassword(auth, email, password);
        this.userData = {
          email: user.email,
          uid: user.uid
        };
        router.push('/');
      } catch (error) {
        console.table(error)
      } finally {
        this.loader = false;
      }
    },
    async logout() {
      this.loader = true;
      try {
        await signOut(auth);
        this.userData = null;
        router.push('/login');
      } catch (error) {
        console.table(error);
      } finally {
        this.loader = false;
      }
    }
  }
})
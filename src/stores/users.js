import {defineStore} from 'pinia';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router';
import { useDatabaseStore } from './database';

export const useUserStore = defineStore('userStore',{
  state: () => ({
    userData: null,
    loader:false,
    loadingSessions: false,
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
      const databaseStore = useDatabaseStore();
      this.loader = true;
      try {
        await signOut(auth);
        databaseStore.$reset();
        this.userData = null;
        router.push('/login');
      } catch (error) {
        console.table(error);
      } finally {
        this.loader = false;
      }
    },
    currentUser(){
      return new Promise((resolve, reject)=>{
        const unsuscribe = onAuthStateChanged(auth, user =>{
          if(user){
            this.userData = { email: user.email, uid: user.uid };
          }else{
            this.userData = null;
          }
          resolve(user);
        }, e =>{
          reject(e);
        });

        unsuscribe();
      });
    }
  }
})
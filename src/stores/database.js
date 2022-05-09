import { addDoc, collection, doc, deleteDoc, getDoc, getDocs, query, where, updateDoc } from 'firebase/firestore/lite';
import {defineStore} from 'pinia';
import { db } from '../firebaseConfig';
import { auth } from '../firebaseConfig';
import { nanoid } from 'nanoid';
import  router  from '../router';

export const useDatabaseStore = defineStore('databaseStore',{
  state: () => ({
    documents: [],
    loadingDoc: false,
  }),
  actions:{
    async getUrls(){
      this.loadingDoc = true;
      try {
        if(this.documents.length !== 0){
          return
        }
        const q = query(collection(db, 'urls'),where('user', '==', auth.currentUser.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          this.documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      } catch (error) {
        console.table(error);
      }finally {
        this.loadingDoc = false;
      }
    },
    async addUrl(name){
      try {
        const objDoc = {
          name:name,
          short:nanoid(6),
          user: auth.currentUser.uid
        }
        const docRef = await addDoc(collection(db, 'urls'), objDoc);
        this.documents.push({
          ...objDoc,
          id: docRef.id
        })
      } catch (error) {
        console.table(error);
      }
    },
    async deleteUrl(id){
      try {
        const docRef = doc(db, 'urls', id)
        const docexist = await getDoc(docRef);
        if(!docexist.exists()){
          throw new Error('No existe documento');
        }
        if(docexist.data().user !== auth.currentUser.uid){
          throw new Error('No tienes permisos');
        }

        await deleteDoc(docRef);
        this.documents = this.documents.filter(doc => doc.id !== id);
      } catch (error) {
        console.table(error);
      }
    },
    async updateUrl(id, name){
      try {
        const docRef = doc(db, 'urls', id)
        const docexist = await getDoc(docRef);

        if(!docexist.exists()){
          throw new Error('No existe documento');
        }
        if(docexist.data().user !== auth.currentUser.uid){
          throw new Error('No tienes permisos');
        }

        await updateDoc(docRef,{ name:name })
        this.documents = this.documents.map(doc => doc.id === id? ({...doc, name:name}) : doc);
        router.push('/');
      } catch (error) {
        console.table(error);
      }finally {

      }
    },
    async getUrl(id){
      try {
        const docRef = doc(db, 'urls', id)
        const docexist = await getDoc(docRef);

        if(!docexist.exists()){
          throw new Error('No existe documento');
        }
        if(docexist.data().user !== auth.currentUser.uid){
          throw new Error('No tienes permisos');
        }

        return docexist.data().name;

      } catch (error) {
        console.table(error);
      }finally {

      }
    }
  }
})
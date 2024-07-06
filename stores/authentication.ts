import { defineStore } from "pinia";
import {app, auth, provider,signInWithRedirect,getRedirectResult} from '../ts/firebase'


export const authentication = defineStore('authentication', ()=>{

    const authenticate =  async() => {
        try {
            signInWithRedirect(auth, provider)
            const result = await getRedirectResult(auth)
            console.log(result)
        } catch (error) {
            console.log(error);
            
        }
    }

    return {authenticate}
})
    

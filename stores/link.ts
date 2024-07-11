import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import {
  dataBase,
  doc,
  arrayRemove,
  arrayUnion,
  updateDoc,
  setDoc,
  auth
} from '../ts/firebase-config'
import { useAuthenticationStore } from './authentication'

export const useLinkStore = defineStore('link', () => {
  const generateOptions = {
    method: 'POST',
    url: 'https://ultrafast-url-shortener-with-customizations.p.rapidapi.com/ext/api/url/add',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'ultrafast-url-shortener-with-customizations.p.rapidapi.com',
      'Content-Type': 'application/json',
      'X-API-KEY': import.meta.env.VITE_RAPID_API_KEY
    },
    data: {
      url: '',
      domain: '',
      custom: ''
    }
  }

  const generateLink = async (longUrl: string, domain: string, alias: string) => {
    generateOptions.data = {
      url: longUrl,
      domain: domain,
      custom: alias
    }
    try {
      const response = await axios.request(generateOptions)
      await updateDoc(doc(dataBase, 'userData', auth.currentUser?.email as string), {
        linksInfo: arrayUnion({
          linkId: response.data.id,
          longUrl: longUrl,
          shortUrl: response.data.shorturl,
          timeCreated: new Date().toDateString(),
          clicks: 0,
          status: 'Active'
        })
      })
    } catch (error) {
      console.error(error)
    }
  }

  return { generateLink }
})

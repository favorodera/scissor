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
import { useDatabaseStore } from './database'

export const useShortenerStore = defineStore('shortener', () => {
  const { fetchUserData } = useDatabaseStore()
  const generateLinkOptions = {
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

  const generateQrCodeOptions = {
    method: 'GET',
    url: 'https://qr-code-generator20.p.rapidapi.com/generatebasicbase64',
    params: {
      data: ''
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'qr-code-generator20.p.rapidapi.com'
    }
  }

  const generateLink = async (longUrl: string, alias: string) => {
    generateLinkOptions.data = {
      url: longUrl,
      domain: 'https://linkdom.co',
      custom: alias
    }
    try {
      const linkResponse = await axios.request(generateLinkOptions)
      generateQrCodeOptions.params.data = linkResponse.data.shorturl
      const qrCodeResponse = await axios.request(generateQrCodeOptions)

      await updateDoc(doc(dataBase, 'userData', auth.currentUser?.email as string), {
        linksInfo: arrayUnion({
          linkId: linkResponse.data.id,
          longUrl: longUrl,
          shortUrl: linkResponse.data.shorturl,
          qrCode: qrCodeResponse.data,
          timeCreated: new Date().toDateString(),
          clicks: 0,
          status: 'Active'
        })
      })
      await fetchUserData()
    } catch (error) {
      console.error(error)
    }
  }

  return { generateLink }
})

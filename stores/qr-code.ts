import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

export const useQrCodeStore = defineStore('qr-code', () => {
  const qrCode = ref<string | null>(null)

  const options = {
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
  const generateQrCode = async (shortUrl: string) => {
    options.params.data = shortUrl
    try {
      const response = await axios.request(options)
      qrCode.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { qrCode, generateQrCode }
})

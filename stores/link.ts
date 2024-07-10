import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useLinkStore = defineStore('link', () => {
  const shortUrl = ref<string | null>(null)

  const generateOptions = {
    method: 'POST',
    url: 'https://api.tinyurl.com/create',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TINY_URL_API_TOKEN}`,
      'Content-Type': 'application/json',
      accept: 'application/json'
    },
    data: {
      url: ''
    }
  }

  const generateLink = async (longUrl: string) => {
    generateOptions.data.url = longUrl
    try {
      const response = await axios.request(generateOptions)
      shortUrl.value = response.data
    } catch (error) {
      console.error(error)
    }
  }

  return { shortUrl, generateLink }
})

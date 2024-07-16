import { defineStore } from 'pinia'
import axios from 'axios'
import { dataBase, doc, arrayUnion, updateDoc, auth } from '../ts/firebase-config'
import { useDatabaseStore } from './database'
export const useShortenerStore = defineStore('shortener', () => {
  const { fetchUserData, parsedUserData, email } = useDatabaseStore()

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

  const fetchAnalytics = async (): Promise<Array<{ linkId: string; clicks: number }>> => {
    try {
      const analyticsData: Array<{ linkId: string; clicks: number }> = []
      const linksInfo = await JSON.parse(parsedUserData as string).linksInfo

      for (const linkInfo of linksInfo) {
        const linkId: string = linkInfo.linkId
        const getAnalyticsOptions = {
          method: 'GET',
          url: `https://ultrafast-url-shortener-with-customizations.p.rapidapi.com/ext/api/url/${linkId}`,
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
            'x-rapidapi-host': 'ultrafast-url-shortener-with-customizations.p.rapidapi.com',
            'X-API-KEY': import.meta.env.VITE_RAPID_API_KEY
          }
        }

        const analyticsResponse = await axios.request<{ data: { clicks: number } }>(
          getAnalyticsOptions
        )
        analyticsData.push({ linkId, clicks: analyticsResponse.data.data.clicks })

        await updateDoc(doc(dataBase, 'userData', email as string), {
          linksInfo: arrayUnion(
            ...linksInfo.map((obj: { linkId: string; clicks: number }) => {
              if (obj.linkId === linkId) {
                return { ...obj, clicks: analyticsResponse.data.data.clicks }
              }
              return obj
            })
          )
        })
      }
      return analyticsData
    } catch (error: any) {
      console.error(error)
      throw error
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
      await fetchUserData(email as string)
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      console.error(error)
    }
  }

  return { generateLink, fetchAnalytics }
})

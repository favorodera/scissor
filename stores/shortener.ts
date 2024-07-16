import { defineStore } from 'pinia'
import axios from 'axios'
import { dataBase, doc, arrayUnion, updateDoc, auth } from '../ts/firebase-config'
import { useDatabaseStore } from './database'

export const useShortenerStore = defineStore('shortener', () => {
  // Import the necessary functions and data from the database store
  const { fetchUserData, parsedUserData } = useDatabaseStore()

  // Define the options for generating a new link
  const generateLinkOptions = {
    // Set the HTTP method and URL
    method: 'POST',
    url: 'https://ultrafast-url-shortener-with-customizations.p.rapidapi.com/ext/api/url/add',
    headers: {
      // Set the API keys and Content-Type headers
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'ultrafast-url-shortener-with-customizations.p.rapidapi.com',
      'Content-Type': 'application/json',
      'X-API-KEY': import.meta.env.VITE_RAPID_API_KEY
    },
    // Set the data to be sent in the request body
    data: {
      url: '',
      domain: '',
      custom: ''
    }
  }

  // Define the options for generating a QR code
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

  // Define an asynchronous function to fetch analytics data
  const fetchAnalytics = async (): Promise<Array<{ linkId: string; clicks: number }>> => {
    try {
      // Initialize an array to store the analytics data
      const analyticsData: Array<{ linkId: string; clicks: number }> = []
      // Get the linksInfo array from the parsed user data
      const linksInfo = await JSON.parse(parsedUserData as string).linksInfo

      // Iterate over each linkInfo object in the linksInfo array
      for (const linkInfo of linksInfo) {
        // Get the linkId from the linkInfo object
        const linkId: string = linkInfo.linkId
        // Set the options for fetching analytics data for the current link
        const getAnalyticsOptions = {
          method: 'GET',
          url: `https://ultrafast-url-shortener-with-customizations.p.rapidapi.com/ext/api/url/${linkId}`,
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
            'x-rapidapi-host': 'ultrafast-url-shortener-with-customizations.p.rapidapi.com',
            'X-API-KEY': import.meta.env.VITE_RAPID_API_KEY
          }
        }

        // Fetch the analytics data for the current link and store it in the analyticsData array
        const analyticsResponse = await axios.request<{ data: { clicks: number } }>(
          getAnalyticsOptions
        )
        analyticsData.push({ linkId, clicks: analyticsResponse.data.data.clicks })

        // Update the linksInfo array in the userData document in Firestore with the updated click count for the current link
        await updateDoc(doc(dataBase, 'userData', auth.currentUser?.email as string), {
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
      // Return the analyticsData array
      return analyticsData
    } catch (error: any) {
      // Log and re-throw any errors that occur
      console.error(error)
      throw error
    }
  }

  // Define an asynchronous function to generate a new link
  const generateLink = async (longUrl: string, alias: string) => {
    // Set the data in the generateLinkOptions object with the provided longUrl and alias
    generateLinkOptions.data = {
      url: longUrl,
      domain: 'https://linkdom.co',
      custom: alias
    }
    try {
      // Send a request to generate a new link and store the response
      const linkResponse = await axios.request(generateLinkOptions)
      // Set the data in the generateQrCodeOptions object with the generated short URL
      generateQrCodeOptions.params.data = linkResponse.data.shorturl
      // Send a request to generate a QR code for the generated short URL and store the response
      const qrCodeResponse = await axios.request(generateQrCodeOptions)

      // Update the linksInfo array in the userData document in Firestore with the generated link data
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
      // Fetch the updated user data from Firestore
      await fetchUserData(auth.currentUser?.email as string)
      // Reload the current page after a short delay to update the UI with the new link information
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    } catch (error) {
      // Log and re-throw any errors that occur
      console.error(error)
      throw error
    }
  }

  // Return an object with the generateLink and fetchAnalytics functions as properties
  return { generateLink, fetchAnalytics }
})

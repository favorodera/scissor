import { defineStore } from 'pinia'
import axios, { type AxiosRequestConfig } from 'axios'
import { dataBase, doc, arrayUnion, updateDoc, auth } from '../ts/firebase-config'
import { useDatabaseStore } from './database'
import { ref } from 'vue'

// Define a Pinia store for managing the shortener functionality
export const useShortenerStore = defineStore('shortener', () => {
  // Import the necessary functions and data from the database store
  const { fetchUserData, parsedUserData } = useDatabaseStore()

  // Define a reactive state for storing the current state of the fetch
  const fetchState = ref<string>('Awaiting Long URL...')

  // Define the options for generating a new link
  const generateLinkOptions: AxiosRequestConfig = {
    // Set the HTTP method and URL
    method: 'POST',
    url: 'https://url-link-shortener-and-qr-code-generator.p.rapidapi.com/ext/api/url/add',
    headers: {
      // Set the API keys and Content-Type headers
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'url-link-shortener-and-qr-code-generator.p.rapidapi.com',
      'Content-Type': 'application/json',
      'X-API-KEY': import.meta.env.VITE_RAPID_API_KEY
    },
    // Set the data to be sent in the request body
    data: {
      url: '',
      domain: ''
    }
  }

  // Define the options for generating a QR code
  const generateQrCodeOptions: AxiosRequestConfig = {
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

  /**
   * Fetches analytics data for all generated links.
   * @returns An array of objects containing linkId and click count.
   * @throws If an error occurs during the fetch, it will be re-thrown.
   */
  const fetchAnalytics = async (): Promise<{ linkId: string; clicks: number }[]> => {
    try {
      // Initialize an array to store the analytics data
      const analyticsData: { linkId: string; clicks: number }[] = []
      // Get the linksInfo array from the parsed user data
      const linksInfo = await JSON.parse(parsedUserData as string).linksInfo

      // Iterate over each linkInfo object in the linksInfo array
      for (const linkInfo of linksInfo) {
        // Get the linkId from the linkInfo object
        const linkId: string = linkInfo.linkId
        // Set the options for fetching analytics data for the current link
        const getAnalyticsOptions: AxiosRequestConfig = {
          method: 'GET',
          url: `https://url-link-shortener-and-qr-code-generator.p.rapidapi.com/ext/api/url/${linkId}`,
          headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
            'x-rapidapi-host': 'url-link-shortener-and-qr-code-generator.p.rapidapi.com',
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
      return error
    }
  }

  /**
   * Generates a new link.
   * @param longUrl The long URL to be shortened.
   * @param alias An optional alias for the short URL.
   * @throws If an error occurs during the link generation, it will be re-thrown.
   */
  const generateLink = async (longUrl: string, alias: string): Promise<void> => {
    // Set the data in the generateLinkOptions object with the provided longUrl and alias
    generateLinkOptions.data = {
      url: longUrl,
      domain: 'https://linkdom.co'
    }
    if (alias !== '') {
      generateLinkOptions.data.custom = alias
    }
    try {
      if (
        longUrl !== '' ||
        longUrl.includes('https://') === true ||
        longUrl.includes('http://') === true
      ) {
        fetchState.value = 'Generating URL... Please wait...'
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
            longUrl,
            shortUrl: linkResponse.data.shorturl,
            qrCode: qrCodeResponse.data,
            timeCreated: new Date().toDateString(),
            clicks: 0,
            status: 'Active'
          })
        })
        // Fetch the updated user data from Firestore
        await fetchUserData(auth.currentUser?.email as string)

        fetchState.value = 'URL Generated Successfully... Refreshing Page...'

        // Reload the current page after a short delay to update the UI with the new link information
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      } else {
        fetchState.value = 'Please enter a valid long URL...'

        return
      }
    } catch (error) {
      fetchState.value = 'Failed to Generate Link... Please Try Again'
    }
  }

  // Return an object with the generateLink and fetchAnalytics functions as properties
  return { generateLink, fetchAnalytics, fetchState }
})

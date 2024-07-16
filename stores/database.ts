import { defineStore } from 'pinia'
import { ref } from 'vue'
import { dataBase, doc, getDoc } from '../ts/firebase-config'

// Define the type for userData which includes userInfo and linksInfo
type userData = {
  userInfo: {
    name: string // User's name
    email: string // User's email
    image: string // User's profile image URL
  }
  linksInfo: {
    linkId: string // ID of the link
    longUrl: string // Original long URL
    shortUrl: string // Shortened URL
    qrCode: string // QR code for the link
    timeCreated: string // Timestamp of when the link was created
    clicks: string | number // Number of clicks on the link
    status: string // Status of the link
  }[]
}

// Create a Pinia store named 'database' to manage user data
export const useDatabaseStore = defineStore('database', () => {
  // Define userData as a reactive reference to store user data
  const userData = ref<userData>()
  const parsedUserData = localStorage.getItem('userData')

  // Async function to fetch user data based on the current user's email
  const fetchUserData = async (currentUserEmail: string): Promise<void> => {
    try {
      // Get a reference to the user document in the database
      const userDocRef = doc(dataBase, 'userData', currentUserEmail as string)
      // Fetch the user document snapshot
      const userDocSnapshot = await getDoc(userDocRef)
      // Update the userData value with the user's info and links
      userData.value = {
        userInfo: userDocSnapshot.data()?.userInfo,
        linksInfo: userDocSnapshot.data()?.linksInfo
      }
      // Store the updated userData in localStorage
      localStorage.setItem('userData', JSON.stringify(userData.value))
    } catch (error) {
      // Log an error if fetching user data fails
      console.error('Error fetching user data:', error)
    }
  }

  // Return userData, fetchUserData function, and parsedUserData for use in components
  return {
    userData,
    fetchUserData,
    parsedUserData
  }
})

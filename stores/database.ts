// Import necessary dependencies from Pinia and Vue
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Import necessary dependencies from Firebase
import { dataBase, doc, getDoc, auth, updateDoc } from '../ts/firebase-config'

// Define the type for userData which includes userInfo and linksInfo
// This type is used to define the shape of the data that will be stored in the Pinia store
type userData = {
  // userInfo is an object containing the user's name, email, and profile image URL
  userInfo: {
    name: string // User's name
    email: string // User's email
    image: string // User's profile image URL
  }
  // linksInfo is an array of objects containing the linkId, longUrl, shortUrl, qrCode, timeCreated, clicks, and status of each link
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
// The Pinia store is used to manage user data and make it accessible to components
export const useDatabaseStore = defineStore('database', () => {
  // Define a reactive reference to store the history state
  // The history state is used to display a message to the user about the status of the deleteLink function
  const historyState = ref<string>('Double click on QR code to download')

  // Define a reactive reference to store user data
  // The user data is stored in the userData variable
  // The type of userData is set to userData, which was defined above
  const userData = ref<userData>()

  // Define a reference to the value of the 'userData' item in localStorage
  // The parsedUserData variable is used to store the value of the 'userData' item in localStorage
  const parsedUserData = localStorage.getItem('userData')

  // Define an async function to fetch user data based on the current user's email
  // This function takes the current user's email as a parameter and fetches the user data from the database
  const fetchUserData = async (currentUserEmail: string): Promise<void> => {
    try {
      // Get a reference to the user document in the database
      // The user document is stored in the 'userData' collection in the database
      // The document ID is set to the current user's email
      const userDocRef = doc(dataBase, 'userData', currentUserEmail as string)

      // Fetch the user document snapshot
      // The snapshot contains the user data that is stored in the database
      const userDocSnapshot = await getDoc(userDocRef)

      // Update the userData value with the user's info and links
      // The userData value is set to an object containing the user's info and links
      // The user's info is stored in the userInfo property of the userData object
      // The links are stored in the linksInfo property of the userData object
      // The linksInfo property is an array of objects containing the linkId, longUrl, shortUrl, qrCode, timeCreated, clicks, and status of each link
      userData.value = {
        userInfo: userDocSnapshot.data()?.userInfo,
        linksInfo: userDocSnapshot.data()?.linksInfo
      }

      // Store the updated userData in localStorage
      // The userData is stored in the 'userData' item in localStorage
      localStorage.setItem('userData', JSON.stringify(userData.value))
    } catch (error) {
      // Catch any errors that occur during the fetchUserData function
      // If an error occurs during the fetchUserData function, return undefined from the fetchUserData function
      // This means that if an error occurs, the function will return undefined instead of the user data
      // This is useful for handling errors in components that use the fetchUserData function
      return undefined
    }
  }

  // Define an async function to delete a link from the database
  const deleteLink = async (linkId: string) => {
    // Update the historyState to indicate that the link is being deleted
    historyState.value = 'Deleting...'

    try {
      // Get a reference to the user document in the database
      // The user document is stored in the 'userData' collection in the database
      // The document ID is set to the current user's email
      const userDocRef = doc(dataBase, 'userData', auth.currentUser?.email as string)

      // Fetch the user document snapshot
      // The snapshot contains the user data that is stored in the database
      const docSnapshot = await getDoc(userDocRef)

      // Check if the user document exists
      if (docSnapshot.exists()) {
        // Get the existing links from the user document
        const existingLinks = docSnapshot.data().linksInfo

        // Filter the existing links to remove the link with the specified linkId
        const updatedLinks = existingLinks.filter(
          (link: { linkId: string }) => link.linkId !== linkId
        )

        // Create an object containing the updated links
        const updateData = {
          linksInfo: updatedLinks
        }

        // Update the user document with the updated links
        await updateDoc(userDocRef, updateData)

        // Remove the history block element from the DOM
        document.querySelector('.history-block')?.remove()

        // Fetch the updated user data from the database
        await fetchUserData(auth.currentUser?.email as string)

        // Update the historyState to indicate that the link was deleted successfully
        historyState.value = 'Link deleted successfully'

        // Set the historyState to its original value after 2 seconds
        setTimeout(() => {
          historyState.value = 'Double click on QR code to download'
        }, 2000)
      }
    } catch (error) {
      // Catch any errors that occur during the deleteLink function
      // Update the historyState to indicate that an error occurred while deleting the link
      historyState.value = 'An error occurred while deleting the link'
    }
  }

  // Return userData, fetchUserData function, and parsedUserData for use in components
  // The userData, fetchUserData function, and parsedUserData are returned as an object
  // The object is used to access the userData, fetchUserData function, and parsedUserData in components
  return {
    deleteLink,
    userData,
    fetchUserData,
    parsedUserData,
    historyState
  }
})

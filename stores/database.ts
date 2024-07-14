import { defineStore } from 'pinia'
import { ref } from 'vue'
import { dataBase, doc, getDoc } from '../ts/firebase-config'

type userData = {
  userInfo: {
    name: string
    email: string
    image: string
  }
  linksInfo: {
    linkId: string
    longUrl: string
    shortUrl: string
    qrCode: string
    timeCreated: string
    clicks: string | number
    status: string
  }[]
}

export const useDatabaseStore = defineStore('database', () => {
  const userData = ref<userData>()

  const userEmail = localStorage.getItem('userEmail') as string
  const parsedUserData = localStorage.getItem('userData')

  const email = parsedUserData ? JSON.parse(parsedUserData as string).userInfo.email : ''
  const name = parsedUserData ? JSON.parse(parsedUserData as string).userInfo.name : ''
  const image = parsedUserData ? JSON.parse(parsedUserData as string).userInfo.image : ''

  const fetchUserData = async (registeredUserEmail: string): Promise<void> => {
    try {
      const userDocRef = doc(dataBase, 'userData', registeredUserEmail as string)
      const userDocSnapshot = await getDoc(userDocRef)
      userData.value = {
        userInfo: userDocSnapshot.data()?.userInfo,
        linksInfo: userDocSnapshot.data()?.linksInfo
      }
      localStorage.setItem('userData', JSON.stringify(userData.value))
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return {
    userData,
    fetchUserData,
    email,
    name,
    image,
    parsedUserData,
    userEmail
  }
})

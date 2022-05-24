import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
import { UserContext } from '../lib/context'
import { useAuthentication } from '../lib/useAuthentication'

function MyApp({ Component, pageProps }: AppProps) {
  const authInstance = useAuthentication()

  console.log(authInstance.user)

  return (
    <UserContext.Provider value={{ user: authInstance.user }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  )
}

export default MyApp

import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import { UserContext } from '../lib/context';
import { useAuthentication } from '../lib/useAuthentication';

function MyApp({ Component, pageProps }: AppProps) {
  const authInstance = useAuthentication();

  return (
    <UserContext.Provider value={{ user: authInstance.user }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;

import '@/styles/globals.css'
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserDataProvider from '@/context/UserDataProvider';;
import AuthenticatedLayer from './(protectedLayer)/AuthenticatedLayer';
import RoleLayer from './(protectedLayer)/RoleLayer';
import { useRouter } from 'next/router';
import { BoardProvider } from '@/context/BoardContext';


export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const router = useRouter();
  const protectedRoutePrefixes = ["general", "police", "super"];

  const isProtectedRoute = () => {
    const currentRoute = router.pathname;
    return protectedRoutePrefixes.some(prefix => currentRoute.startsWith(`/${prefix}`));
  };
  console.log("is route protercted", isProtectedRoute())

  return (

    <UserDataProvider>
      <NextTopLoader showSpinner={false} color="#6C72FF" />
      {isProtectedRoute() ? (
        <AuthenticatedLayer>
          <RoleLayer>
            <BoardProvider>
              <Component {...pageProps} />
            </BoardProvider>
          </RoleLayer>
        </AuthenticatedLayer>
      ) : (
        <Component {...pageProps} />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </UserDataProvider>
  )
}

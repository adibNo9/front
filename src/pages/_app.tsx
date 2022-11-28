import React, { useEffect, useRef, useState } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'

import ManagedDrawer from '@components/common/drawer/managed-drawer'
import { DefaultSeo } from '@components/common/default-seo'

// Load Open Sans and satisfy typeface font
import '@fontsource/open-sans'
import '@fontsource/open-sans/600.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/satisfy'
// external
import 'react-toastify/dist/ReactToastify.css'
// base css file
import '@styles/swiper-carousel.css'
import '@styles/custom-plugins.css'

import '@styles/custom.css'
import '@styles/tailwind.css'
import '@styles/fontello.css'
import 'swiper/css/bundle'
import { getDirection } from '@utils/get-direction'
import { AuthGuard } from '@components/guard/auth-guard'
import { theme } from '@shared/theme'
import { ThemeProvider } from '@mui/material'

function handleExitComplete() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0 })
  }
}

const Noop: React.FC = ({ children }) => <>{children}</>

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }
  const router = useRouter()
  const dir = getDirection(router.locale)
  useEffect(() => {
    document.documentElement.dir = dir
  }, [dir])
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <QueryClientProvider client={queryClientRef.current}>
          <Hydrate state={pageProps.dehydratedState}>
            {Layout.requireAuth ? (
              <AuthGuard>
                <Layout pageProps={pageProps} key={router.route}>
                  <DefaultSeo />
                  {/* if requireAuth property is present - protect the page */}

                  <Component {...pageProps} />

                  <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={true}
                    rtl={true}
                    pauseOnHover
                  />
                </Layout>
              </AuthGuard>
            ) : (
              <Layout pageProps={pageProps}>
                <DefaultSeo />
                {/* if requireAuth property is present - protect the page */}
                <Component {...pageProps} />
                <ToastContainer
                  position="bottom-right"
                  autoClose={5000}
                  hideProgressBar={true}
                  rtl={true}
                  pauseOnHover
                />
              </Layout>
            )}

            <ManagedDrawer />
          </Hydrate>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </AnimatePresence>
    </ThemeProvider>
  )
}

export default appWithTranslation(CustomApp)

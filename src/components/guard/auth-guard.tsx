import JSX, { useEffect } from 'react'
import { useRouter } from 'next/router'

import callMutation from 'src/framework/call-api'

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { isAuthorized, getUserData } = useUI()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthorized) {
      // remember the page that user tried to access
      router.push('/auth/signup')
    }
  }, [isAuthorized, router])

  const mutation = callMutation('UserShopInfo', {
    onSuccess: async response => {
      getUserData(response)
    },

  })

  useEffect(() => {
    mutation.mutate({})
  }, [router, router.asPath])

  /* show loading indicator while the auth provider is still initializing */
  if (!isAuthorized) {
    return <h1>Application Loading</h1>
  }

  // if auth initialized with a valid user show protected page
  if (isAuthorized) {
    return <>{children}</>
  }

  /* otherwise don't return anything, will do a redirect from useEffect */
  return null
}

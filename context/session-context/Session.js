import { Provider } from 'next-auth/client'

export default function SessionProvider({ children, Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      {children}
    </Provider>
  )
}
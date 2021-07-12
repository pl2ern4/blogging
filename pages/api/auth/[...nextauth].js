import NextAuth from 'next-auth'
import Providers from 'next-auth/providers';
const options = {
  site: process.env.NEXTAUTH_URL,
  providers: [
    Providers.Google({
        clientId: `187634261011-kus5llc9kdnl598tvraa05u4i0e05qqb.apps.googleusercontent.com`,
        clientSecret: `tyUBEdI61wE4p4Da5oeP-R1e`
    })
  ],
  pages: {
    signIn: '/signin',
    error: '/error'
    },
  callbacks:{
    async signIn() {
        return true
      },
      async redirect(url, baseUrl) {
        return baseUrl
      },
      async session(session) {
        return session
      },  
  },
  database: process.env.NEXTAUTH_DB
}

export default (req, res) => NextAuth(req, res, options)
import "../app/globals.css";
import { SessionProvider } from "next-auth/react"
import * as Jotai from "jotai";



export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Jotai.Provider>
        <Component {...pageProps} />
      </Jotai.Provider>
    </SessionProvider>
  )
}

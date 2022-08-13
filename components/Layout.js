import Head from "next/head"
import Footer from "./Footer"
import ThemeButton from "./theme-button"
import { Box } from "@chakra-ui/react"

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='https://www.freeiconspng.com/thumbs/pokeball-png/file-pokeball-png-0.png'/>
        <title>{title}</title>
      </Head>
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        <Box align="right">
          <ThemeButton />
        </Box>
        {children}
      </main>{" "}
      <Footer />
    </div>
  )
}

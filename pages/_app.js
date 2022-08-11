import "../styles/globals.css"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/Layout"
import theme from "../components/theme"

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout title="Jeehoon's Pokédex">
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}
export default MyApp

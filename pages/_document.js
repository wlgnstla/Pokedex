import NextDocument, {Html,Head,Main,NextScript} from 'next/document'
import theme from '../components/theme'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument{
  render(){
    return (
      <Html lang='en'>
        <Head/>
        <body>
          <ColorModeScript/>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

import { Box } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box fontSize='sm' align='center'>
      &copy; {new Date().getFullYear()} Jeehoon Sim. All Rights Reserved.
    </Box>
  )
}

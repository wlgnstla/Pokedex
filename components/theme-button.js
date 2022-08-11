import { AnimatePresence, motion } from "framer-motion"
import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"

const ThemeButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={useColorModeValue("light", "dark")}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          onClick={toggleColorMode}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          colorScheme={useColorModeValue("purple", "orange")}
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeButton

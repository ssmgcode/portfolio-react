import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const customTheme = {
  styles: {
    global: {
      body: {
        fontFamily: 'Inter',
      },
    },
  },
}

const theme = extendTheme(customTheme, { config })

export default theme

import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const customTheme = {
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
}

const theme = extendTheme(customTheme, { config })

export default theme

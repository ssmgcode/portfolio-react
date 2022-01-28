import { Box, Text, VStack } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import SSMGLogo from '../SSMGLogo'

const SSMGCodeBanner = (): JSX.Element => {
  const elementToContainAnimation = useRef<HTMLParagraphElement>(null)
  const typed = useRef<Typed>()

  useEffect(() => {
    typed.current = new Typed(elementToContainAnimation.current!, {
      strings: ['SSMG Code'],
      typeSpeed: 100,
      loop: true,
      backDelay: 3000,
      showCursor: false,
    })

    return () => {
      // Destroy Typed instance during cleanup to prevent memory leaks
      typed.current?.destroy()
    }
  }, [])

  return (
    <Box background="blue.900" paddingY="2em" width="100%" borderRadius="md">
      <VStack>
        <SSMGLogo fill="white" size="5em" />
        <Box
          color="white"
          fontFamily="IBM Plex Sans"
          fontWeight="bold"
          fontSize="1.5em"
        >
          <Text as="span">&lt;</Text>
          <Text as="span" ref={elementToContainAnimation} />
          <Text as="span">&nbsp;/&gt;</Text>
        </Box>
      </VStack>
    </Box>
  )
}

export default SSMGCodeBanner

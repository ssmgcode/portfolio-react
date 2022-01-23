import { Box, Text, VStack } from '@chakra-ui/react'
import SSMGLogo from '../SSMGLogo'

const SSMGCodeBanner = (): JSX.Element => (
  <Box background="blue.900" paddingY="2em" width="100%" borderRadius="md">
    <VStack>
      <SSMGLogo fill="white" size="5em" />
      <Text
        fontFamily="IBM Plex Sans"
        fontWeight="bold"
        color="white"
        fontSize="1.5em"
      >
        SSMG Code
      </Text>
    </VStack>
  </Box>
)

export default SSMGCodeBanner

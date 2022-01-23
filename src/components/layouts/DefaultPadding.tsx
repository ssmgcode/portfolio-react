import { Box } from '@chakra-ui/react'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const DefaultPadding = ({ children }: Props): JSX.Element => (
  <Box boxSize="100%" maxWidth="1000px" paddingX="1.5em">
    {children}
  </Box>
)

export default DefaultPadding

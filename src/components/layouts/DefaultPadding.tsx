import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const DefaultPadding = ({ children }: Props): JSX.Element => (
  <Box
    boxSize="100%"
    maxWidth="1000px"
    paddingX="1.5em"
    marginLeft="auto"
    marginRight="auto"
  >
    {children}
  </Box>
)

export default DefaultPadding

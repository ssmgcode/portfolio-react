import { ReactNode } from 'react'
import { Box } from '@chakra-ui/react'

interface Props {
  children?: ReactNode
}

const HomeCard = ({ children }: Props): JSX.Element => {
  return (
    <Box shadow="md" padding="1em">
      {children}
    </Box>
  )
}

export default HomeCard

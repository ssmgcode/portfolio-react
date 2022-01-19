import {
  Box,
  IconButton,
  HStack,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { HiDotsHorizontal } from 'react-icons/hi'
import { Link as RouterLink } from 'react-router-dom'
import SSMGLogo from '../SSMGLogo'

interface Props {
  children?: JSX.Element
}

const HeaderBar = ({ children }: Props): JSX.Element => {
  const background = useColorModeValue('white', 'gray.800')
  return (
    <Box
      height="70px"
      padding=".5em"
      paddingX="1.5em"
      boxShadow="xs"
      background={background}
    >
      <HStack height="100%" justifyContent="space-between">
        <Tooltip label="Go home" openDelay={500}>
          <Link as={RouterLink} to="/" height="80%">
            <SSMGLogo />
          </Link>
        </Tooltip>
        {children}
        <Tooltip label="Settings">
          <IconButton
            aria-label="Settings"
            icon={<HiDotsHorizontal />}
            variant="ghost"
            size="lg"
          />
        </Tooltip>
      </HStack>
    </Box>
  )
}

export default HeaderBar

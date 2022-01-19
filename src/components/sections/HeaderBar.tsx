import {
  Box,
  IconButton,
  HStack,
  Link,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
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
        <Tooltip label="Settings">
          <IconButton
            aria-label="Settings"
            icon={<HiDotsCircleHorizontal size="80%" />}
            variant="ghost"
            size="lg"
          />
        </Tooltip>
      </HStack>
    </Box>
  )
}

export default HeaderBar

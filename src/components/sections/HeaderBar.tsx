import { Box, IconButton, HStack, Link, Tooltip } from '@chakra-ui/react'
import { HiDotsCircleHorizontal } from 'react-icons/hi'
import { Link as RouterLink } from 'react-router-dom'
import SSMGLogo from '../SSMGLogo'

const NavBar = (): JSX.Element => {
  return (
    <Box height="70px" padding=".5em" paddingX="1.5em" boxShadow="xs">
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

export default NavBar

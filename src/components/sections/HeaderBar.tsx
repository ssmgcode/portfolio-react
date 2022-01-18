import { Box, IconButton, HStack, Link, Tooltip } from '@chakra-ui/react'
import { HiCog } from 'react-icons/hi'
import { Link as RouterLink } from 'react-router-dom'
import SSMGLogo from '../SSMGLogo'

const NavBar = (): JSX.Element => {
  return (
    <Box
      height="60px"
      padding=".5em"
      paddingX="1.5em"
      boxShadow="lg"
      background="blue.600"
    >
      <HStack height="100%" justifyContent="space-between">
        <Tooltip label="Go to home" openDelay={500}>
          <Link as={RouterLink} to="/" height="100%">
            <SSMGLogo fill="#ffffff" />
          </Link>
        </Tooltip>
        <Tooltip label="Settings">
          <IconButton
            aria-label="Settings"
            icon={<HiCog size="80%" />}
            variant="ghost"
            color="white"
            size="lg"
          />
        </Tooltip>
      </HStack>
    </Box>
  )
}

export default NavBar

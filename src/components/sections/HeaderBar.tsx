import { Box, IconButton, HStack, Link } from '@chakra-ui/react'
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
        <Link as={RouterLink} to="/" height="100%">
          <SSMGLogo fill="#ffffff" />
        </Link>
        <IconButton
          aria-label="Configuration"
          icon={<HiCog size="80%" />}
          variant="ghost"
          color="white"
          size="lg"
        />
      </HStack>
    </Box>
  )
}

export default NavBar

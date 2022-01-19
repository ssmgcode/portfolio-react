import { Box, HStack, Link, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import appRoutes from '../../routes'
import { useLocation } from 'react-router-dom'

const NavBar = (): JSX.Element => {
  const location = useLocation()

  return (
    <Box as="nav" height="100%">
      <HStack height="100%" justifyContent="space-evenly">
        {appRoutes.map(({ name, path, icon }) => (
          <Box
            key={path}
            background={location.pathname === path ? 'blue.500' : 'unset'}
            padding=".3em"
            borderRadius="base"
          >
            <Link
              as={RouterLink}
              to={path}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              color={location.pathname === path ? 'white' : 'unset'}
            >
              {icon}
              <Text fontSize=".9em" fontWeight="semibold">
                {name}
              </Text>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  )
}

export default NavBar

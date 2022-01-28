import { Box, HStack, Link, Text } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import appRoutes from '../../config/routes'

const NavBar = (): JSX.Element => {
  return (
    <Box as="nav" height="100%">
      <HStack height="100%" justifyContent="space-evenly">
        {appRoutes.map(({ name, path, icon }) => (
          <Link
            key={path}
            as={NavLink}
            to={path}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ '&.active': { color: 'white', background: 'blue.600' } }}
            paddingY=".5em"
            paddingX=".75em"
            borderRadius="base"
          >
            {icon}
            <Text fontSize=".9em" fontWeight="semibold">
              {name}
            </Text>
          </Link>
        ))}
      </HStack>
    </Box>
  )
}

export default NavBar

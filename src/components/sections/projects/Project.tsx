import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Link,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
interface Props {
  name: string
  description: string
  type: string

  image: string
  link: string
  githubLink?: string
}

const Project = ({
  name,
  description,
  type,
  image,
  link,
  githubLink,
}: Props): JSX.Element => {
  return (
    <Box sx={{ '.card:hover &': { translateY: '5px' } }}>
      <RouterLink to={name} className="card">
        <Box
          maxWidth="25em"
          borderRadius="md"
          borderWidth="1px"
          borderBottomWidth="5px"
          transform="translateY(0)"
          transition="ease"
          transitionProperty="all"
          transitionDuration=".1s"
          sx={{
            '.card:hover &': {
              borderBottomWidth: '10px',
              transform: 'translateY(-5px)',
            },
          }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image src={image} alt={name} />
          </Box>
          <Box padding="1em">
            <Link isExternal href={link}>
              <Heading as="h5" fontSize="2xl" marginBottom=".5em">
                {name}
              </Heading>
            </Link>
            <Badge marginBottom="1em">{type}</Badge>
          </Box>
        </Box>
      </RouterLink>
    </Box>
  )
}

export default Project

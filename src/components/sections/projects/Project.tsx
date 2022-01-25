import {
  Box,
  Heading,
  Image,
  Text,
  Badge,
  Link,
  HStack,
} from '@chakra-ui/react'
import { HiExternalLink } from 'react-icons/hi'
import TechnologiesManager from './TechnologiesManager'

interface Props {
  name: string
  type: string
  technologies: string[]
  image: string
  link: string
}

const Project = ({
  name,
  technologies,
  type,
  image,
  link,
}: Props): JSX.Element => {
  return (
    <Box
      maxWidth="20em"
      borderRadius="md"
      borderWidth="1px"
      boxShadow="md"
      padding="1em"
      borderBottomWidth="5px"
    >
      <Heading as="h5" fontSize="2xl" marginBottom=".5em">
        {name}
      </Heading>
      <Badge marginBottom="1em">{type}</Badge>
      <TechnologiesManager technologies={technologies} />
      <Box height="1em" />
      <Box
        borderWidth="1px"
        marginBottom=".5em"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image src={image} alt={name} />
      </Box>
      <Link isExternal color="blue.500" href={link}>
        <HStack>
          <Text>Visit site</Text>
          <HiExternalLink />
        </HStack>
      </Link>
    </Box>
  )
}

export default Project

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
    >
      <Heading as="h5" fontSize="2xl">
        {name}
      </Heading>
      <Badge>{type}</Badge>
      <Box height=".75em" />
      <TechnologiesManager technologies={technologies} />
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
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

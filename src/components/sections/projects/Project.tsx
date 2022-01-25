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
import { FaGithub } from 'react-icons/fa'

import TechnologiesManager from './TechnologiesManager'

interface Props {
  name: string
  type: string
  technologies: string[]
  image: string
  link: string
  githubLink?: string
}

const Project = ({
  name,
  technologies,
  type,
  image,
  link,
  githubLink,
}: Props): JSX.Element => {
  return (
    <Box
      maxWidth="25em"
      borderRadius="md"
      borderWidth="1px"
      padding="1em"
      borderBottomWidth="5px"
    >
      <Heading as="h5" fontSize="2xl" marginBottom=".5em">
        {name}
      </Heading>
      <Badge marginBottom="1em">{type}</Badge>
      <TechnologiesManager technologies={technologies} />
      {image && (
        <>
          <Box height="1em" />
          <Box
            borderWidth="1px"
            marginBottom=".5em"
            borderRadius="lg"
            overflow="hidden"
          >
            <Image src={image} alt={name} />
          </Box>
        </>
      )}
      <HStack justifyContent="space-between">
        <Link isExternal color="blue.500" href={link}>
          <HStack>
            <Text>Visit site</Text>
            <HiExternalLink />
          </HStack>
        </Link>
        {githubLink && (
          <Link isExternal color="blue.500" href={githubLink}>
            <HStack>
              <Text>Github</Text>
              <FaGithub />
            </HStack>
          </Link>
        )}
      </HStack>
    </Box>
  )
}

export default Project

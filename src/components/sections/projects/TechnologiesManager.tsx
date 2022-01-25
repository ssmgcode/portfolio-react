import { Box, HStack, Tag } from '@chakra-ui/react'

interface Props {
  technologies: string[]
}

const TechnologiesManager = ({ technologies }: Props): JSX.Element => {
  const formattedTechnologies = technologies.map((technology) => {
    if (technology === 'typescript') {
      return <Tag colorScheme="blue">Typescript</Tag>
    }

    if (technology === 'react') {
      return <Tag colorScheme="purple">React</Tag>
    }

    if (technology === 'dart') {
      return <Tag colorScheme="cyan">Dart</Tag>
    }

    if (technology === 'flutter') {
      return <Tag colorScheme="pink">Flutter</Tag>
    }

    if (technology === 'go') {
      return <Tag colorScheme="teal">Go</Tag>
    }

    if (technology === 'svelte') {
      return <Tag colorScheme="orange">Svelte</Tag>
    }

    return <Tag>technology</Tag>
  })

  return (
    <HStack spacing="3" overflow="auto">
      {formattedTechnologies.map((technology, index) => (
        <Box key={index}>{technology}</Box>
      ))}
    </HStack>
  )
}

export default TechnologiesManager

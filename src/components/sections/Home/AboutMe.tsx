import { VStack, Heading, Avatar, Text } from '@chakra-ui/react'
import HomeCard from './HomeCard'

const AboutMe = (): JSX.Element => {
  return (
    <HomeCard>
      <VStack alignItems="start">
        <Heading>About me</Heading>
        <Avatar name="Samuel Marroquín" src="/me.jpeg" size="lg" />
        <Text>
          Samuel Marroquín. 18 years old. Guatemala 🇬🇹. Biological chemistry
          student 🧪. Full stack developer. Typescript, React, Go, Flutter and
          Dart.
        </Text>
      </VStack>
    </HomeCard>
  )
}

export default AboutMe

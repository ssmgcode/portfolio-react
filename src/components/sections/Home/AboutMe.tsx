import { VStack, Heading, Avatar, Text } from '@chakra-ui/react'
import HomeCard from './HomeCard'
import personalInformation from '../../../config/personalInformation.json'

const bio = personalInformation.bio

const AboutMe = (): JSX.Element => {
  return (
    <HomeCard>
      <VStack alignItems="start">
        <Heading>About me</Heading>
        <Avatar name="Samuel Marroquín" src="/images/me.jpeg" size="lg" />
        <Text>{bio}</Text>
      </VStack>
    </HomeCard>
  )
}

export default AboutMe

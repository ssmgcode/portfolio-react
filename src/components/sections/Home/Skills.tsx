import { Box, Heading, VStack } from '@chakra-ui/react'
import PercentBar from '../PercentBar'
import HomeCard from './HomeCard'
import skills from '../../../config/personalInformation.json'

const colors = [
  'f94144',
  'f3722c',
  'f8961e',
  'f9c74f',
  '90be6d',
  '43aa8b',
  '4d908e',
  '577590',
  '277da1',
]

const Skills = (): JSX.Element => {
  return (
    <HomeCard>
      <VStack alignItems="start">
        <Heading>Skills</Heading>
        <Heading as="h6" fontSize="xs">
          Languages
        </Heading>
        {skills.languages.map(({ name, percent }, index) => (
          <PercentBar
            key={name}
            percent={percent}
            title={name}
            isPercentLabelVisible
            color={`#${colors[index]}`}
          />
        ))}
        <Box height="1em" />
        <Heading as="h6" fontSize="xs">
          Technical
        </Heading>
        {skills.skills.map(({ name, percent }, index) => (
          <PercentBar
            key={name}
            percent={percent}
            title={name}
            isPercentLabelVisible
            color={`#${colors[index + 2]}`}
          />
        ))}
      </VStack>
    </HomeCard>
  )
}

export default Skills

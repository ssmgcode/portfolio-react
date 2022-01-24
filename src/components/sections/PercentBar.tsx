import {
  Box,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

interface Props {
  percent: number
  color?: string
  isPercentLabelVisible?: boolean
  title?: string
}

const PercentBar = ({
  percent,
  color,
  title,
  isPercentLabelVisible,
}: Props): JSX.Element => {
  const borderRadius = 'base'
  const percentBarBackgroundColor = useColorModeValue('gray.100', 'blue.900')

  return (
    <VStack width="100%">
      <Flex
        borderRadius={borderRadius}
        background={percentBarBackgroundColor}
        height="1em"
        width="100%"
        justify="start"
        borderWidth="1px"
      >
        <Box
          height="100%"
          width={`${percent}%`}
          background={color || 'blue.500'}
          borderRadius={borderRadius}
        />
      </Flex>
      <HStack
        width="100%"
        justifyContent={title ? 'space-between' : 'flex-end'}
      >
        {title && (
          <Text fontSize="xs" opacity=".8" fontWeight="bold">
            {title}
          </Text>
        )}
        {isPercentLabelVisible && (
          <Text fontSize="xs" opacity=".8">
            {percent}%
          </Text>
        )}
      </HStack>
    </VStack>
  )
}

export default PercentBar

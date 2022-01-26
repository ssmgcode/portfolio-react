import { Box, Heading, Image, Text, Badge, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import Project from '../../../models/Project'

const ProjectCard = ({
  id,
  name,
  description,
  type,
  image,
}: Project): JSX.Element => {
  return (
    <Box sx={{ '.card:hover &': { translateY: '5px' } }}>
      <RouterLink to={id} className="card">
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
          <Box borderTopRadius="md" overflow="hidden">
            <Image src={image} alt={name} />
          </Box>
          <Box padding="1em">
            <Heading
              as="h5"
              fontSize="2xl"
              sx={{ '.card:hover &': { textDecoration: 'underline' } }}
            >
              {name}
            </Heading>
            <Text marginBottom=".5em">{description}</Text>
            <Badge>{type}</Badge>
          </Box>
        </Box>
      </RouterLink>
    </Box>
  )
}

export default ProjectCard

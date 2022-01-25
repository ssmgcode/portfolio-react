import { Heading, SimpleGrid } from '@chakra-ui/react'
import Project from '../sections/projects/Project'
import personalInformation from '../../config/personalInformation.json'
import DefaultPadding from '../layouts/DefaultPadding'
import { Outlet } from 'react-router-dom'

const projects = personalInformation.projects

const Projects = (): JSX.Element => (
  <>
    <DefaultPadding>
      <Heading>Projects</Heading>
      <SimpleGrid minChildWidth="20em" spacing="2em">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </SimpleGrid>
    </DefaultPadding>
    <Outlet />
  </>
)

export default Projects

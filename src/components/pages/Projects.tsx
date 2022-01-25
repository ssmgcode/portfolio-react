import { Grid, Heading } from '@chakra-ui/react'
import Project from '../sections/projects/Project'
import personalInformation from '../../config/personalInformation.json'

const projects = personalInformation.projects

const Projects = (): JSX.Element => (
  <>
    <Heading>Projects</Heading>
    <Grid templateColumns="auto" templateRows="auto" justifyItems="center">
      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </Grid>
  </>
)

export default Projects

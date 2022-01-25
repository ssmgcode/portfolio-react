import { Grid } from '@chakra-ui/react'
import DefaultPadding from '../layouts/DefaultPadding'
import SSMGCodeBanner from '../sections/SSMGCodeBanner'
import Skills from '../sections/home/Skills'
import AboutMe from '../sections/home/AboutMe'

const Home = (): JSX.Element => (
  <DefaultPadding>
    <Grid templateRows="auto" templateColumns="1fr" gap="1em">
      <SSMGCodeBanner />
      <AboutMe />
      <Skills />
    </Grid>
  </DefaultPadding>
)
export default Home

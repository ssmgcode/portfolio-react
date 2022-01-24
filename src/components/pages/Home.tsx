import { Grid } from '@chakra-ui/react'
import DefaultPadding from '../layouts/DefaultPadding'
import SSMGCodeBanner from '../sections/SSMGCodeBanner'
import AboutMe from '../sections/Home/AboutMe'
import Skills from '../sections/Home/Skills'

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

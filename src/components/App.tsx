import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import HeaderBar from './sections/HeaderBar'
import theme from '../theme'
import NavBar from './sections/NavBar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectModal from './sections/projects/ProjectModal'
import Contact from './pages/Contact'

export const App = () => {
  const [isLargeDisplayDevice] = useMediaQuery('(min-width: 768px)')

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Grid
          height="100vh"
          templateColumns="1fr"
          templateRows="auto 1fr auto"
          templateAreas={`
            'header'
            'main'
            'footer'
          `}
        >
          <GridItem gridArea="header">
            <HeaderBar>
              {isLargeDisplayDevice ? <NavBar /> : undefined}
            </HeaderBar>
          </GridItem>
          <GridItem as="main" gridArea="main" overflow="auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />}>
                <Route path=":project" element={<ProjectModal />} />
              </Route>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </GridItem>
          {!isLargeDisplayDevice && (
            <GridItem gridArea="footer" boxShadow="xs" height="60px">
              <NavBar />
            </GridItem>
          )}
        </Grid>
      </Router>
    </ChakraProvider>
  )
}

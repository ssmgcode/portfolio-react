import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import HeaderBar from './sections/HeaderBar'
import theme from '../theme'
import NavBar from './sections/NavBar'
import appRoutes from '../routes'

export const App = () => {
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
            <HeaderBar />
          </GridItem>
          <GridItem as="main" gridArea="main" overflow="auto">
            <Routes>
              {appRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </GridItem>
          <GridItem gridArea="footer">
            <NavBar />
          </GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  )
}

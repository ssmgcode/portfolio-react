import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'
import HeaderBar from './sections/HeaderBar'
import theme from '../theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

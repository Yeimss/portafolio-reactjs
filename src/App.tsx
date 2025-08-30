import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout' 
import Portafolio from './pages/Portafolio'
import Games from './pages/Games'
import ConsumingApis from './pages/ConsumingApis'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Portafolio/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/APIs' element={<ConsumingApis/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

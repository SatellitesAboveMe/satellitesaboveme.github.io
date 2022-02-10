import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { Main } from 'components/Main'
import { SatelliteInfo } from 'components/SatelliteInfo'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='satelliteInfo/:id' element={<SatelliteInfo/>}/>
        <Route path='*' element={<h1>Not found!</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

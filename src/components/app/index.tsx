import {
  Routes,
  Route
} from 'react-router-dom'
import { Main } from 'components/main'
import { SatelliteInfo } from 'components/satelliteInfo'

function App () {
  return (
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='satelliteInfo/:id' element={<SatelliteInfo/>}/>
        <Route path='*' element={<h1>Not found!</h1>} />
      </Routes>
  )
}

export default App

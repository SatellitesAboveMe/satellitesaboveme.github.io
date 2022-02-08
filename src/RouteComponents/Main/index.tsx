import { Container } from '@mui/material'
import { LocationForm } from '../../Components/LocationForm'
import { SatelliteTable } from '../../Components/SatellitesTable'
import './index.scss'

export const Main = () => {
  return (
    <Container maxWidth="sm">
        <h1>Input your location</h1>
        <LocationForm />
        <SatelliteTable />
    </Container>
  )
}

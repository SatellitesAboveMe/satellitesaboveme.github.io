import { Container } from '@mui/material'
import { LocationForm } from 'components/locationForm'
import 'components/main/index.scss'
import { SatellitesTable } from 'components/satellitesTable'

export const Main = () => {
  return (
    <Container fixed>
        <h1>Input your location</h1>
        <LocationForm />
        <SatellitesTable />
    </Container>
  )
}

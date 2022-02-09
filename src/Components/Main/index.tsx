import { Container } from '@mui/material'
import { LocationForm } from 'components/LocationForm'
import 'components/Main/Main.scss'

export const Main = () => {
  return (
    <Container fixed>
        <h1>Input your location</h1>
        <LocationForm />
    </Container>
  )
}

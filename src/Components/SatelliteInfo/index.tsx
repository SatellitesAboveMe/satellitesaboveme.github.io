import { Container } from '@mui/material'
import SatelliteNotes from 'components/satelliteNotes'
import { useParams } from 'react-router-dom'

export const SatelliteInfo = () => {
  const { id = '' } = useParams()

  const parsedId = parseInt(id)

  return <Container fixed>
  {
    typeof parsedId === 'number' && <SatelliteNotes id={parsedId} />
  }
  </Container>
}

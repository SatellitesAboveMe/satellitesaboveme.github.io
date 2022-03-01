import { useSatelliteNotesStore } from 'stores/satelliteNotesStore'
import { NotesForm } from 'components/notesForm'
import { observer } from 'mobx-react-lite'
import { Note } from 'components/satelliteNotes/note'
import { Container, Grid } from '@mui/material'

interface SatelliteNotesProps {
  id: number
}

const SatelliteNotes = observer((props: SatelliteNotesProps) => {
  const { id } = props

  const notesStore = useSatelliteNotesStore()

  const notes = notesStore.getSatelliteNotes(id)

  return (
    <>
      <h2>Notes:</h2>
      {
        notes
          ? (
            <Grid container spacing={2}>
              {notes.map((note, index) => <Note key={index} {...note} />)}
            </Grid>
            )
          : <span>There are no notes</span>
      }
      <Container maxWidth={'xs'}>
        <NotesForm id={id} />
      </Container>
    </>
  )
})

export default SatelliteNotes

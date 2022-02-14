import { useContext } from 'react'
import { satelliteNotesStore, SatelliteNotesStoreContext } from 'stores/satelliteNotesStore'
import { NotesForm } from 'components/notesForm'
import { observer } from 'mobx-react-lite'
import { Note } from 'components/satelliteNotes/note'
import { Container, Grid } from '@mui/material'

interface SatelliteNotesProps {
    id: number
}

const SatelliteNotesComponent = observer((props: SatelliteNotesProps) => {
  const { id } = props

  const notesStore = useContext(SatelliteNotesStoreContext)

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
      <NotesForm id={id}/>
      </Container>
      </>
  )
})

const SatelliteNotes = (props: SatelliteNotesProps) => (
    <SatelliteNotesStoreContext.Provider value={satelliteNotesStore}>
        <SatelliteNotesComponent id={props.id} />
    </SatelliteNotesStoreContext.Provider>
)

export default SatelliteNotes

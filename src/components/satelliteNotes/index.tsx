import { useContext } from 'react'
import { satelliteNotesStore, SatelliteNotesStoreContext } from 'stores/satelliteNotesStore'
import { NotesForm } from 'components/notesForm'
import { computed } from 'mobx'

interface SatelliteNotesProps {
    id: number
}

const SatelliteNotesComponent = (props: SatelliteNotesProps) => {
  const { id } = props

  const notesStore = useContext(SatelliteNotesStoreContext)

  const notes = computed(() => notesStore.getSatelliteNotes(id)).get()

  console.log(notes)

  return (
      <>
      {
          notes
            ? <>
          {notes.map((note, index) => <span key={index}>
              <h1>{note.title}</h1>
              <p>{note.text}</p>
              </span>
          )}
          </>
            : <span>There are no notes</span>
      }
      <NotesForm id={id}/>
      </>
  )
}

const SatelliteNotes = (props: SatelliteNotesProps) => (
    <SatelliteNotesStoreContext.Provider value={satelliteNotesStore}>
        <SatelliteNotesComponent id={props.id} />
    </SatelliteNotesStoreContext.Provider>
)

export default SatelliteNotes

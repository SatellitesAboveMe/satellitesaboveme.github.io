import { SatelliteNotesStore } from 'stores/satelliteNotesStore'

describe('SatelliteNotes store', () => {
  test('initial values', () => {
    const store = new SatelliteNotesStore()

    expect(store.getSatelliteNotes(0)).toBeUndefined()
    expect(store.getSatelliteNotes(1)).toBeUndefined()
    expect(store.getSatelliteNotes(435)).toBeUndefined()

    store.resetStore()
  })

  test('adding notes', () => {
    const store = new SatelliteNotesStore()
    const note1 = {
      title: 'title1',
      text: 'text1'
    }
    const note2 = {
      title: 'title2',
      text: 'text2'
    }
    store.addSatelliteNote(1, note1)
    store.addSatelliteNote(1, note2)
    const notes = store.getSatelliteNotes(1)

    expect(notes).toBeInstanceOf(Array)
    expect(notes?.length).toBe(2)

    const [note1FromStore, note2FromStore] = notes

    expect(note1FromStore).toStrictEqual(note1)
    expect(note2FromStore).toStrictEqual(note2)

    store.resetStore()
  })
})

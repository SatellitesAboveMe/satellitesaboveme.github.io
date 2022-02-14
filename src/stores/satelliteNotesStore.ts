import { makeObservable, observable, action } from 'mobx'
import { createContext } from 'react'

type Note = {
    title?: string;
    text: string;
}

export class SatelliteNotesStore {
  private notesStore: Map<number, Note[]> = observable.map(new Map())

  constructor () {
    makeObservable(this)
  }

  getSatelliteNotes (id: number) {
    return this.notesStore.get(id)
  }

    @action.bound
  addSatelliteNote (id: number, note: Note) {
    if (!this.notesStore.has(id)) {
      this.notesStore.set(id, [])
    }
      this.notesStore.get(id)!.push(note)
  }
}

export const satelliteNotesStore = new SatelliteNotesStore()
export const SatelliteNotesStoreContext = createContext<SatelliteNotesStore>(satelliteNotesStore)

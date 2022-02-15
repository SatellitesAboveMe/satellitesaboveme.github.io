import { makeObservable, observable, action, ObservableMap } from 'mobx'
import { createContext, useContext } from 'react'

export type Note = {
    title?: string;
    text: string;
}

export class SatelliteNotesStore {
  @observable private notesStore: ObservableMap<number, Note[]> = new ObservableMap()

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
export const useSatelliteNotesStore = (): SatelliteNotesStore => {
  return useContext(SatelliteNotesStoreContext)
}

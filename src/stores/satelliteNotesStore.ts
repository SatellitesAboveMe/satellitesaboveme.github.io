import { makeObservable, observable, action, ObservableMap, autorun } from 'mobx'
import { createContext, useContext } from 'react'

export type Note = {
  title?: string;
  text: string;
}

export class SatelliteNotesStore {
  @observable private notesStore: ObservableMap<string, Note[]> = new ObservableMap()

  constructor () {
    this.getFromLocalStorage()
    makeObservable(this)
    autorun(() => this.updateLocalStorage())
    this.subscribeToLocalStorage()
  }

  private subscribeToLocalStorage () {
    window.addEventListener('storage', () => {
      this.getFromLocalStorage()
    })
  }

  getSatelliteNotes (id: number) {
    return this.notesStore.get(id.toString())
  }

  @action.bound
  addSatelliteNote (id: number, note: Note) {
    const stringId = id.toString()
    if (!this.notesStore.has(stringId)) {
      this.notesStore.set(stringId, [])
    }
    this.notesStore.get(stringId)!.push(note)
  }

  private updateLocalStorage () {
    const object = Object.fromEntries(this.notesStore)
    localStorage.setItem('SatelliteNotesStore', JSON.stringify(object))
  }

  @action.bound
  getFromLocalStorage () {
    const data = localStorage.getItem('SatelliteNotesStore')
    if (data === null) {
      this.notesStore = new ObservableMap()
      this.updateLocalStorage()
    } else {
      const object = JSON.parse(data)
      this.notesStore = new ObservableMap(object)
    }
  }
}

export const satelliteNotesStore = new SatelliteNotesStore()
export const SatelliteNotesStoreContext = createContext<SatelliteNotesStore>(satelliteNotesStore)
export const useSatelliteNotesStore = (): SatelliteNotesStore => {
  return useContext(SatelliteNotesStoreContext)
}

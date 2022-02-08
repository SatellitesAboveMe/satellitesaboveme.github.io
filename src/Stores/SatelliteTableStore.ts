import { makeAutoObservable, runInAction } from 'mobx'
import { AboveData, getAboveData, UserFormData } from '../Requests/above'

export enum RequestState {
  Fetching = 'pending',
  Done = 'done',
  Error = 'error'
}

export class SatelliteTableStore {
  satelliteDataRaw?: AboveData

  state?: RequestState

  constructor () {
    makeAutoObservable(this)
  }

  get satelliteData () {
    return this.satelliteDataRaw?.above || []
  }

  async fetchData (userLocation: UserFormData) {
    this.state = RequestState.Fetching

    try {
      const data = await getAboveData(userLocation)
      runInAction(() => {
        this.satelliteDataRaw = data
        this.state = RequestState.Done
      })
    } catch (e) {
      runInAction(() => {
        this.satelliteDataRaw = undefined
        this.state = RequestState.Error
      })
    }
  }
}

export const satelliteTableStore = new SatelliteTableStore()

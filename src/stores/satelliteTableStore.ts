import { makeObservable, runInAction, observable, computed, action } from 'mobx'
import { createContext, useContext } from 'react'
import { AboveData, getAboveData, UserFormData } from 'api/above'
import { RequestState } from 'api/state'

export class SatelliteTableStore {
  @observable satelliteDataRaw?: AboveData

  @observable state?: RequestState

  constructor () {
    makeObservable(this)
  }

  @computed
  get satelliteData () {
    return this.satelliteDataRaw?.above || []
  }

  @action.bound
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

  @action.bound
  resetStore () {
    this.state = undefined
    this.satelliteDataRaw = undefined
  }
}

export const satelliteTableStore = new SatelliteTableStore()
export const SatelliteTableStoreContext = createContext<SatelliteTableStore>(satelliteTableStore)
export const useSatelliteTableStore = (): SatelliteTableStore => {
  return useContext(SatelliteTableStoreContext)
}

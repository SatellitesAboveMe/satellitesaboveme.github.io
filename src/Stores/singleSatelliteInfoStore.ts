import { RequestState } from 'api/state'
import { TLEData, getTleData } from 'api/tle'
import { createContext } from 'react'
import { makeObservable, runInAction, observable, computed, action } from 'mobx'
import { parseTLE } from 'utils/parseTLE'

export class SingleSatelliteDataStore {
    @observable singleSatelliteData?: TLEData

    @observable state?: RequestState

    constructor () {
      makeObservable(this)
    }

    @computed
    get parsedTLEData () {
      if (!this.singleSatelliteData || this.singleSatelliteData.tle === '') return undefined
      return parseTLE(this.singleSatelliteData)
    }

    @action.bound
    async fetchData (satelliteId: number) {
      this.state = RequestState.Fetching

      try {
        const data = await getTleData(satelliteId)
        runInAction(() => {
          this.singleSatelliteData = data
          this.state = RequestState.Done
        })
      } catch (e) {
        runInAction(() => {
          this.singleSatelliteData = undefined
          this.state = RequestState.Error
        })
      }
    }
}

export const singleSatelliteInfoStore = new SingleSatelliteDataStore()
export const SingleSatelliteInfoStoreContext = createContext<SingleSatelliteDataStore>(singleSatelliteInfoStore)

import { makeObservable, observable, computed, action } from 'mobx'
import { AboveData, getAboveData, UserFormData } from '../Requests/above'

export enum RequestState {
    Fetching = 'pending',
    Done = 'done',
    Error = 'error'
}

class SatelliteTableStore {
    @observable satelliteDataRaw?: AboveData

    @observable state?: RequestState

    constructor () {
      makeObservable(this)
    }

    @computed
    get satelliteData () {
      return this.satelliteDataRaw?.above
    }

    @action.bound
    fetchData (userLocation: UserFormData) {
      this.state = RequestState.Fetching
      getAboveData(userLocation).then(data =>
        action('FETCH_SUCCESS', () => {
          this.satelliteDataRaw = data
          this.state = RequestState.Done
        })
      ).catch(() => action('FETCH_ERROR', () => {
        this.satelliteDataRaw = undefined
        this.state = RequestState.Error
      })
      )
    }
}

export const satelliteTableStore = new SatelliteTableStore()

import { useParams } from 'react-router-dom'
import { TLETable } from 'components/tleTable'
import { singleSatelliteInfoStore, SingleSatelliteInfoStoreContext } from '../../stores/singleSatelliteInfoStore'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { RenderDependingOnState } from 'components/renderDependingOnState'

const SingleSatelliteInfoComponent = observer(() => {
  const singleSatelliteInfo = useContext(SingleSatelliteInfoStoreContext)

  const { singleSatelliteData: data, state, parsedTLEData } = singleSatelliteInfo

  const { id = '0' } = useParams()

  useEffect(() => {
    singleSatelliteInfo.fetchData(parseInt(id))
  }, [])

  return <RenderDependingOnState
  state={state}
  InfoComponent={
    <>
    <h1>{data?.info.satname}</h1>
    {
      parsedTLEData ? <TLETable tle={parsedTLEData!} /> : <span>No TLE data available</span>
    }
    </>
  }
  />
})

export const SatelliteInfo = () => (
  <SingleSatelliteInfoStoreContext.Provider value={singleSatelliteInfoStore}>
    <SingleSatelliteInfoComponent />
  </SingleSatelliteInfoStoreContext.Provider>
)

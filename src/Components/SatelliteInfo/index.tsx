import { useParams } from 'react-router-dom'
import { TLETable } from 'components/tleTable'
import { singleSatelliteInfoStore, SingleSatelliteInfoStoreContext } from '../../stores/singleSatelliteInfoStore'
import { RequestState } from 'api/state'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { FetchingComponent } from 'components/fetching'

interface RenderSatelliteInfoProps {
  ErrorComponent: JSX.Element;
  FetchingComponent: JSX.Element,
  InfoComponent: JSX.Element,
  state?: RequestState
}

const RenderSatelliteInfo = (props: RenderSatelliteInfoProps) => {
  const { state, ErrorComponent, FetchingComponent, InfoComponent } = props

  switch (state) {
    case RequestState.Error:
      return ErrorComponent
    case RequestState.Fetching:
      return FetchingComponent
    case RequestState.Done:
      return InfoComponent
    default:
      return <></>
  }
}

const SingleSatelliteInfoComponent = observer(() => {
  const singleSatelliteInfo = useContext(SingleSatelliteInfoStoreContext)

  const { singleSatelliteData: data, state, parsedTLEData } = singleSatelliteInfo

  const { id = '0' } = useParams()

  useEffect(() => {
    singleSatelliteInfo.fetchData(parseInt(id))
  }, [])

  return <RenderSatelliteInfo
  state={state}
  ErrorComponent={<span>Error!</span>}
  FetchingComponent={<FetchingComponent />}
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

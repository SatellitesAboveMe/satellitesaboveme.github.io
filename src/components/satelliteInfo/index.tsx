import { useParams } from 'react-router-dom'
import { TLETable } from 'components/tleTable'
import { singleSatelliteInfoStore, SingleSatelliteInfoStoreContext } from '../../stores/singleSatelliteInfoStore'
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from 'react'
import { RenderDependingOnState } from 'components/renderDependingOnState'
import { Container } from '@mui/material'
import SatelliteNotes from 'components/satelliteNotes'

const SingleSatelliteInfoComponent = observer(() => {
  const singleSatelliteInfo = useContext(SingleSatelliteInfoStoreContext)

  const { singleSatelliteData: data, state, parsedTLEData } = singleSatelliteInfo

  const { id = '' } = useParams()

  const parsedId = parseInt(id)
  const idIsRight = typeof parsedId === 'number'

  useEffect(() => {
    idIsRight && singleSatelliteInfo.fetchData(parseInt(id))
  }, [])

  return <RenderDependingOnState
  state={state}
  InfoComponent={
  <>
    <h1>{data?.info.satname}</h1>
    {
      parsedTLEData ? <TLETable tle={parsedTLEData!} /> : <span>No TLE data available</span>
    }
    <Container fixed>
      { idIsRight && <SatelliteNotes id={parsedId} /> }
    </Container>
  </>
  }
  />
})

export const SatelliteInfo = () => (
  <SingleSatelliteInfoStoreContext.Provider value={singleSatelliteInfoStore}>
    <SingleSatelliteInfoComponent />
  </SingleSatelliteInfoStoreContext.Provider>
)

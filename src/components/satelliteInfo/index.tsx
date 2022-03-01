import { useParams } from 'react-router-dom'
import { TLETable } from 'components/tleTable'
import { useSingleSatelliteInfoStore, SingleSatelliteDataStore } from '../../stores/singleSatelliteInfoStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { RenderDependingOnState } from 'components/renderDependingOnState'
import { Container } from '@mui/material'
import SatelliteNotes from 'components/satelliteNotes'

interface InfoComponentProps {
  id: number;
  satelliteData: SingleSatelliteDataStore;
}

const InfoComponent = ({ id, satelliteData }: InfoComponentProps) => {
  const {
    singleSatelliteData,
    parsedTLEData
  } = satelliteData

  switch (true) {
    case singleSatelliteData === undefined:
      return <span>Error!</span>
    case parsedTLEData === undefined:
      return <span>There is no TLE data on that satellite</span>
    case singleSatelliteData?.info.satname === null:
      return <span>Satellite with id {id} does not exist</span>
    default:
      return (
        <>
          <h1>{singleSatelliteData!.info.satname}</h1>
          <TLETable tle={parsedTLEData!} />
          <Container fixed>
            <SatelliteNotes id={id} />
          </Container>
        </>
      )
  }
}

export const SatelliteInfo = observer(() => {
  const singleSatelliteInfo = useSingleSatelliteInfoStore()

  const { state } = singleSatelliteInfo

  const { id = '' } = useParams()

  const parsedId = parseInt(id)
  const idIsNumber = typeof parsedId === 'number'

  useEffect(() => {
    idIsNumber && singleSatelliteInfo.fetchData(parsedId)
  }, [])

  return <RenderDependingOnState
    state={state}
    InfoComponent={
      <>
        {
          idIsNumber
            ? <InfoComponent id={parsedId} satelliteData={singleSatelliteInfo} />
            : <span data-testid='wrong-satellite-id-message'>Wrong satellite id!</span>
        }
      </>
    }
  />
})

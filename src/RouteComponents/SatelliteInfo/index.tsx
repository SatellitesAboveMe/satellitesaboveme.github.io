/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TLETable } from '../../Components/TLETable'
import { getTleData, TLEData } from '../../Requests/tle'
import { parseTLE } from '../../Utils/parseTLE'

export const SatelliteInfo = () => {
  const [satelliteData, setSatelliteData] = useState<TLEData>()
  const [isFetching, setIsFetching] = useState(true)

  const { id = '0' } = useParams()

  useEffect(() => {
    (async () => {
      const satelliteId = parseInt(id)
      try {
        const data = await getTleData(satelliteId)
        setSatelliteData(data)
      } catch (e) {
        setSatelliteData(undefined)
      }
      setIsFetching(false)
    })()
  }, [])

  const renderSatelliteInfo = () => {
    if (isFetching) return <span>Loading...</span>
    if (!satelliteData) return <span>Error!</span>

    const parsedTLEData = satelliteData && parseTLE(satelliteData)

    return (
      <>
        <h1>{satelliteData.info.satname}</h1>
        <TLETable tle={parsedTLEData}/>
      </>
    )
  }

  return renderSatelliteInfo()
}

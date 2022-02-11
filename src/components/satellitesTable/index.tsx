import { RequestState, satelliteTableStore, SatelliteTableStoreContext } from '../../stores/satelliteTableStore'
import { observer } from 'mobx-react-lite'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useContext } from 'react'
import { SingleSatelliteData } from 'api/above'
import { Skeleton } from '@mui/material'

interface RenderTableProps {
  ErrorComponent: JSX.Element;
  FetchingComponent: JSX.Element,
  TableComponent: JSX.Element,
  state?: RequestState
}

const RenderTable = (props: RenderTableProps) => {
  const { state, ErrorComponent, FetchingComponent, TableComponent } = props

  switch (state) {
    case RequestState.Error:
      return ErrorComponent
    case RequestState.Fetching:
      return FetchingComponent
    case RequestState.Done:
      return TableComponent
    default:
      return <></>
  }
}

const TableComponent = ({ satelliteData }: {satelliteData: SingleSatelliteData[]}) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Launch Date</TableCell>
            <TableCell align="right">Latitude</TableCell>
            <TableCell align="right">Longitude</TableCell>
            <TableCell align="right">Altitude</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            satelliteData.map(
              satellite => (
                <TableRow key={satellite.satid}>
                  <TableCell align="right">{satellite.satid}</TableCell>
                    <TableCell align="right">{satellite.satname}</TableCell>
                    <TableCell align="right">{satellite.launchDate}</TableCell>
                    <TableCell align="right">{satellite.satlat}</TableCell>
                    <TableCell align="right">{satellite.satlng}</TableCell>
                    <TableCell align="right">{satellite.satalt}</TableCell>
                  </TableRow>
              )
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const FetchingComponent = () => {
  return (
    <>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    </>
  )
}

const SatelliteTableComponent = observer(() => {
  const table = useContext(SatelliteTableStoreContext)

  const { satelliteData, state } = table

  return <RenderTable
  state={state}
  ErrorComponent={<span>Error!</span>}
  FetchingComponent={<FetchingComponent />}
  TableComponent={<TableComponent satelliteData={satelliteData}/>}
  />
})

export const SatelliteTable = () => (
    <SatelliteTableStoreContext.Provider value={satelliteTableStore}>
        <SatelliteTableComponent />
    </SatelliteTableStoreContext.Provider>
)

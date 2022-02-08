import { RequestState, satelliteTableStore, SatelliteTableStore } from '../../Stores/SatelliteTableStore'
import { observer } from 'mobx-react-lite'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

type SatelliteTableProps = {
    table: SatelliteTableStore;
}

const SatelliteTableComponent = ({ table }: SatelliteTableProps) => {
  const { satelliteData, state } = table
  console.log(state, satelliteData)
  const renderTable = () => {
    switch (table.state) {
      case RequestState.Error:
        return <span>Error!</span>
      case RequestState.Fetching:
        return <span>Fetching!</span>
      case RequestState.Done:
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
      default:
        return <span>nothing here</span>
    }
  }

  return renderTable()
}

const SatelliteTableObserver = observer((props: SatelliteTableProps) => <SatelliteTableComponent {...props}/>)

export const SatelliteTable = () => <SatelliteTableObserver table={satelliteTableStore} />

import { satelliteTableStore, SatelliteTableStoreContext, useSatelliteTableStore } from 'stores/satelliteTableStore'
import { observer } from 'mobx-react-lite'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { makeStyles } from '@mui/styles'
import { SingleSatelliteData } from 'api/above'
import { useNavigate } from 'react-router-dom'
import { RenderDependingOnState } from 'components/renderDependingOnState'

const TableComponent = ({ satelliteData }: {satelliteData: SingleSatelliteData[]}) => {
  const useStyles = makeStyles(() => ({
    hover: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }))

  const navigate = useNavigate()

  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table aria-label="satellites table">
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
                <TableRow hover classes={{ hover: classes.hover }} key={satellite.satid} onClick={() => navigate(`satelliteInfo/${satellite.satid}`)}>
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

const SatelliteTableComponent = observer(() => {
  const table = useSatelliteTableStore()

  const { satelliteData, state } = table

  return <RenderDependingOnState
  state={state}
  InfoComponent={<TableComponent satelliteData={satelliteData}/>}
  />
})

export const SatellitesTable = () => (
    <SatelliteTableStoreContext.Provider value={satelliteTableStore}>
        <SatelliteTableComponent />
    </SatelliteTableStoreContext.Provider>
)

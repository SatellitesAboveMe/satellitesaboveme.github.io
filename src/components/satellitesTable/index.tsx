/* eslint-disable @typescript-eslint/no-unused-vars */
import { satelliteTableStore, SatelliteTableStoreContext, useSatelliteTableStore } from 'stores/satelliteTableStore'
import { observer } from 'mobx-react-lite'
import { DataGrid } from '@mui/x-data-grid'
import { makeStyles } from '@mui/styles'
import { SingleSatelliteData } from 'api/above'
import { useNavigate } from 'react-router-dom'
import { RenderDependingOnState } from 'components/renderDependingOnState'
import { Box } from '@mui/material'
import './index.scss'

const columns = [
  { field: 'id', headerName: 'Id', type: 'number', flex: 1 },
  { field: 'satname', headerName: 'Name', flex: 1 },
  { field: 'launchDate', headerName: 'Launch Date', type: 'date', flex: 1 },
  { field: 'satlat', headerName: 'Latitude', type: 'number', flex: 1 },
  { field: 'satlng', headerName: 'Longitude', type: 'number', flex: 1 },
  { field: 'satalt', headerName: 'Altitude', type: 'number', flex: 1 }
]

const TableComponent = ({ satelliteData }: { satelliteData: SingleSatelliteData[] }) => {
  const useStyles = makeStyles(() => ({
    hover: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  }))

  const rows = satelliteData.map(
    ({ satid, launchDate, ...others }) => ({
      id: satid,
      launchDate: new Date(launchDate),
      ...others
    })
  )

  return (
    <Box mb={3}>
      <DataGrid columns={columns} rows={rows} autoHeight onRowClick={({ id }) => window.open(`/satelliteInfo/${id}`, '_blank')} getRowClassName={() => 'datagrid-row'} />
    </Box>
  )
}

export const SatellitesTable = observer(() => {
  const table = useSatelliteTableStore()

  const { satelliteData, state } = table

  return <RenderDependingOnState
    state={state}
    InfoComponent={<TableComponent satelliteData={satelliteData} />}
  />
})

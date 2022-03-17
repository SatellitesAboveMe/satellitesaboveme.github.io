import { render, waitFor } from '@testing-library/react'
import { RequestState } from 'api/state'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { SatellitesTable } from '..'
import { getAboveDataMock } from 'api/__mocks__/above.mock'
import * as functionsToMock from 'api/above'
import { BrowserRouter } from 'react-router-dom'

describe('SatellitesTable component', () => {
  afterEach(() => {
    jest.clearAllMocks()
    satelliteTableStore.resetStore()
  })

  test('render nothing', () => {
    const container = render(<SatellitesTable />)
    const table = container.queryByRole('table')
    expect(table).toBeNull()
  })

  test('render fetching', async () => {
    satelliteTableStore.state = RequestState.Fetching
    const container = render(
      <BrowserRouter>
        <SatellitesTable />
      </BrowserRouter>
    )
    await waitFor(() => expect(container.getByTestId('skeletons')))
  })

  test('render table', async () => {
    const mock = jest.spyOn(functionsToMock, 'getAboveData').mockImplementation(getAboveDataMock)
    const container = render(
      <BrowserRouter>
        <SatellitesTable />
      </BrowserRouter>
    )
    satelliteTableStore.fetchData({
      latitude: 0,
      longitude: 0,
      radius: 0,
      category: 1
    })
    await waitFor(() => expect(container.getByRole('grid')).toBeInTheDocument(), { timeout: 5000 })
    mock.mockClear()
  })
})

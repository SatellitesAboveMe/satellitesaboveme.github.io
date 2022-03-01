import { render, waitFor } from '@testing-library/react'
import { getTleDataMock } from 'api/__mocks__/tle.mock'
import { SatelliteInfo } from '..'
import * as functionsToMock from 'api/tle'
import { wait } from 'utils/wait'
import { singleSatelliteInfoStore } from 'stores/singleSatelliteInfoStore'

describe('SatelliteInfo component', () => {
  afterEach(() => {
    jest.clearAllMocks()
    singleSatelliteInfoStore.resetStore()
  })

  test('bad request', async () => {
    const container = render(<SatelliteInfo />)
    await wait(2500)
    await waitFor(() => expect(container.getByTestId('error-component')).toBeInTheDocument())
  })

  test('good request', async () => {
    const mock = jest.spyOn(functionsToMock, 'getTleData').mockImplementation(getTleDataMock)
    const container = render(<SatelliteInfo />)
    await wait(2500)
    await waitFor(() => container.getAllByRole('table').forEach(
      element => expect(element).toBeInTheDocument()
    ))
    mock.mockClear()
  })
})

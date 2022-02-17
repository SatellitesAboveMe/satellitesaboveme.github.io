import { render, waitFor } from '@testing-library/react'
import { SatelliteInfo } from '..'

describe('SatelliteInfo component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('bad request', async () => {
    const container = render(<SatelliteInfo />)
    await waitFor(() => expect(container.getByTestId('error-component')).toBeInTheDocument())
  })

  test('good request', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => ({
          info: {
            satid: 25544,
            satname: 'SPACE STATION',
            transactionscount: 4
          },
          tle: '1 25544U 98067A   18077.09047010  .00001878  00000-0  35621-4 0  9999\r\n2 25544  51.6412 112.8495 0001928 208.4187 178.9720 15.54106440104358'
        })
      })
    })

    const container = render(<SatelliteInfo />)
    await waitFor(() => container.getAllByRole('table').forEach(
      element => expect(element).toBeInTheDocument()
    ))
  })
})

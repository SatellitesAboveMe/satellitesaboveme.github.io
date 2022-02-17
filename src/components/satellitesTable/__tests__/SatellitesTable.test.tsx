import { render, waitFor } from '@testing-library/react'
import { RequestState } from 'api/state'
import { action } from 'mobx'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { SatellitesTable } from '..'

describe('SatellitesTable component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('render nothing', () => {
    const container = render(<SatellitesTable />)
    const table = container.queryByRole('table')
    expect(table).toBeNull()
  })

  test('render fetching', () => {
    const container = render(<SatellitesTable />)
    const updateState = action((state?: RequestState) => {
      state = RequestState.Fetching
    })
    updateState(satelliteTableStore.state)
    waitFor(() => expect(container.getByTestId('skeletons')))
  })

  test('render table', () => {
    const container = render(<SatellitesTable />)
    jest.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => ({
          info: {
            category: 'Amateur radio',
            transactionscount: 17,
            satcount: 3
          },
          above: [
            {
              satid: 20480,
              satname: 'JAS 1B (FUJI 2)',
              intDesignator: '1990-013C',
              launchDate: '1990-02-07',
              satlat: 49.5744,
              satlng: -96.7081,
              satalt: 1227.9326
            },
            {
              satid: 26609,
              satname: 'AMSAT OSCAR 40',
              intDesignator: '2000-072B',
              launchDate: '2000-11-16',
              satlat: 5.5105,
              satlng: -21.4478,
              satalt: 49678.6389
            },
            {
              satid: 40719,
              satname: 'DEORBITSAIL',
              intDesignator: '2015-032E',
              launchDate: '2015-07-10',
              satlat: 43.8106,
              satlng: -90.3944,
              satalt: 657.5516
            }
          ]
        })
      })
    })
    waitFor(() => expect(container.getByRole('table')).toBeInTheDocument())
  })
})

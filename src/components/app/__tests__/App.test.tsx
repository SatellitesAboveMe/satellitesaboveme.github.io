import App from 'components/app'
import { render, waitFor } from '@testing-library/react'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { getAboveDataMock } from 'api/__mocks__/above.mock'
import * as AboveFunctionsToMock from 'api/above'
import * as TleFunctionsToMock from 'api/tle'
import { getTleDataMock } from 'api/__mocks__/tle.mock'
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('App component test', () => {
  afterEach(() => {
    jest.clearAllMocks()
    satelliteTableStore.resetStore()
  })

  test('render form', () => {
    const container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
    )
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
  })

  test('render datagrid', async () => {
    const container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
    )
    jest.spyOn(AboveFunctionsToMock, 'getAboveData').mockImplementation(getAboveDataMock)
    satelliteTableStore.fetchData({
      latitude: 0,
      longitude: 0,
      radius: 90,
      category: 1
    })
    await waitFor(() => expect(container.getByRole('grid')).toBeInTheDocument(), {
      timeout: 5000
    })
  })

  test('render info', async () => {
    jest.spyOn(TleFunctionsToMock, 'getTleData').mockImplementation(getTleDataMock)
    const history = createMemoryHistory()
    history.push('/satelliteInfo/123')
    const container = render(
            <Router location={history.location}>
                <App />
            </Router>
    )
    await waitFor(() => {
      const tables = container.getAllByRole('table')
      tables.forEach(table => expect(table).toBeInTheDocument())
    }, {
      timeout: 5000
    })
  }, 10000)
})

import { render, waitFor } from '@testing-library/react'
import { Main } from 'components/main'
import * as functionsToMock from 'api/above'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { getAboveDataMock } from 'api/__mocks__/above.mock'

describe('Main component test', () => {
  afterEach(() => {
    satelliteTableStore.resetStore()
    jest.clearAllMocks()
  })

  test('render h1', () => {
    const container = render(<Main/>)
    const h1 = container.getByRole('heading')
    expect(h1).toBeInTheDocument()
    expect(h1).toHaveTextContent('Input your location')
  })

  test('render a form', () => {
    const container = render(<Main/>)
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
  })

  test('render datagrid', async () => {
    jest.spyOn(functionsToMock, 'getAboveData').mockImplementation(getAboveDataMock)
    const container = render(<Main/>)
    satelliteTableStore.fetchData({
      latitude: 0,
      longitude: 0,
      radius: 0,
      category: 1
    })
    await waitFor(() => expect(container.getByRole('grid')).toBeInTheDocument(), { timeout: 5000 })
  })
})

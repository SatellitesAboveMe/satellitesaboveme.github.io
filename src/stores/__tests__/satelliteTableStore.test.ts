import { SatelliteTableStore } from 'stores/satelliteTableStore'
import * as functionsToMock from 'api/above'
import { RequestState } from 'api/state'
import { getAboveDataMock } from 'api/__mocks__/above.mock'
import { wait } from 'utils/wait'

describe('SatelliteTable store', () => {
  test('initial values', () => {
    const store = new SatelliteTableStore()

    expect(store.satelliteDataRaw).toBeUndefined()
    expect(store.state).toBeUndefined()

    const data = store.satelliteData
    expect(data).toBeInstanceOf(Array)
    expect(data.length).toBe(0)
  })

  test('fetching data', async () => {
    jest.spyOn(functionsToMock, 'getAboveData').mockImplementation(getAboveDataMock)
    const store = new SatelliteTableStore()
    store.fetchData({
      latitude: 0,
      longitude: 0,
      radius: 0,
      category: 0
    })
    expect(store.state).toBe(RequestState.Fetching)
    await wait(3000)
    expect(store.state).toBe(RequestState.Done)
    const expectedData = await getAboveDataMock()
    expect(store.satelliteDataRaw).toEqual(expectedData)
  }, 20000)
})

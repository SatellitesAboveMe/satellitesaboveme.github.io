import { SingleSatelliteDataStore } from 'stores/singleSatelliteInfoStore'
import * as functionsToMock from 'api/tle'
import { RequestState } from 'api/state'
import { getTleDataMock } from 'api/__mocks__/tle.mock'
import { parseTLE } from 'utils/parseTLE'
import { wait } from 'utils/wait'

describe('SingleSatelliteInfo store', () => {
  test('initial values', () => {
    const store = new SingleSatelliteDataStore()

    expect(store.singleSatelliteData).toBeUndefined()
    expect(store.state).toBeUndefined()
    expect(store.parsedTLEData).toBeUndefined()
  })

  test('fetching data', async () => {
    jest.spyOn(functionsToMock, 'getTleData').mockImplementation(getTleDataMock)
    const store = new SingleSatelliteDataStore()

    store.fetchData(0)
    expect(store.state).toBe(RequestState.Fetching)
    await wait(3000)
    expect(store.state).toBe(RequestState.Done)
    const expectedData = await getTleDataMock()
    expect(store.singleSatelliteData).toEqual(expectedData)
    expect(store.parsedTLEData).toEqual(parseTLE(expectedData))
  }, 20000)
})

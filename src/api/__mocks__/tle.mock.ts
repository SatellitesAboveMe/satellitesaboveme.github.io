import { TLEData } from 'api/tle'
import { wait } from 'utils/wait'

export const getTleDataMock = async (satelliteId: number): Promise<TLEData> => {
  await wait(2000)
  return {
    info: {
      satid: 25544,
      satname: 'SPACE STATION',
      transactionscount: 4
    },
    tle: '1 25544U 98067A   18077.09047010  .00001878  00000-0  35621-4 0  9999\r\n2 25544  51.6412 112.8495 0001928 208.4187 178.9720 15.54106440104358'
  }
}

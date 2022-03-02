import { render } from '@testing-library/react'
import { parseTLE } from 'utils/parseTLE'
import { TLETable } from '..'

describe('TLETable component', () => {
  test('render table', () => {
    const tle = {
      info: {
        satid: 25544,
        satname: 'SPACE STATION',
        transactionscount: 4
      },
      tle: '1 25544U 98067A   18077.09047010  .00001878  00000-0  35621-4 0  9999\r\n2 25544  51.6412 112.8495 0001928 208.4187 178.9720 15.54106440104358'
    }
    const parsedTle = parseTLE(tle)
    const container = render(<TLETable tle={parsedTle}/>)
    const tables = container.getAllByRole('table')
    tables.forEach(table => expect(table).toBeInTheDocument())
  })
})

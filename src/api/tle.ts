export interface TLEData {
    info:{
        satid: number;
        satname: string;
        transactionscount: number;
    }

    tle: string;
}

export const getTleData = async (satelliteId: number): Promise<TLEData> => {
  return fetch(`https://api.n2yo.com/rest/v1/satellite/tle/${satelliteId}&apiKey=${process.env.REACT_APP_N2YO_API_KEY}`)
    .then(response => response.json())
    // mock
    .catch(() => (
      { info: { satid: 5, satname: 'VANGUARD 1', transactionscount: 9 }, tle: '1 00005U 58002B   22040.50620942  .00000353  00000-0  44186-3 0  9993\r\n2 00005  34.2438 173.6162 1843415 181.7014 177.6495 10.84857170270644' }))
}

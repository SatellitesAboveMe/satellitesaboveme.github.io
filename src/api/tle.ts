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
}

export interface TLEData {
    info:{
        satid: number;
        satname: string;
        transactionscount: number;
    }

    tle: string;
}

export const getTleData = async (satelliteId: number): Promise<TLEData> => {
  return fetch(`https://n2yo.aboveme.workers.dev/api/tle/${satelliteId}`)
    .then(response => response.json())
}

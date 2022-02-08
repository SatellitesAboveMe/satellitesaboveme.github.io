import { n2yoApiKey } from '../apiKey'

interface SingleSatelliteData {
    satid: number;
    satname: string;
    intDesignator: string;
    launchDate: string;
    satlat: number;
    satlng: number;
    satalt: number;
}

interface AboveData {
    info: {
        category: string;
        transactionscount: number;
        satcount: number;
    }
    above: SingleSatelliteData[];
}

interface UserLocation {
    latitude: number;
    longitude: number;
    radius: number;
}

export const getAboveData = async ({ latitude, longitude, radius }: UserLocation): Promise<AboveData> => {
  return fetch(`https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/${radius}/1?apiKey=${n2yoApiKey}`)
    .then(response => response.json())
}

export interface SingleSatelliteData {
    satid: number;
    satname: string;
    intDesignator: string;
    launchDate: string;
    satlat: number;
    satlng: number;
    satalt: number;
}

export interface AboveData {
    info: {
        category: string;
        transactionscount: number;
        satcount: number;
    }
    above: SingleSatelliteData[];
}

export interface UserFormData {
    latitude: number;
    longitude: number;
    radius: number;
    category: number;
}

interface SatelliteCategory {
    name: string;
    id: number;
}

export const satelliteCategories: SatelliteCategory[] = [
  { name: 'Brightest', id: 1 },
  { name: 'ISS', id: 2 },
  { name: 'Weather', id: 3 },
  { name: 'NOAA', id: 4 },
  { name: 'GOES', id: 5 }
]

export const getAboveData = async ({ latitude, longitude, radius, category }: UserFormData): Promise<AboveData> => {
  return fetch(`https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/${radius}/${category}?apiKey=${process.env.REACT_APP_N2YO_API_KEY}`)
    .then(response => response.json())
}

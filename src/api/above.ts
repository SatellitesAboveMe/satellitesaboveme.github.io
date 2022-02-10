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
    // mock
    .catch(() => ({ info: { category: 'Brightest', transactionscount: 0, satcount: 7 }, above: [{ satid: 877, satname: 'SL-3 R/B', intDesignator: '1964-053B', launchDate: '1964-08-28', satlat: -15.8957, satlng: 2.9896, satalt: 743.5761 }, { satid: 3669, satname: 'ISIS 1', intDesignator: '1969-009A', launchDate: '1969-01-30', satlat: 21.3718, satlng: -35.267, satalt: 3423.1479 }, { satid: 14820, satname: 'SL-14 R/B', intDesignator: '1984-027B', launchDate: '1984-03-15', satlat: 4.6007, satlng: 21.397, satalt: 609.6408 }, { satid: 17590, satname: 'SL-16 R/B', intDesignator: '1987-027B', launchDate: '1987-03-18', satlat: 20.5514, satlng: -11.8739, satalt: 837.745 }, { satid: 20511, satname: 'SL-14 R/B', intDesignator: '1990-018B', launchDate: '1990-02-28', satlat: -15.2804, satlng: -2.289, satalt: 638.5529 }, { satid: 24883, satname: 'ORBVIEW 2 (SEASTAR)', intDesignator: '1997-037A', launchDate: '1997-08-01', satlat: -10.8602, satlng: -12.6773, satalt: 783.8515 }, { satid: 28116, satname: 'BREEZE-M DEB (TANK)', intDesignator: '2003-056E', launchDate: '2003-12-10', satlat: 26.3684, satlng: -50.2616, satalt: 6142.7847 }] }))
}

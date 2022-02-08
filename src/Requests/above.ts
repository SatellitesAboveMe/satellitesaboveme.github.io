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

export const getAboveData = async ({ latitude, longitude, radius, category }: UserFormData): Promise<AboveData> => {
  return fetch(`https://api.n2yo.com/rest/v1/satellite/above/${latitude}/${longitude}/0/${radius}/${category}?apiKey=${n2yoApiKey}`)
    .then(() => {
      // return response.json()
      return { info: { category: 'Brightest', transactionscount: 0, satcount: 9 }, above: [{ satid: 3669, satname: 'ISIS 1', intDesignator: '1969-009A', launchDate: '1969-01-30', satlat: -24.1282, satlng: 16.3466, satalt: 2560.5705 }, { satid: 11574, satname: 'SL-8 R/B', intDesignator: '1979-089B', launchDate: '1979-10-11', satlat: 2.7604, satlng: 23.4911, satalt: 768.4681 }, { satid: 14699, satname: 'COSMOS 1536', intDesignator: '1984-013A', launchDate: '1984-02-08', satlat: -16.0092, satlng: 4.3391, satalt: 563.4598 }, { satid: 20453, satname: 'DELTA 2 R/B(1)', intDesignator: '1990-008B', launchDate: '1990-01-24', satlat: 1.6271, satlng: 6.8004, satalt: 546.7349 }, { satid: 21397, satname: 'OKEAN 3', intDesignator: '1991-039A', launchDate: '1991-06-04', satlat: -8.9883, satlng: 21.0788, satalt: 581.8804 }, { satid: 21819, satname: 'INTERCOSMOS 25', intDesignator: '1991-086A', launchDate: '1991-12-18', satlat: -20.7185, satlng: 5.9054, satalt: 2320.452 }, { satid: 22830, satname: 'ARIANE 40 R/B', intDesignator: '1993-061H', launchDate: '1993-09-26', satlat: 8.6248, satlng: -19.2675, satalt: 796.4665 }, { satid: 28116, satname: 'BREEZE-M DEB (TANK)', intDesignator: '2003-056E', launchDate: '2003-12-10', satlat: -33.6956, satlng: -48.4319, satalt: 18294.1319 }, { satid: 41470, satname: 'PSLV R/B', intDesignator: '2016-027B', launchDate: '2016-04-28', satlat: -17.8203, satlng: 9.1089, satalt: 10729.3686 }] }
    })
    .catch(() => {
      // return response.json()
      return { info: { category: 'Brightest', transactionscount: 0, satcount: 9 }, above: [{ satid: 3669, satname: 'ISIS 1', intDesignator: '1969-009A', launchDate: '1969-01-30', satlat: -24.1282, satlng: 16.3466, satalt: 2560.5705 }, { satid: 11574, satname: 'SL-8 R/B', intDesignator: '1979-089B', launchDate: '1979-10-11', satlat: 2.7604, satlng: 23.4911, satalt: 768.4681 }, { satid: 14699, satname: 'COSMOS 1536', intDesignator: '1984-013A', launchDate: '1984-02-08', satlat: -16.0092, satlng: 4.3391, satalt: 563.4598 }, { satid: 20453, satname: 'DELTA 2 R/B(1)', intDesignator: '1990-008B', launchDate: '1990-01-24', satlat: 1.6271, satlng: 6.8004, satalt: 546.7349 }, { satid: 21397, satname: 'OKEAN 3', intDesignator: '1991-039A', launchDate: '1991-06-04', satlat: -8.9883, satlng: 21.0788, satalt: 581.8804 }, { satid: 21819, satname: 'INTERCOSMOS 25', intDesignator: '1991-086A', launchDate: '1991-12-18', satlat: -20.7185, satlng: 5.9054, satalt: 2320.452 }, { satid: 22830, satname: 'ARIANE 40 R/B', intDesignator: '1993-061H', launchDate: '1993-09-26', satlat: 8.6248, satlng: -19.2675, satalt: 796.4665 }, { satid: 28116, satname: 'BREEZE-M DEB (TANK)', intDesignator: '2003-056E', launchDate: '2003-12-10', satlat: -33.6956, satlng: -48.4319, satalt: 18294.1319 }, { satid: 41470, satname: 'PSLV R/B', intDesignator: '2016-027B', launchDate: '2016-04-28', satlat: -17.8203, satlng: 9.1089, satalt: 10729.3686 }] }
    })
}

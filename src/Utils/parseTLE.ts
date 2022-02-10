import { TLEData } from 'api/tle'

export interface ParsedTLE {
    line1: {
        lineNumber: string,
        catalogNumber: string,
        classification: string,
        internationalDesignatorYear: string,
        internationalDesignatorLaunch: string,
        epochYear: string,
        epoch: string,
        meanMotionFirstDerivative: string,
        meanMotionSecondDerivative: string,
        drag: string,
        ephemerisType: string,
        elementSetNumber: string,
        checksum: string
      },
      line2: {
        lineNumber: string,
        catalogNumber: string,
        inclination: string,
        rightAscension: string,
        eccentricity: string,
        perigee: string,
        meanAnomaly: string,
        meanMotion: string,
        revolutionNumber: string,
        checksum: string
      }
}

type TLEMappingType = {
  line1: {
    'Line Number': 'lineNumber',
    'Satellite catalog number': 'catalogNumber',
    'Classification': 'classification',
    'International Designator (launch number of the year)': 'internationalDesignatorYear',
    'International Designator (piece of the launch)': 'internationalDesignatorLaunch',
    'Epoch year (last two digits of year)': 'epochYear',
    'Epoch (day of the year and fractional portion of the day)': 'epoch',
    'First derivative of mean motion': 'meanMotionFirstDerivative',
    'Second derivative of mean motion': 'meanMotionSecondDerivative',
    'The drag term, or radiation pressure coefficient': 'drag',
    'Ephemeris type': 'ephemerisType',
    'Element set number': 'elementSetNumber',
    'Checksum': 'checksum'
  },
  line2: {
    'Line Number': 'lineNumber',
    'Satellite catalog number': 'catalogNumber',
    'Inclination (degrees)': 'inclination',
    'Right ascension of the ascending node (degrees)': 'rightAscension',
    'Eccentricity (decimal point assumed)': 'eccentricity',
    'Argument of perigee (degrees)': 'perigee',
    'Mean anomaly (degrees)': 'meanAnomaly',
    'Mean motion (revolutions per day)': 'meanMotion',
    'Revolution number at epoch (revolutions)': 'revolutionNumber',
    'Checksum': 'checksum'
  }
}

export const TLEMapping: TLEMappingType = {
  line1: {
    'Line Number': 'lineNumber',
    'Satellite catalog number': 'catalogNumber',
    Classification: 'classification',
    'International Designator (launch number of the year)': 'internationalDesignatorYear',
    'International Designator (piece of the launch)': 'internationalDesignatorLaunch',
    'Epoch year (last two digits of year)': 'epochYear',
    'Epoch (day of the year and fractional portion of the day)': 'epoch',
    'First derivative of mean motion': 'meanMotionFirstDerivative',
    'Second derivative of mean motion': 'meanMotionSecondDerivative',
    'The drag term, or radiation pressure coefficient': 'drag',
    'Ephemeris type': 'ephemerisType',
    'Element set number': 'elementSetNumber',
    Checksum: 'checksum'
  },
  line2: {
    'Line Number': 'lineNumber',
    'Satellite catalog number': 'catalogNumber',
    'Inclination (degrees)': 'inclination',
    'Right ascension of the ascending node (degrees)': 'rightAscension',
    'Eccentricity (decimal point assumed)': 'eccentricity',
    'Argument of perigee (degrees)': 'perigee',
    'Mean anomaly (degrees)': 'meanAnomaly',
    'Mean motion (revolutions per day)': 'meanMotion',
    'Revolution number at epoch (revolutions)': 'revolutionNumber',
    Checksum: 'checksum'
  }
}

export const parseTLE = (satelliteData: TLEData): ParsedTLE => {
  const lines = satelliteData.tle.split('\r\n')
  return {
    line1: {
      lineNumber: lines[0][0],
      catalogNumber: lines[0].slice(2, 7),
      classification: lines[0][7],
      internationalDesignatorYear: lines[0].slice(9, 11),
      internationalDesignatorLaunch: lines[0].slice(14, 17),
      epochYear: lines[0].slice(18, 20),
      epoch: lines[0].slice(20, 32),
      meanMotionFirstDerivative: lines[0].slice(33, 43),
      meanMotionSecondDerivative: lines[0].slice(44, 52),
      drag: lines[0].slice(53, 61),
      ephemerisType: lines[0][62],
      elementSetNumber: lines[0].slice(64, 68),
      checksum: lines[0][68]
    },
    line2: {
      lineNumber: lines[1][0],
      catalogNumber: lines[1].slice(2, 7),
      inclination: lines[1].slice(8, 16),
      rightAscension: lines[1].slice(17, 25),
      eccentricity: lines[1].slice(26, 33),
      perigee: lines[1].slice(34, 42),
      meanAnomaly: lines[1].slice(43, 51),
      meanMotion: lines[1].slice(52, 63),
      revolutionNumber: lines[1].slice(63, 68),
      checksum: lines[1][68]
    }
  }
}

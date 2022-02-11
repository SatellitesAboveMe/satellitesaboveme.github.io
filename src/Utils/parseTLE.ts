import { TLEData } from 'api/tle'

export type TLEName = 'Line Number' | 'Satellite catalog number' | 'Classification' |
'International Designator (launch number of the year)' | 'International Designator (piece of the launch)' |
 'Epoch year (last two digits of year)' | 'Epoch (day of the year and fractional portion of the day)' |
'First derivative of mean motion' | 'Second derivative of mean motion' | 'The drag term, or radiation pressure coefficient' |
 'Ephemeris type' | 'Element set number' | 'Checksum' |
 'Inclination (degrees)' | 'Right ascension of the ascending node (degrees)' | 'Eccentricity (decimal point assumed)' |
 'Argument of perigee (degrees)' | 'Mean anomaly (degrees)' | 'Mean motion (revolutions per day)' |
 'Revolution number at epoch (revolutions)'

export type TLEProperty = 'lineNumber' | 'catalogNumber' | 'classification' |
'internationalDesignatorYear' | 'internationalDesignatorLaunch' | 'epochYear' |
'epoch' | 'meanMotionFirstDerivative' | 'meanMotionSecondDerivative' | 'drag' |
'ephemerisType' | 'elementSetNumber' | 'checksum' | 'inclination' | 'rightAscension' |
'eccentricity' | 'perigee' | 'meanAnomaly' | 'meanMotion' | 'revolutionNumber'

type TLEType<T> = {
  line1: Partial<Record<TLEProperty, T>>
  line2: Partial<Record<TLEProperty, T>>
}

export const TLEMapping: TLEType<TLEName> = {
  line1: {
    lineNumber: 'Line Number',
    catalogNumber: 'Satellite catalog number',
    classification: 'Classification',
    internationalDesignatorYear: 'International Designator (launch number of the year)',
    internationalDesignatorLaunch: 'International Designator (piece of the launch)',
    epochYear: 'Epoch year (last two digits of year)',
    epoch: 'Epoch (day of the year and fractional portion of the day)',
    meanMotionFirstDerivative: 'First derivative of mean motion',
    meanMotionSecondDerivative: 'Second derivative of mean motion',
    drag: 'The drag term, or radiation pressure coefficient',
    ephemerisType: 'Ephemeris type',
    elementSetNumber: 'Element set number',
    checksum: 'Checksum'
  },
  line2: {
    lineNumber: 'Line Number',
    catalogNumber: 'Satellite catalog number',
    inclination: 'Inclination (degrees)',
    rightAscension: 'Right ascension of the ascending node (degrees)',
    eccentricity: 'Eccentricity (decimal point assumed)',
    perigee: 'Argument of perigee (degrees)',
    meanAnomaly: 'Mean anomaly (degrees)',
    meanMotion: 'Mean motion (revolutions per day)',
    revolutionNumber: 'Revolution number at epoch (revolutions)',
    checksum: 'Checksum'
  }
}

export type ParsedTLE = TLEType<TLEName>

export const parseTLE = (satelliteData: TLEData): ParsedTLE => {
  const lines = satelliteData.tle.split('\r\n')
  return {
    line1: {
      lineNumber: lines[0][0].trim(),
      catalogNumber: lines[0].slice(2, 7).trim(),
      classification: lines[0][7].trim(),
      internationalDesignatorYear: lines[0].slice(9, 11).trim(),
      internationalDesignatorLaunch: lines[0].slice(14, 17).trim(),
      epochYear: lines[0].slice(18, 20).trim(),
      epoch: lines[0].slice(20, 32),
      meanMotionFirstDerivative: lines[0].slice(33, 43).trim(),
      meanMotionSecondDerivative: lines[0].slice(44, 52).trim(),
      drag: lines[0].slice(53, 61).trim(),
      ephemerisType: lines[0][62].trim(),
      elementSetNumber: lines[0].slice(64, 68).trim(),
      checksum: lines[0][68].trim()
    },
    line2: {
      lineNumber: lines[1][0].trim(),
      catalogNumber: lines[1].slice(2, 7).trim(),
      inclination: lines[1].slice(8, 16).trim(),
      rightAscension: lines[1].slice(17, 25).trim(),
      eccentricity: lines[1].slice(26, 33).trim(),
      perigee: lines[1].slice(34, 42).trim(),
      meanAnomaly: lines[1].slice(43, 51).trim(),
      meanMotion: lines[1].slice(52, 63).trim(),
      revolutionNumber: lines[1].slice(63, 68).trim(),
      checksum: lines[1][68].trim()
    }
  } as ParsedTLE
}

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { ParsedTLE } from 'utils/parseTLE'

interface TLETableProps {
    tle: ParsedTLE
}

export const TLETable = ({ tle }: TLETableProps) => {
  return (
        <TableContainer component={Paper}>
                <Table aria-label="simple table">
                   <TableHead>
                       <TableRow>
                           <TableCell align="right">LineNumber</TableCell>
                           <TableCell align="right">Satellite catalog number</TableCell>
                           <TableCell align="right">Classification</TableCell>
                           <TableCell align="right">International Designator (launch number of the year)</TableCell>
                           <TableCell align="right">International Designator (piece of the launch)</TableCell>
                           <TableCell align="right">Epoch year (last two digits of year)</TableCell>
                           <TableCell align="right">Epoch (day of the year and fractional portion of the day)</TableCell>
                           <TableCell align="right">First derivative of mean motion</TableCell>
                           <TableCell align="right">Second derivative of mean motion</TableCell>
                           <TableCell align="right">The drag term, or radiation pressure coefficient</TableCell>
                           <TableCell align="right">Ephemeris type</TableCell>
                           <TableCell align="right">Element set number</TableCell>
                           <TableCell align="right">Checksum</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">{tle.line1.lineNumber}</TableCell>
                            <TableCell align="right">{tle.line1.catalogNumber}</TableCell>
                            <TableCell align="right">{tle.line1.classification}</TableCell>
                            <TableCell align="right">{tle.line1.internationalDesignatorYear}</TableCell>
                            <TableCell align="right">{tle.line1.internationalDesignatorLaunch}</TableCell>
                            <TableCell align="right">{tle.line1.epochYear}</TableCell>
                            <TableCell align="right">{tle.line1.epoch}</TableCell>
                            <TableCell align="right">{tle.line1.meanMotionFirstDerivative}</TableCell>
                            <TableCell align="right">{tle.line1.meanMotionSecondDerivative}</TableCell>
                            <TableCell align="right">{tle.line1.drag}</TableCell>
                            <TableCell align="right">{tle.line1.ephemerisType}</TableCell>
                            <TableCell align="right">{tle.line1.elementSetNumber}</TableCell>
                            <TableCell align="right">{tle.line1.checksum}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Table aria-label="simple table">
                   <TableHead>
                       <TableRow>
                           <TableCell align="right">LineNumber</TableCell>
                           <TableCell align="right">Satellite catalog number</TableCell>
                           <TableCell align="right">Inclination (degrees)</TableCell>
                           <TableCell align="right">Right ascension of the ascending node (degrees)</TableCell>
                           <TableCell align="right">Eccentricity (decimal point assumed)</TableCell>
                           <TableCell align="right">Argument of perigee (degrees)</TableCell>
                           <TableCell align="right">Mean anomaly (degrees)</TableCell>
                           <TableCell align="right">Mean motion (revolutions per day)</TableCell>
                           <TableCell align="right">Revolution number at epoch (revolutions)</TableCell>
                           <TableCell align="right">Checksum </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="right">{tle.line2.lineNumber}</TableCell>
                            <TableCell align="right">{tle.line2.catalogNumber}</TableCell>
                            <TableCell align="right">{tle.line2.inclination}</TableCell>
                            <TableCell align="right">{tle.line2.rightAscension}</TableCell>
                            <TableCell align="right">{tle.line2.eccentricity}</TableCell>
                            <TableCell align="right">{tle.line2.perigee}</TableCell>
                            <TableCell align="right">{tle.line2.meanAnomaly}</TableCell>
                            <TableCell align="right">{tle.line2.meanMotion}</TableCell>
                            <TableCell align="right">{tle.line2.revolutionNumber}</TableCell>
                            <TableCell align="right">{tle.line2.checksum}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
  )
}

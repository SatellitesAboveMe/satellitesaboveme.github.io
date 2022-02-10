import { Paper, Table, TableCell, TableContainer, TableRow, Grid, Container } from '@mui/material'
import { ParsedTLE, TLEMapping } from 'utils/parseTLE'

interface TLETableProps {
    tle: ParsedTLE
}

export const TLETable = ({ tle }: TLETableProps) => {
  return (
      <Container>
      <Grid container spacing={2}>
        <Grid item md={6}>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    {
                        Object.entries(TLEMapping.line1).map(
                          ([name, propertyName]) => (
                                <TableRow key={propertyName}>
                                    <TableCell variant="head">{name}</TableCell>
                                    <TableCell>{(tle.line1)[propertyName]}</TableCell>
                                </TableRow>
                          )
                        )
                    }
                </Table>
            </TableContainer>
        </Grid>
        <Grid item md={6}>
         <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    {
                        Object.entries(TLEMapping.line2).map(
                          ([name, propertyName]) => (
                                <TableRow key={propertyName}>
                                    <TableCell variant="head">{name}</TableCell>
                                    <TableCell>{(tle.line2)[propertyName]}</TableCell>
                                </TableRow>
                          )
                        )
                    }
                </Table>
            </TableContainer>
        </Grid>
    </Grid>
    </Container>
  )
}

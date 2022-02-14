import { Card, Typography, CardContent, Grid } from '@mui/material'
import { Note as NoteType } from 'stores/satelliteNotesStore'

export const Note = (props: NoteType) => {
  const {
    title,
    text
  } = props

  return (
      <Grid item xl={3} lg={4} md={6} xs={12}>
        <Card>
            <CardContent>
                <Typography variant="h5" align='center'>
                    {title}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  )
}

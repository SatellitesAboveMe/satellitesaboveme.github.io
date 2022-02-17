import { Card, Typography, CardContent, Grid } from '@mui/material'
import { Note as NoteType } from 'stores/satelliteNotesStore'
import ReactMarkdown from 'react-markdown'

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
                <ReactMarkdown>
                  {text}
                </ReactMarkdown>
            </CardContent>
        </Card>
    </Grid>
  )
}

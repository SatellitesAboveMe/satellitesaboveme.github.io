import { InputAdornment, Tooltip } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { ReactComponent as MarkdownIcon } from 'assets/img/markdown.svg'

export const MDTooltip = () => {
  const useStyles = makeStyles(() => ({
    root: {
      alignSelf: 'end',
      cursor: 'pointer'
    }
  }))

  const classes = useStyles()

  return (
  <InputAdornment position="end" classes={classes}>
      <Tooltip title="Markdown is supported" placement="top" arrow>
          <MarkdownIcon />
        </Tooltip>
    </InputAdornment>
  )
}

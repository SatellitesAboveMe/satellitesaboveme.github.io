import { Button as ButtonMUI, ButtonProps as MUIButtonProps } from '@mui/material'

interface ButtonProps {
    title: string;
}

export const SubmitButton = (props: ButtonProps & MUIButtonProps) => {
  const {
    title,
    ...buttonBaseProps
  } = props

  return (
        <ButtonMUI variant="contained" type='submit' {...buttonBaseProps}>{title}</ButtonMUI>
  )
}

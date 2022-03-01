import { Button as ButtonMUI, ButtonProps as MUIButtonProps } from '@mui/material'
import { FieldValues } from 'react-hook-form'
import { FormFieldProps } from './types'

interface ButtonProps {
    title: string;
}

export const SubmitButton = <FormValues extends FieldValues>(props: ButtonProps & MUIButtonProps & FormFieldProps<FormValues>) => {
  const {
    title,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue,
    ...buttonBaseProps
  } = props

  return (
        <ButtonMUI variant="contained" type='submit' {...buttonBaseProps}>{title}</ButtonMUI>
  )
}

import { Controller, FieldValues, Path } from 'react-hook-form'
import { FormFieldProps } from './types'
import { TextField as TextFieldMUI } from '@mui/material'

interface TextFieldProps<FormValues> {
    label: string;
    name: Path<FormValues>;
    variant?: string;
    margin?: string;
}

export const TextField = <FormValues extends FieldValues>(props: FormFieldProps<FormValues> & TextFieldProps<FormValues>) => {
  const {
    name,
    control,
    label
  } = props

  return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextFieldMUI error={!!error} helperText={error?.message} id={name} label={label} variant="outlined" margin="normal" {...field} value={value} />
            }}
        />
  )
}

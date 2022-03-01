import { Controller, FieldValues, Path } from 'react-hook-form'
import { FormFieldProps } from './types'
import { StandardTextFieldProps, TextField as TextFieldMUI } from '@mui/material'

interface TextFieldProps<FormValues> {
    label: string;
    name: Path<FormValues>;
    variant?: string;
    margin?: string;
}

export const TextField = <FormValues extends FieldValues>(
  props: FormFieldProps<FormValues> & TextFieldProps<FormValues> & StandardTextFieldProps
) => {
  const {
    name,
    control,
    label,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getValues,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setValue,
    ...inputProps
  } = props

  return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextFieldMUI error={!!error} helperText={error?.message} id={name} label={label} variant="outlined" margin="normal" {...inputProps} {...field} value={value} />
            }}
        />
  )
}

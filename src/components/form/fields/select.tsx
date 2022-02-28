import { Controller, FieldValues, Path } from 'react-hook-form'
import { MenuItem, TextField as TextFieldMUI } from '@mui/material'
import { FormFieldProps } from './types'
import { useCallback } from 'react'

interface SelectFieldProps<FormValues> {
    label: string;
    name: Path<FormValues>;
    variant?: string;
    margin?: 'none' | 'dense' | 'normal';
    children: (ReturnType<typeof MenuItem>)[] | (ReturnType<typeof MenuItem>);
}

export const SelectField = <FormValues extends FieldValues>(props: SelectFieldProps<FormValues> & FormFieldProps<FormValues>) => {
  const {
    name,
    control,
    margin,
    label,
    setValue,
    children
  } = props

  const onChange = useCallback((event) => {
    const newValue: any = parseInt(event.target.value)
        setValue!(name, newValue)
  }, [setValue])

  return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return (
                    <TextFieldMUI error={!!error} onChange={onChange} helperText={error?.message} select id="category" label={label} margin={margin} value={value}>
                        {
                            children
                        }
                    </TextFieldMUI>
              )
            }}
        />
  )
}

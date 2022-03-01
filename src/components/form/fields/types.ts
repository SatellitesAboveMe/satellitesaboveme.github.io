import { Control, UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import React from 'react'

export type FormFieldProps<FormValues> = {
    setValue?: UseFormSetValue<FormValues>;
    getValues?: UseFormGetValues<FormValues>;
    control?: Control<FormValues>;
}
export type FormFieldComponent<FormValues> = React.ReactElement<FormFieldProps<FormValues>>

import { yupResolver } from '@hookform/resolvers/yup'
import { FormGroup } from '@mui/material'
import { Children, cloneElement } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { object as yupObject } from 'yup'
import { FormFieldComponent } from './fields/types'

interface FormProps<FormValues extends FieldValues> {
    onSubmit: SubmitHandler<FormValues>;
    validationScheme?: ReturnType<typeof yupObject>;
    children: FormFieldComponent<FormValues>[] | FormFieldComponent<FormValues>;
}

export const Form = <FormValues extends FieldValues>(props: FormProps<FormValues>) => {
  const {
    children,
    validationScheme,
    onSubmit
  } = props

  const { control, handleSubmit, setValue, getValues } = useForm<FormValues>({
    resolver: validationScheme && yupResolver(validationScheme)
  })

  return (
        <form onSubmit={handleSubmit(onSubmit)} data-testid='test-form'>
            <FormGroup>
                {
                    Children.map(children, child => {
                      return cloneElement(child, { control, setValue, getValues })
                    })
                }
            </FormGroup>
        </form>
  )
}

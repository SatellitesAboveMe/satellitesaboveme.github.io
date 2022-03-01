import { Button as ButtonMUI } from '@mui/material'
import { useCallback } from 'react'
import { FieldValues, UseFormGetValues, UseFormSetValue } from 'react-hook-form'

interface ButtonProps<FormValues> {
    setValue?: UseFormSetValue<FormValues>;
    getValues?: UseFormGetValues<FormValues>;
    onClick?: (setValue: UseFormSetValue<FormValues>, getValues: UseFormGetValues<FormValues>) => void;
    title: string;
}

export const Button = <FormValues extends FieldValues>(props: ButtonProps<FormValues>) => {
  const {
    setValue,
    getValues,
    onClick,
    title
  } = props

  const onClickButton = useCallback(() => {
    onClick && onClick(setValue!, getValues!)
  }, [setValue, getValues, onClick])

  return (
        <ButtonMUI variant="outlined" onClick={onClickButton}>{title}</ButtonMUI>
  )
}

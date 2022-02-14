/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button, Container, FormGroup, StandardTextFieldProps, TextField, TextFieldProps } from '@mui/material'
import { Controller, ControllerFieldState, ControllerRenderProps, FieldValue, FieldValues, Path, useForm } from 'react-hook-form'
import { satelliteNotesStore } from 'stores/satelliteNotesStore'

type NoteSubmitData = {
    title?: string;
    text: string;
}

interface ControlledTextFieldProps<T extends keyof NoteSubmitData> extends StandardTextFieldProps{
    field: ControllerRenderProps<NoteSubmitData, T>;
    fieldState: ControllerFieldState;
}

const ControlledTextField = <T extends keyof NoteSubmitData>({ field, fieldState: { error }, ...props }: ControlledTextFieldProps<T>) => {
  const value = field.value || ''
  return <TextField error={!!error} helperText={error?.message} variant='outlined' margin='normal' {...field} value={value} {...props}/>
}

interface NotesFormProps {
    id: number;
}

export const NotesForm = (props: NotesFormProps) => {
  const {
    id
  } = props

  const onSubmit = (values: NoteSubmitData) => {
    values.text && satelliteNotesStore.addSatelliteNote(id, values)
  }

  const { control, handleSubmit } = useForm<NoteSubmitData>()

  return (
    <Container maxWidth={'xs'}>
        <FormGroup>
            <Controller
               name='title'
               control={control}
               render={props => <ControlledTextField id={'title'} label={'Title'} inputProps={{ maxLength: 25 }} {...props}/>}
            />
            <Controller
               name='text'
               control={control}
               render={props => <ControlledTextField id={'text'} label={'Text'} multiline minRows={3} inputProps={{ maxLength: 100 }} {...props}/>}
            />
            <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Save note</Button>
        </FormGroup>
    </Container>
  )
}

import { Box, Button, FormGroup, StandardTextFieldProps, TextField } from '@mui/material'
import { Controller, ControllerFieldState, ControllerRenderProps, useForm } from 'react-hook-form'
import { satelliteNotesStore } from 'stores/satelliteNotesStore'
import { MDTooltip } from './mdTooltip'

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
  <Box mb={4}>
    <FormGroup>
            <Controller
               name='title'
               control={control}
               render={props => <ControlledTextField id={'title'} label={'Title'} inputProps={{ maxLength: 25 }} {...props}/>}
            />
            <Controller
               name='text'
               control={control}
               render={props => <ControlledTextField id={'text'} label={'Text'} multiline minRows={3} inputProps={{ maxLength: 400 }}
               InputProps={{ endAdornment: <MDTooltip /> }}
               {...props}/>}
            />
            <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Save note</Button>
      </FormGroup>
  </Box>
  )
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup'
import { StandardTextFieldProps, Box } from '@mui/material'
import { Controller, ControllerFieldState, ControllerRenderProps, useForm } from 'react-hook-form'
import { satelliteNotesStore } from 'stores/satelliteNotesStore'
import { MDTooltip } from 'components/notesForm/mdTooltip'
import { validationScheme } from 'components/notesForm/scheme'
import { Form } from 'components/form'
import { TextField } from 'components/form/fields/textField'
import { SubmitButton } from 'components/form/fields/submitButton'

type NoteSubmitData = {
  title?: string;
  text: string;
}

interface ControlledTextFieldProps<T extends keyof NoteSubmitData> extends StandardTextFieldProps {
  field: ControllerRenderProps<NoteSubmitData, T>;
  fieldState: ControllerFieldState;
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

  // const { control, handleSubmit } = useForm<NoteSubmitData>({
  //   resolver: yupResolver(validationScheme)
  // })

  // return (
  //   <Box mb={4}>
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <FormGroup>
  //         <Controller
  //           name='title'
  //           control={control}
  //           render={props => <ControlledTextField id={'title'} label={'Title'} inputProps={{ maxLength: 25 }} {...props} />}
  //         />
  //         <Controller
  //           name='text'
  //           control={control}
  //           render={props => <ControlledTextField id={'text'} label={'Text'} multiline minRows={3} inputProps={{ maxLength: 400 }}
  //             InputProps={{ endAdornment: <MDTooltip /> }}
  //             {...props} />}
  //         />
  //         <Button variant="contained" type="submit">Save note</Button>
  //       </FormGroup>
  //     </form>
  //   </Box>
  // )

  return (
    <Box mb={4}>
      <Form onSubmit={onSubmit} validationScheme={validationScheme}>
        <TextField label='Title' name='title' margin='normal' />
        <TextField label='Text' name='text' multiline minRows={3} inputProps={{ maxLength: 400 }} InputProps={{ endAdornment: <MDTooltip /> }} margin='normal' />
        <SubmitButton title='Save note' />
      </Form>
    </Box>
  )
}

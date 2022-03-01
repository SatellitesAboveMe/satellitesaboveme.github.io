import { MenuItem, Box } from '@mui/material'
import { useCallback } from 'react'
import { scheme } from 'components/locationForm/scheme'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { UserFormData, satelliteCategories } from 'api/above'
import { Form } from 'components/form'
import { TextField } from 'components/form/fields/textField'
import { Button } from 'components/form/fields/button'
import { SelectField } from 'components/form/fields/select'

export const LocationForm = () => {
  const onSubmit = (values: UserFormData) => {
    satelliteTableStore.fetchData(values)
  }

  const getLocationAutomatically = useCallback((setValue) => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { coords: { latitude, longitude } } = location
      setValue('latitude', latitude)
      setValue('longitude', longitude)
    },
    error => console.error(error)
    )
  }, [])

  return (
    <Box mb={3}>
      <Form onSubmit={onSubmit} validationScheme={scheme}>
        <TextField name="latitude" label="Latitude"/>
        <TextField name="longitude" label="Longitude" margin='normal'/>
        <Button title="Get my location" onClick={getLocationAutomatically}/>
        <TextField name="radius" label="Radius of search" margin='normal' />
        <SelectField name='category' label='Satellite category' margin='normal'>
          {
            satelliteCategories.map(
              satelliteCategory => <MenuItem key={satelliteCategory.id} value={satelliteCategory.id}>{satelliteCategory.name}</MenuItem>
            )
          }
        </SelectField>
      </Form>
    </Box>
  )
}

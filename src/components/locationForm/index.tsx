import { TextField, FormGroup, Button, MenuItem, Box } from '@mui/material'
import { useCallback } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { scheme } from 'components/locationForm/scheme'
import { satelliteTableStore } from 'stores/satelliteTableStore'
import { UserFormData, satelliteCategories } from 'api/above'

export const LocationForm = () => {
  const onSubmit = (values: UserFormData) => {
    satelliteTableStore.fetchData(values)
  }

  const { control, handleSubmit, setValue } = useForm<UserFormData>({
    resolver: yupResolver(scheme)
  })

  const getLocationAutomatically = useCallback(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const { coords: { latitude, longitude } } = location
      setValue('latitude', latitude)
      setValue('longitude', longitude)
    },
    error => console.error(error)
    )
  }, [setValue])

  return (
    <Box mb={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Controller
            name="latitude"
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextField error={!!error} helperText={error?.message} id="latitude" label="Latitute" variant="outlined" margin="normal" {...field} value={value} />
            }}
          />
          <Controller
            name="longitude"
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextField error={!!error} helperText={error?.message} id="longitude" label="Longitude" variant="outlined" margin="normal" {...field} value={value} />
            }}
          />
          <Button variant="outlined" onClick={getLocationAutomatically}>Get my location automatically</Button>
          <Controller
            name="radius"
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextField error={!!error} helperText={error?.message} id="radius" label="Radius of search" variant="outlined" margin="normal" {...field} value={value} />
            }
            }
          />
          <Controller
            name="category"
            control={control}
            render={({ field, fieldState: { error } }) => {
              const value = field.value || ''
              return <TextField error={!!error} onChange={(event) => setValue('category', parseInt(event.target.value))} helperText={error?.message} select id="category" label="Satellite category" margin="normal" value={value}>
                {
                  satelliteCategories.map(
                    satelliteCategory => <MenuItem key={satelliteCategory.id} value={satelliteCategory.id}>{satelliteCategory.name}</MenuItem>
                  )
                }
              </TextField>
            }}
          />

          <Button variant="contained" type="submit">Find satellites above me!</Button>
        </FormGroup>
      </form>
    </Box>
  )
}

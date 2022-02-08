import { TextField, FormGroup, Button} from "@mui/material";
import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { scheme } from "./validationScheme";

export const LocationForm = () => {

    const onSubmit = (values: any) => {
        console.log(values)
    }

    const {control, handleSubmit, setValue} = useForm({
      resolver: yupResolver(scheme),
    });

    const getLocationAutomatically = useCallback(() => {
        navigator.geolocation.getCurrentPosition((location) => {
            const {coords: {latitude, longitude}} = location;
            setValue("latitude", latitude);
            setValue("longitude", longitude);
        },
             error => console.error(error)
        )
    }, [setValue]);

    return (
    <FormGroup onSubmit={() => console.log(123)}>
      <Controller
        name="latitude"
        control={control}
        render={({ field, fieldState: {error} }) =>{ 
            const value = field.value || "";
            return <TextField error={!!error} helperText={error?.message} id="latitude" label="Latitute" variant="outlined" margin="normal" {...field} value={value}/> 
        }}
      />
      <Controller
        name="longitude"
        control={control}
        render={({ field, fieldState: {error} }) => {
            const value = field.value || "";
            return <TextField error={!!error} helperText={error?.message} id="longitude" label="Longitude" variant="outlined" margin="normal" {...field} value={value} />
        }}
      />
      <Button variant="outlined" onClick={getLocationAutomatically}>Get my location automatically</Button>
      <Controller
        name="radius"
        control={control}
        render={({ field, fieldState: {error} }) => {
            const value = field.value || "";
            return <TextField error={!!error} helperText={error?.message} id="radius" label="Radius of search" variant="outlined" margin="normal" {...field} value={value}/>}
        }
      />
      <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Find satellites above me!</Button>
    </FormGroup>
    );
}
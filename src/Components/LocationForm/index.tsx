import { TextField, FormGroup, Button} from "@mui/material";
import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";

export const LocationForm = () => {

    const onSubmit = (values: any) => {
        console.log(values)
    }

    const {control, handleSubmit, setValue} = useForm();

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
        render={({ field }) =>{ 
            const value = field.value || "";
            return <TextField id="latitude" label="Latitute" variant="outlined" margin="normal" {...field} value={value}/> 
        }}
      />
      <Controller
        name="longitude"
        control={control}
        render={({ field }) => {
            const value = field.value || "";
            return <TextField id="longitude" label="Longitude" variant="outlined" margin="normal" {...field} value={value} />
        }}
      />
            <Button variant="outlined" onClick={getLocationAutomatically}>Get my location automatically</Button>
      <Controller
        name="radius"
        control={control}
        render={({ field }) => {
            const value = field.value || "";
        return <TextField id="radius" label="Radius of search" variant="outlined" margin="normal" {...field} value={value}/>}
        }
      />
      <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)}>Find satellites above me!</Button>
    </FormGroup>
    );
}
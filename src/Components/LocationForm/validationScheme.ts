import { object, number } from 'yup'

export const scheme = object({
  latitude: number().required().min(0),
  longitude: number().required().min(0),
  radius: number().required().min(0).max(90)
})

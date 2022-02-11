import { object, number } from 'yup'

export const scheme = object({
  latitude: number().required().min(-90).max(90),
  longitude: number().required().min(-180).max(180),
  radius: number().required().min(0).max(90),
  category: number().required().min(1).max(5) // currently only available from 1 to 5
})

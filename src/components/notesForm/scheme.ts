import { object, string } from 'yup'

export const validationScheme = object({
  title: string().notRequired(),
  text: string().required()
})

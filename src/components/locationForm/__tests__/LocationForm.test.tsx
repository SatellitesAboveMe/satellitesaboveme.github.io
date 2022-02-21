import { fireEvent, render } from '@testing-library/react'
import { LocationForm } from 'components/locationForm'

test('location form component', () => {
  const container = render(<LocationForm />)

  const inputLatitude = container.getByLabelText('Latitude')
  expect(inputLatitude).toHaveAttribute('type', 'text')
  expect(inputLatitude).toHaveAttribute('name', 'latitude')
  fireEvent.change(inputLatitude, { target: { value: 123 } })
  expect(inputLatitude).toHaveValue('123')

  const inputLongitude = container.getByLabelText('Longitude')
  expect(inputLongitude).toHaveAttribute('type', 'text')
  expect(inputLongitude).toHaveAttribute('name', 'longitude')
  fireEvent.change(inputLongitude, { target: { value: 321 } })
  expect(inputLongitude).toHaveValue('321')

  const inputRadius = container.getByLabelText('Radius of search')
  expect(inputRadius).toHaveAttribute('type', 'text')
  expect(inputRadius).toHaveAttribute('name', 'radius')
  fireEvent.change(inputRadius, { target: { value: 999 } })
  expect(inputRadius).toHaveValue('999')

  const selectCategoryInput = container.getByLabelText('Satellite category')
  expect(selectCategoryInput).toBeInTheDocument()
})

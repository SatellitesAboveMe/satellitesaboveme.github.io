import { render } from '@testing-library/react'
import { Form } from 'components/form'
import { TextField } from 'components/form/fields/textField'
import { SelectField } from 'components/form/fields/select'
import { MenuItem } from '@mui/material'
import { Button } from 'components/form/fields/button'

describe('Form component test', () => {
  test('empty form render', () => {
    const container = render(<Form />)
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
  })

  test('form with a text field', () => {
    const container = render(
            <Form>
                <TextField label='label' name='name'/>
            </Form>
    )
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
    const textField = container.getByLabelText('label')
    expect(textField).toBeInTheDocument()
  })

  test('form with a select', () => {
    const container = render(
            <Form>
                <SelectField label='select' name='name'>
                    <MenuItem value={'1'}>value 1</MenuItem>
                    <MenuItem value={'2'}>value 2</MenuItem>
                </SelectField>
            </Form>
    )
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
    const select = container.getByLabelText('select')
    expect(select).toBeInTheDocument()
  })

  test('form with a button', () => {
    const container = render(
            <Form>
                <Button title='button'/>
            </Form>
    )
    const form = container.getByTestId('test-form')
    expect(form).toBeInTheDocument()
    const button = container.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})

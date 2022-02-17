import { fireEvent, render } from '@testing-library/react'
import { NotesForm } from '..'

test('notes form component', () => {
    const container = render(<NotesForm id={0} />)

    const titleInput = container.getByLabelText('Title')
    expect(titleInput).toHaveAttribute('type', 'text')
    expect(titleInput).toHaveAttribute('name', 'title')

    const textInput = container.getByLabelText('Text')
    expect(textInput).toHaveAttribute('type', 'text')
    expect(textInput).toHaveAttribute('name', 'text')
})
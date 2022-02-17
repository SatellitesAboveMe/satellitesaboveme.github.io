import { render, waitFor } from '@testing-library/react'
import { Note } from 'components/satelliteNotes/note'

describe('SatelliteNotes component', () => {
    test('render note', async () => {
        const container = render(<Note title={'title'} text={'text'}/>)
        const titleElement = container.getByRole('heading')
        expect(titleElement).toBeInTheDocument()
        expect(titleElement).toHaveTextContent('title')
    })
})
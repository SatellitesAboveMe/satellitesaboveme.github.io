import { render, waitFor } from '@testing-library/react'
import SatelliteNotes from 'components/satelliteNotes'

describe('SatelliteNotes component', () => {
    test('render form', () => {
        const container = render(<SatelliteNotes id={0}/>)
        waitFor(() => expect(container.getByRole('form')))
    })
})
import { render, waitFor } from '@testing-library/react'
import SatelliteNotes from 'components/satelliteNotes'

describe('SatelliteNotes component', () => {
  test('render form', async () => {
    const container = render(<SatelliteNotes id={0}/>)
    await waitFor(() => expect(container.getByTestId('test-form')))
  })
})

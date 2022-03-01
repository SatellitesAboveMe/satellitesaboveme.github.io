import { render } from "@testing-library/react"
import { FetchingComponent } from "components/fetching"

describe('Fetching component test', () => {
    test('render fetching', () => {
        const container = render(<FetchingComponent/>)
        const skeletons = container.getByTestId('skeletons')
        expect(skeletons).toBeInTheDocument()
    })
})
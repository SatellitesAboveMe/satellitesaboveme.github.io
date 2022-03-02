import { render } from '@testing-library/react'
import { RequestState } from 'api/state'
import { RenderDependingOnState } from 'components/renderDependingOnState'

describe('RenderDependingOnState component', () => {
  test('info component', () => {
    const container = render(<RenderDependingOnState
            state={RequestState.Done}

            InfoComponent={<div data-testid={'info-component'}>info</div>}
            FetchingComponent={<div data-testid={'fetching-component'} >fetching</div>}
            ErrorComponent={<div data-testid={'error-component'}>error</div>}
        />)
    const infoComponent = container.getByTestId('info-component')
    expect(infoComponent).toBeInTheDocument()
    expect(infoComponent).toHaveTextContent('info')
  })

  test('fetching component', () => {
    const container = render(<RenderDependingOnState
            state={RequestState.Fetching}

            InfoComponent={<div data-testid={'info-component'}>info</div>}
            FetchingComponent={<div data-testid={'fetching-component'} >fetching</div>}
            ErrorComponent={<div data-testid={'error-component'}>error</div>}
        />)
    const fetchingComponent = container.getByTestId('fetching-component')
    expect(fetchingComponent).toBeInTheDocument()
    expect(fetchingComponent).toHaveTextContent('fetching')
  })

  test('error component', () => {
    const container = render(<RenderDependingOnState
            state={RequestState.Error}

            InfoComponent={<div data-testid={'info-component'}>info</div>}
            FetchingComponent={<div data-testid={'fetching-component'} >fetching</div>}
            ErrorComponent={<div data-testid={'error-component'}>error</div>}
        />)
    const errorComponent = container.getByTestId('error-component')
    expect(errorComponent).toBeInTheDocument()
    expect(errorComponent).toHaveTextContent('error')
  })
})

import { RequestState } from 'api/state'
import { FetchingComponent } from 'components/fetching'

interface RenderDependingOnStateProps {
    ErrorComponent?: JSX.Element;
    FetchingComponent?: JSX.Element,
    InfoComponent: JSX.Element,
    state?: RequestState
}

const deafultErrorComponent = <span data-testid='error-component'>Error!</span>
const defaultFetcginComponent = <FetchingComponent />

export const RenderDependingOnState = (props: RenderDependingOnStateProps) => {
  const {
    state,
    ErrorComponent = deafultErrorComponent,
    FetchingComponent = defaultFetcginComponent,
    InfoComponent
  } = props

  switch (state) {
    case RequestState.Error:
      return ErrorComponent
    case RequestState.Fetching:
      return FetchingComponent
    case RequestState.Done:
      return InfoComponent
    default:
      return <></>
  }
}

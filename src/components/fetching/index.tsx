import { Skeleton } from '@mui/material'

export const FetchingComponent = () => {
  return (
    <div data-testid="skeletons">
      <Skeleton/>
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  )
}

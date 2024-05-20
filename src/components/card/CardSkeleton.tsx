import { Skeleton } from "@mui/material"

const CardSkeleton = () => {
  return (
    <div className="w-full shadow-lg rounded-md">
      <Skeleton variant="rectangular" width="100%" height={180} />
      <div className="w-full p-6">
        <Skeleton variant="text" width="100%" height={32} />
        <Skeleton variant="text" width="100%" height={72} />
      </div>
    </div>
  )
}

export default CardSkeleton
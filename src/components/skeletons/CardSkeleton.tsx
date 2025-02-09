import { Skeleton } from "@/components/ui/skeleton"

export function CardSkeleton() {
  return (
    <div className="bg-card p-6 rounded-lg shadow">
      <Skeleton className="h-6 w-1/3 mb-4" />
      <Skeleton className="h-[300px] w-full" />
    </div>
  )
}

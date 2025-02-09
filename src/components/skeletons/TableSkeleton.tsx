import { Skeleton } from "@/components/ui/skeleton"

export function TableSkeleton() {
  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex justify-between">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={`header-${i}`} className="h-8 w-[120px]" />
        ))}
      </div>

      {/* Data rows */}
      {[...Array(5)].map((_, i) => (
        <div key={`row-${i}`} className="flex justify-between">
          {[...Array(4)].map((_, j) => (
            <Skeleton key={`cell-${i}-${j}`} className="h-12 w-[120px]" />
          ))}
        </div>
      ))}
    </div>
  )
}

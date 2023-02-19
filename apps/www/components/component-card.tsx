import React from "react"
import { AspectRatio } from "@shadcn/ui"
import { cn } from "@shadcn/utils"

export function ComponentCard({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <AspectRatio ratio={1 / 1} asChild>
      <div
        className={cn(
          "flex items-center justify-center rounded-md border border-slate-200 p-8 dark:border-slate-700",
          className
        )}
        {...props}
      />
    </AspectRatio>
  )
}

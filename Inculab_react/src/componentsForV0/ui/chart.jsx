"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const ChartContainer = React.forwardRef(({ className, config, children, ...props }, ref) => {
  const [colors, setColors] = React.useState({})

  React.useEffect(() => {
    if (config) {
      const colorEntries = Object.entries(config).map(([key, value]) => {
        return [`--color-${key}`, value.color]
      })
      setColors(Object.fromEntries(colorEntries))
    }
  }, [config])

  return (
    <div ref={ref} className={cn("w-full h-[350px]", className)} style={colors} {...props}>
      {children}
    </div>
  )
})
ChartContainer.displayName = "ChartContainer"

const ChartTooltipContent = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-background border rounded-md shadow-md px-3 py-2 text-sm", className)}
      {...props}
    />
  )
})
ChartTooltipContent.displayName = "ChartTooltipContent"

const ChartTooltip = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-background border rounded-md shadow-md px-3 py-2 text-sm", className)}
      {...props}
    />
  )
})
ChartTooltip.displayName = "ChartTooltip"

export { ChartContainer, ChartTooltipContent, ChartTooltip }

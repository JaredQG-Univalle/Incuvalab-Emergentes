import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent: "bg-accent text-accent-foreground hover:bg-accent/80",
        ghost: "bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        "ghost-border":
          "bg-background text-foreground hover:bg-accent hover:text-accent-foreground border border-input",
        "ghost-border-bottom":
          "bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-b-2 border-primary rounded-none px-2",
        "ghost-border-bottom-muted":
          "bg-background text-foreground hover:bg-accent hover:text-accent-foreground border-b-2 border-muted rounded-none px-2",
        transparent: "bg-transparent text-foreground hover:bg-transparent hover:opacity-80",
        "transparent-border":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border border-input",
        "transparent-border-bottom":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-primary rounded-none px-2",
        "transparent-border-bottom-muted":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-muted rounded-none px-2",
        "transparent-border-bottom-input":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-input rounded-none px-2",
        "transparent-border-bottom-foreground":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-foreground rounded-none px-2",
        "transparent-border-bottom-background":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-background rounded-none px-2",
        "transparent-border-bottom-accent":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-accent rounded-none px-2",
        "transparent-border-bottom-secondary":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-secondary rounded-none px-2",
        "transparent-border-bottom-destructive":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-destructive rounded-none px-2",
        "transparent-border-bottom-ring":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-ring rounded-none px-2",
        "transparent-border-bottom-border":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-border rounded-none px-2",
        "transparent-border-bottom-popover":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-popover rounded-none px-2",
        "transparent-border-bottom-popover-foreground":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-popover-foreground rounded-none px-2",
        "transparent-border-bottom-card":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-card rounded-none px-2",
        "transparent-border-bottom-card-foreground":
          "bg-transparent text-foreground hover:bg-transparent hover:opacity-80 border-b-2 border-card-foreground rounded-none px-2",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
        "icon-sm": "h-7 w-7 rounded-md",
        "icon-md": "h-8 w-8 rounded-md",
        "icon-lg": "h-10 w-10 rounded-md",
        "icon-xl": "h-12 w-12 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }

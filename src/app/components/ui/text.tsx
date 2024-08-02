import { forwardRef } from "react"

import { cn } from "@/app/lib/utils"

type HeadingProps = {
  slot?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & React.HTMLAttributes<HTMLHeadingElement>

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ slot: Slot = "h1", className, ...props }, ref) => (
    <Slot
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
)

Heading.displayName = "Heading"

const Paragraph = forwardRef<
  HTMLParagraphElement,
  React.HTMLProps<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("leading-normal", className)} {...props} />
))

Paragraph.displayName = "Paragraph"

export { Heading, Paragraph }

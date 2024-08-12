"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"
import { DayPicker } from "react-day-picker-v9"

import { buttonVariants } from "@/app/components/ui/button"
import { cn } from "@/app/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-y-4 sm:gap-x-4 sm:gap-y-0",
        month: "flex flex-col gap-y-4",
        month_caption: "flex justify-center relative items-center",
        dropdowns: "flex items-center flex-col gap-3 w-full mx-10",
        dropdown: "flex",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center absolute inset-x-0 mx-3",
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1 -top-1 z-50",
        ),
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1 -top-1 z-50",
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
        week: "flex w-full mt-2",
        day: cn(
          "group relative p-0 text-center text-sm focus-within:relative focus-within:z-20 aria-selected:bg-accent aria-selected:[&.day-outside]:bg-accent/50",
          props.mode === "range"
            ? "[&.day-range-end]:rounded-r-md [&.day-range-start]:rounded-l-md aria-selected:[&.day-range-end]:rounded-r-md first:aria-selected:rounded-l-md last:aria-selected:rounded-r-md"
            : "aria-selected:rounded-md",
        ),
        day_button:
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal group-aria-selected:opacity-100",
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "day-selected *:aria-selected:bg-primary *:aria-selected:text-primary-foreground *:hover:bg-primary *:hover:text-primary-foreground *:aria-selected:focus:bg-primary *:aria-selected:focus:text-primary-foreground",
        today: "*:bg-accent *:text-accent-foreground",
        outside:
          "day-outside *:text-muted-foreground *:opacity-50 *:aria-selected:!bg-accent/50 *:aria-selected:!text-muted-foreground *:aria-selected:!opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "day-range-middle *:aria-selected:!bg-accent *:aria-selected:!text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          ),
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

"use client"

import { addDays, format, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

import {
  Popover,
  Button,
  PopoverContent,
  PopoverTrigger,
  Calendar,
} from "@/app/components/ui"
import YearAndMonthDropdown from "@/app/components/ui/calendar/year-month-dropdown"
import { cn } from "@/app/lib/utils"

export default function Test() {
  const [date, setDate] = useState<Date | undefined>()
  const fromDate = new Date()
  const toDate = addDays(fromDate ?? new Date(), 30)

  return (
    <Popover>
      <PopoverTrigger asChild onClick={(e) => console.log(e)}>
        <Button
          variant="outline"
          className={cn(
            "w-[240px] pl-3 text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          {date ? format(date, "PPPp") : <span>Pick a date</span>}
          <CalendarIcon className="ml-auto size-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          fromYear={1940}
          toYear={2024}
          captionLayout="dropdown"
          selected={date}
          onSelect={setDate}
          className="w-max rounded-md border"
          disabled={(date) =>
            startOfDay(date) < startOfDay(fromDate) ||
            startOfDay(date) > startOfDay(toDate)
          }
          components={{
            Dropdown: YearAndMonthDropdown,
          }}
        />
      </PopoverContent>
    </Popover>
  )
}

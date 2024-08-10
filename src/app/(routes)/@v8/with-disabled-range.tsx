"use client"
import { addDays, format, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

import {
  Button,
  FormItem,
  Label,
  Paragraph,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui"
import { cn } from "@/app/lib/utils"

import { Calendar } from "./calendar"

export function DatePickerWithDisabledRange() {
  const [date, setDate] = useState<Date | undefined>()
  const fromDate = new Date()
  const toDate = addDays(fromDate ?? new Date(), 5)
  const disabled = (date: Date) =>
    startOfDay(date) < startOfDay(fromDate) ||
    startOfDay(date) > startOfDay(toDate)

  return (
    <FormItem className="flex flex-col">
      <Label id="datepicker-disabled-range">
        Datepicker With Disabled Range
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
            aria-labelledby="datepicker-disabled-range"
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays={true}
            disabled={disabled}
          />
        </PopoverContent>
      </Popover>
      <Paragraph className="text-[0.8rem] text-muted-foreground">
        Only dates within 5 days should be enabled.
      </Paragraph>
    </FormItem>
  )
}

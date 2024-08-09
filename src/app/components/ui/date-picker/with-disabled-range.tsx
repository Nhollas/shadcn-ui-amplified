"use client"
import { addDays, format, startOfDay } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

import { cn } from "@/app/lib/utils"

import { Button } from "../button"
import { Calendar } from "../calendar"
import MonthAndYearDropdown from "../calendar/month-year-dropdown"
import { FormItem } from "../form"
import { Label } from "../label"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

export function DatePickerWithDisabledRange() {
  const [date, setDate] = useState<Date | undefined>()
  const fromDate = new Date()
  const toDate = addDays(fromDate ?? new Date(), 30)
  const disabled = (date: Date) =>
    startOfDay(date) < startOfDay(fromDate) ||
    startOfDay(date) > startOfDay(toDate)

  return (
    <FormItem className="flex flex-col">
      <Label>Datepicker With Disabled Range</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown"
            hideNavigation={false}
            selected={date}
            onSelect={setDate}
            showOutsideDays={true}
            endMonth={new Date(2099, 11)}
            disabled={disabled}
            components={{
              Dropdown: MonthAndYearDropdown,
              Chevron: ({ orientation }) =>
                orientation === "left" ? (
                  <ChevronLeft className="size-4" />
                ) : (
                  <ChevronRight className="size-4" />
                ),
            }}
          />
        </PopoverContent>
      </Popover>
      <p className="text-[0.8rem] text-muted-foreground">
        Only dates within 30 days should be enabled.
      </p>
    </FormItem>
  )
}

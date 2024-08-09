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

export function MonthAndYearDatepicker() {
  const [date, setDate] = useState<Date | undefined>()
  const fromDate = new Date()
  const toDate = addDays(fromDate ?? new Date(), 30)
  const disabled = (date: Date) =>
    startOfDay(date) < startOfDay(fromDate) ||
    startOfDay(date) > startOfDay(toDate)

  return (
    <FormItem className="flex flex-col">
      <Label>Month and Year Datepicker</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[240px] pl-3 text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            {date ? format(date, "PPP") : <span>Pick a date</span>}
            <CalendarIcon className="ml-auto size-4 shrink-0 opacity-50" />
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
            // disabled={disabled}
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

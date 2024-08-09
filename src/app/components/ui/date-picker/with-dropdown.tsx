"use client"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

import { cn } from "@/app/lib/utils"

import { Button } from "../button"
import { Calendar } from "../calendar"
import MonthAndYearDropdown from "../calendar/month-year-dropdown"
import { FormItem } from "../form"
import { Label } from "../label"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"

export function DatePickerWithDropdown() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <FormItem className="flex flex-col">
      <Label>Datepicker With Month and Year Dropdown</Label>
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
    </FormItem>
  )
}

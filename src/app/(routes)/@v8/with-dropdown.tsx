"use client"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useState } from "react"

import {
  Button,
  FormItem,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui"
import { cn } from "@/app/lib/utils"

import { Calendar } from "./calendar"
import MonthAndYearDropdown from "./month-year-dropdown"

export function DatePickerWithDropdown() {
  const [date, setDate] = useState<Date | undefined>()

  return (
    <FormItem className="flex flex-col">
      <Label id="datepicker-month-year-dropdown">
        Datepicker With Month and Year Dropdown
      </Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
            aria-labelledby="datepicker-month-year-dropdown"
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            captionLayout="dropdown-buttons"
            selected={date}
            onSelect={setDate}
            showOutsideDays={true}
            toYear={2028}
            fromYear={1950}
            components={{
              Dropdown: MonthAndYearDropdown,
              IconLeft: () => <ChevronLeftIcon className="size-4" />,
              IconRight: () => <ChevronRightIcon className="size-4" />,
            }}
          />
        </PopoverContent>
      </Popover>
    </FormItem>
  )
}

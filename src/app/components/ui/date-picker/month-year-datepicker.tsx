"use client"
import { addDays, format, startOfDay } from "date-fns"
import { CalendarIcon } from "lucide-react"
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
            selected={date}
            onSelect={setDate}
            showOutsideDays={false}
            disabled={(date) =>
              startOfDay(date) < startOfDay(fromDate) ||
              startOfDay(date) > startOfDay(toDate)
            }
            components={{
              Dropdown: MonthAndYearDropdown,
              // Caption: (props) => {
              //   console.log("props", props)
              //   return <h1>Caption</h1>
              // },

              // CaptionLabel: (props) => {
              //   console.log("props", props)
              //   return <h1>CaptionLabel</h1>
              // },
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

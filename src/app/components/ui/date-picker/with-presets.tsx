"use client"

import { addDays, format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/app/lib/utils"

import { Button } from "../button"
import { Calendar } from "../calendar"
import { FormItem } from "../form"
import { Label } from "../label"
import { Popover, PopoverContent, PopoverTrigger } from "../popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"

export function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  return (
    <FormItem className="flex flex-col">
      <Label>Datepicker With Presets</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 size-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              endMonth={new Date(2099, 11)}
            />
          </div>
        </PopoverContent>
      </Popover>
      <p className="text-[0.8rem] text-muted-foreground">
        You can select today, tomorrow, in 3 days and in a week.
      </p>
    </FormItem>
  )
}

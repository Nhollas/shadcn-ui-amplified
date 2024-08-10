"use client"
import React from "react"
import { DropdownProps } from "react-day-picker-v8"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui"

export default function MonthAndYearDropdown({
  value,
  onChange,
  name,
  children,
  "aria-label": ariaLabel,
}: DropdownProps) {
  const options = React.Children.toArray(children) as React.ReactElement<
    React.HTMLProps<HTMLOptionElement>
  >[]

  const handleChange = (value: string) => {
    const changeEvent = {
      target: {
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>
    onChange?.(changeEvent)
  }

  return (
    <Select value={value?.toString()} onValueChange={handleChange}>
      <SelectTrigger name={name} aria-label={ariaLabel}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {options?.map((option, childIdx: number) => (
          <SelectItem
            key={`${option.props.value}-${childIdx}`}
            value={option.props.value?.toString() ?? ""}
          >
            {option.props.children}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

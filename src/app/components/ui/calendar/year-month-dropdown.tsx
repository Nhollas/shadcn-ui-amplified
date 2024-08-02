"use client"
import React from "react"
import { DropdownProps } from "react-day-picker"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select"

type OptionProps = React.HTMLProps<HTMLOptionElement>
type OptionElement = React.ReactElement<OptionProps>

export default function YearAndMonthDropdown({
  value,
  onChange,
  children,
  name,
  "aria-label": ariaLabel,
}: DropdownProps) {
  const options = React.Children.toArray(children) as OptionElement[]

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
        {options.map((option, childIdx: number) => (
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

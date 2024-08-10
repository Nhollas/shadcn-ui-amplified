import { Paragraph } from "@/app/components/ui"

import { DatePickerWithDisabledRange } from "./with-disabled-range"
import { DatePickerWithDropdown } from "./with-dropdown"
import { DatePickerWithPresets } from "./with-presets"
import { DatePickerWithRange } from "./with-range"

export default function Version8DatepickerPage() {
  return (
    <div className="flex flex-col gap-y-8">
      <Paragraph>Version 8</Paragraph>
      <DatePickerWithDropdown />
      <DatePickerWithDisabledRange />
      <DatePickerWithRange />
      <DatePickerWithPresets />
    </div>
  )
}

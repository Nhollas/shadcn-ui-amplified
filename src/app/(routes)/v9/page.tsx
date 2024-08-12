import { DatePickerWithDefaults } from "./with-default"
import { DatePickerWithDisabledRange } from "./with-disabled-range"
import { DatePickerWithDropdown } from "./with-dropdown"
import { DatePickerWithPresets } from "./with-presets"
import { DatePickerWithRange } from "./with-range"

export default function Version9DatepickerPage() {
  return (
    <li className="flex flex-col gap-y-8">
      <DatePickerWithDefaults />
      <DatePickerWithDisabledRange />
      <DatePickerWithRange />
      <DatePickerWithPresets />
      <DatePickerWithDropdown />
    </li>
  )
}

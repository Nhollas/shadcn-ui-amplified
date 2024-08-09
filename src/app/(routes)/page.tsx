import {
  DatePickerWithDisabledRange,
  DatePickerWithDropdown,
  DatePickerWithPresets,
  DatePickerWithRange,
} from "@/app/components/ui"

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-8">
      <DatePickerWithDropdown />
      <DatePickerWithDisabledRange />
      <DatePickerWithRange />
      <DatePickerWithPresets />
    </div>
  )
}

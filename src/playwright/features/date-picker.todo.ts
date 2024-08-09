import { expect } from "@playwright/test"
import {
  addDays,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  startOfDay,
} from "date-fns"

import test from "@/playwright/fixtures/next-fixture"

test("ShadnCn Calendar Component Range Assertion", async ({ page }) => {
  await page.goto("/test")

  /*
    Requirement: Only dates within 30 days should be enabled.
  */
  const fromDate = new Date()
  const toDate = addDays(fromDate, 30)
  const fromMonthDate = startOfMonth(fromDate)
  const toMonthDate = endOfMonth(toDate)

  const daysInMonthRange = eachDayOfInterval({
    start: fromMonthDate,
    end: toMonthDate,
  })

  const groupedDaysByMonth = Object.groupBy(
    daysInMonthRange.map((day) => ({
      number: day.getDate().toString(),
      month: day.toLocaleString("en", { month: "long" }),
      enabled:
        startOfDay(day) >= startOfDay(fromDate) &&
        startOfDay(day) <= startOfDay(toDate),
    })),
    ({ month }) => month,
  )

  await page.getByRole("button", { name: "Pick a date" }).click()

  for (const month in groupedDaysByMonth) {
    await page.getByLabel("Month:").click()
    await page.getByRole("option", { name: month }).click()

    const days = groupedDaysByMonth[month]!
    for (const day of days) {
      const { enabled, number } = day

      await expect(
        page.getByRole("gridcell", { name: number, exact: true }),
      ).toBeEnabled({
        enabled,
      })
    }
  }
})

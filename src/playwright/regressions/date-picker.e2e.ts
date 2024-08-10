import { expect, takeSnapshot } from "@chromatic-com/playwright"
import { format } from "date-fns"

import test from "@/playwright/fixtures/next-fixture"

test.skip("Date Picker - Regression", async ({ page }) => {
  await page.goto("/")
})

test("Date Range Picker - Regression", async ({ page }) => {
  await page.goto("/")
})

test("Date Picker With Presets - Regression", async ({ page }, testInfo) => {
  await page.goto("/")

  await page.getByLabel("Datepicker With Presets").click()

  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await takeSnapshot(page, "Datepicker - Open View", testInfo)

  const combobox = dialog.getByRole("combobox")
  await combobox.click()

  const presetsListBox = page.getByRole("listbox")
  await presetsListBox.getByLabel("Today", { exact: true }).click()
  await takeSnapshot(page, "Datepicker - Today Preset Selected", testInfo)

  await page.getByLabel("Datepicker With Presets").click()
  await expect(page.getByLabel("Datepicker With Presets")).toHaveText(
    "August 10th, 2024",
  )
})

test("Date Picker With Dropdown - Regression", async ({ page }, testInfo) => {
  await page.goto("/")

  await page.getByLabel("Datepicker With Month and Year Dropdown").click()
  const dialog = page.getByRole("dialog")
  await expect(dialog).toBeVisible()
  await takeSnapshot(page, "Datepicker - Open View", testInfo)

  await dialog.getByLabel("Choose the Month").click()
  const monthListBox = page.getByRole("listbox")
  await expect(monthListBox).toBeVisible()
  await takeSnapshot(page, "Datepicker - Open Month Dropdown", testInfo)
  await monthListBox.getByLabel("August", { exact: true }).click()
  await expect(monthListBox).toBeHidden()

  await dialog.getByLabel("Choose the Year").click()
  const yearListBox = page.getByRole("listbox")
  await expect(yearListBox).toBeVisible()
  await takeSnapshot(page, "Datepicker - Open Year Dropdown", testInfo)
  await yearListBox.getByLabel("2024", { exact: true }).click()
  await expect(yearListBox).toBeHidden()

  await dialog.getByLabel(format(new Date(), "MMMM do")).click()
  await takeSnapshot(page, "Datepicker - Day Selected", testInfo)
  await page.getByLabel("Datepicker With Month and Year Dropdown").click()
  await expect(
    page.getByLabel("Datepicker With Month and Year Dropdown"),
  ).toHaveText("August 10th, 2024")
})

test("Date Picker With Disabled Range - Regression", async ({ page }) => {
  await page.goto("/")
})

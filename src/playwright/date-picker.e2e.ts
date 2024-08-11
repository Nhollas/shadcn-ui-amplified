import { expect, takeSnapshot } from "@chromatic-com/playwright"

import test from "@/playwright/fixtures/next-fixture"
test.describe("Date Picker", () => {
  test.use({ diffThreshold: 0.2 })

  test("Date Picker - Regression", async ({ page }, testInfo) => {
    await page.goto("/v9")

    await page.getByLabel("Datepicker With Defaults").click()
    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await takeSnapshot(page, "datepicker-default", testInfo)

    await dialog.getByRole("gridcell", { name: "15" }).click()
    await takeSnapshot(page, "datepicker-default-day-selected", testInfo)

    await dialog.getByRole("gridcell", { name: "31" }).first().click()
    await takeSnapshot(
      page,
      "datepicker-default-outisde-day-selected",
      testInfo,
    )
  })

  test("Date Range Picker - Regression", async ({ page }, testInfo) => {
    await page.goto("/v9")

    await page.getByLabel("Datepicker With Range").click()
    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await takeSnapshot(page, "datepicker-with-range", testInfo)
  })

  test("Date Picker With Presets - Regression", async ({ page }, testInfo) => {
    await page.goto("/v9")

    await page.getByLabel("Datepicker With Presets").click()
    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await takeSnapshot(page, "datepicker-with-presets", testInfo)

    const combobox = dialog.getByRole("combobox")
    await combobox.click()

    const presetsListBox = page.getByRole("listbox")
    await presetsListBox.getByLabel("Today", { exact: true }).click()
    await takeSnapshot(page, "datepicker-with-presets-selected", testInfo)
  })

  test("Date Picker With Disabled Range - Regression", async ({
    page,
  }, testInfo) => {
    await page.goto("/v9")

    await page.getByLabel("Datepicker With Disabled Range").click()
    const dialog = page.getByRole("dialog")
    await expect(dialog).toBeVisible()
    await takeSnapshot(page, "datepicker-with-disabled-range", testInfo)
  })
})

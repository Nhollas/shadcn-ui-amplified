import { test as base } from "@chromatic-com/playwright"

import { setupNextServer } from "../setup"
import { buildLocalUrl } from "../utils"

export const test = base.extend<
  object,
  {
    port: string
  }
>({
  disableAutoSnapshot: true,
  baseURL: async ({ port }, use) => {
    await use(buildLocalUrl(port))
  },
  port: [
    async ({}, use) => {
      const port = await setupNextServer()

      await use(port)
    },
    { auto: true, scope: "worker" },
  ],
})

export default test

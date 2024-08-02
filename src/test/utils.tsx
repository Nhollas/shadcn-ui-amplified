export * from "@testing-library/react"

export async function resolveComponent(Component: any, props: any) {
  const ComponentResolved = await Component(props)

  return () => ComponentResolved
}

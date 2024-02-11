import type { ParentComponent } from 'solid-js'

const Page: ParentComponent = ({ children }) => {
  return (
    <div class='w-full min-h-screen flex flex-col snap-start snap-always'>
      {children}
    </div>
  )
}

export default Page

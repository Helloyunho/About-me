import type { ParentComponent } from 'solid-js'
import NavBar from './navbar/NavBar'

const Page: ParentComponent<{
  activeIndex: 0 | 1 | 2 | 3
  onClick: (index: 0 | 1 | 2 | 3) => void
}> = ({ activeIndex, onClick, children }) => {
  return (
    <div class='w-full h-screen flex flex-col'>
      <NavBar activeIndex={activeIndex} onClick={onClick} />
      {children}
    </div>
  )
}

export default Page

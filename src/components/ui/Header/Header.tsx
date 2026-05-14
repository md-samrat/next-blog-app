import TopNav from './TopNav'
import BottomNav from './BottomNav'

function Header() {
  return (
    <div className='shadow-md'>
      <div className='w-7xl mx-auto '>
        <TopNav></TopNav>
        <BottomNav></BottomNav>
    </div>
    </div>
  )
}

export default Header
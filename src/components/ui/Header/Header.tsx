import React from 'react'
import TopNav from './TopNav'
import BottomNav from './BottomNav'

function Header() {
  return (
    <div className='min-w-7xl mx-auto'>
        <TopNav></TopNav>
        <BottomNav></BottomNav>
    </div>
  )
}

export default Header
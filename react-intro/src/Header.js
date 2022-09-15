import React from 'react'

function Header(props) {
  return (
    <div className='header-container'>Header
    {props.myname}
    </div>
  )
}

export default Header
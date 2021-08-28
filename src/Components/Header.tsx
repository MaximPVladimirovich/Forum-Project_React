import React from 'react'

export const Header = function() {

  const handleSearchInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    return console.log(e.currentTarget.value)
  }

  return (
    <div>
      <a href='./'>Chattaway</a>
      <input type='text' placeholder='Search...' onChange={handleSearchInputChange}/>
      <a href='./signin'><span>Sign in</span></a>
    </div>
  )
}

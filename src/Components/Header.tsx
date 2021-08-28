import React from 'react'
import styles from '../css/Header.module.css'

export const Header = function() {

  const handleSearchInputChange = function(e: React.ChangeEvent<HTMLInputElement>) {
    return console.log(e.currentTarget.value)
  }

  return (
    <div className={styles.container}>
      <a href='./'>Chattaway</a>
      <input type='text' placeholder='Search...' onChange={handleSearchInputChange}/>
      <a href='./signin'><span>Sign in</span></a>
    </div>
  )
}

import React from 'react'
import styles from './navbar.module.scss'
import { Link } from 'react-router-dom'

const NavBar =() => {
  return (
    <div className={styles.main}>
        <div className={`${styles.content_wrapper} wrapper`}>
        <h1>Arthur A. Flower & Co.</h1>
        <ul>
            <li>
            <Link>Services</Link>
            </li>
            <li>
            <Link>About us</Link>

            </li>
            <li>
            <Link className={styles.ukraine}>Support Ukraine</Link>

            </li>
            <li>
            <Link>Contact Us</Link>

            </li>
        </ul>
        </div>
       
        </div>
  )
}

export default NavBar

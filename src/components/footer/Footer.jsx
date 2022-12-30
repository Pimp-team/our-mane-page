import React from 'react'
import styles from './footer.module.scss'
import { Link } from 'react-router-dom'
import telegram from '../../assets/telegram.png'
import discord from '../../assets/discord.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.footer_menu}>
                <h4> ABOUT</h4>
                <ul>
                    <li><Link>About</Link></li>
                    <li><Link>What we do</Link></li>
                    <li><Link>Testimonial</Link></li>
                </ul>
            </div>
            <div className={styles.logo_bar}>
                <Link>
                    <img src={telegram} alt="" />
                </Link>
                <Link>
                    <img src={discord} alt="" />
                </Link>
                <Link>
                    <img src={telegram} alt="" />
                </Link>
                <Link>
                    <img src={telegram} alt="" />
                </Link>
            </div>
        </div>
    )
}


export default Footer
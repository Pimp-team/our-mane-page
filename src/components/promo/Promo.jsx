import React from 'react'
import styles from './promo.module.scss'
import image from '../../assets/promo_img.png'

const Promo = () =>  {
  return (
    <div className={styles.main}>
        <div className={styles.promo_text}>
        <h2>
        Maximize your business with 
        </h2>
        <p className={styles.firstP}>us</p>
        <p className={styles.main_text}>
        We enhance the recognition of your website among competitors
        </p>
        <div className={styles.promo_btns}>
            <button className={styles.btn_one}>Contact Us</button>
            <button className={styles.btn_two}>About Us</button>
        </div>
        </div>
        <div className={styles.promo_img}>
            <img src={image} alt="" />
        </div>
    </div>
  )
}

export default Promo

import React from 'react'
import styles from './what_we_do.module.scss'
import logo_1 from '../../assets/logo_1.png'
import logo_2 from '../../assets/logo_2.png'
import logo_3 from '../../assets/logo_3.png'

const WhatWeDo = () => {
    return (
        <>
            <h2 className={styles.head}>We handle a wide range of tasks.</h2>
            <div className={styles.content_block_wrapper}>
                <div className={`${styles.content_block} ${styles.one}`}>
                    <div className={styles.content_block_header}>
                        <img src={logo_1} alt='' />
                        <h3>User Experience Design</h3>
                    </div>
                    <p>
                    We offer design services that can enhance the aesthetics and functionality of your website or application. Let our team of experts assist you in elevating the look and performance of your online platform.
                    </p>
                </div>
                <div className={`${styles.content_block} ${styles.two}`}>
                <div className={styles.content_block_header}>
                        <img src={logo_2} alt='' />
                        <h3>Website Development / Deployment</h3>
                    </div>
                    <p>
                    We believe that creating an optimal website can greatly enhance the potential of your business. Allow us to assist you in this important venture.
                    </p>
                </div>
                <div className={`${styles.content_block} ${styles.three}`}>
                <div className={styles.content_block_header}>
                        <img src={logo_3} alt=''/>
                        <h3>Product Branding</h3>
                    </div>
                    <p>
                    Our team of professionals is here to assist you with product branding, ensuring that your products are able to effectively engage and captivate your target audience. 
                    </p>
                </div>
            </div>
        </>

    )
}

export default WhatWeDo

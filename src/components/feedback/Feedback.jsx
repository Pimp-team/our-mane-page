import React from 'react'
import styles from './feedback.module.scss'
import author_1 from '../../assets/author_1.png'
import author_2 from '../../assets/author_2.png'
import author_3 from '../../assets/author_3.png'

const Feedback = () => {
    return (
        <div className={styles.main}>
            <div className='wrapper'>
                <div className={styles.content_wrapper}>
                <div className={styles.content_block}>
                    <div className={styles.content_block_wrapper}>
                        <p>I have experienced exceptional service and been consistently impressed by the quality of your work. The efforts of your team have not only met, but exceeded my expectations.

                        </p>
                        <div className={styles.content_block_user}>
                            <img style={{marginBottom: '19px'}} src={author_1} alt="" />
                            <div className={styles.content_block_author}>
                            <h4>John Richard</h4>
                                    <p>Businessman</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.content_block}>
                    <div className={styles.content_block_wrapper}>
                        <p>I appreciate the contributions you have made to the growth of my company. Your efforts have been valuable, and I am grateful for your support. I believe we can continue to succeed and grow with your help.

                        </p>
                        <div className={styles.content_block_user}>
                            <img  src={author_2} alt="" />
                            <div className={styles.content_block_author}>
                            <h4>John Richard</h4>
                                    <p>Businessman</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.content_block}>
                    <div className={styles.content_block_wrapper}>
                        <p>
                            I am impressed with this team and wish to work with them again in the future. The results we have achieved together have been very satisfying, and I have no hesitation in continuing to cooperate with them.
                        </p>
                        <div className={styles.content_block_user}>
                            <img src={author_3} alt="" />
                            <div className={styles.content_block_author}>
                                    <h4>John Richard</h4>
                                    <p>Businessman</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
    )
}


export default Feedback
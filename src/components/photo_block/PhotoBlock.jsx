import React from 'react'
import styles from './photo_block.module.scss'
import avatar_1 from '../../assets/avatar_1.png'
import avatar_2 from '../../assets/avatar_2.png'
import avatar_3 from '../../assets/avatar_3.png'

const PhotoBlock =() => {
  return (
    <div className={styles.main}>
        <div className={styles.avatara}>
            <img src={avatar_3} alt="" />
            <h3>William Huntington</h3>
            <p>Full - Stack Developer, UIUX designer</p>
        </div>
        <div className={styles.avatara}>
            <img src={avatar_2} alt="" />
            <h3>Johanna  Stephenson</h3>
            <p>SEO Specialist</p>
        </div>
        <div className={styles.avatara}>
            <img src={avatar_1} alt="" />
            <h3>Richard Winston</h3>
            <p>Full - Stack Developer, Cyber Sec</p>
        </div>
    </div>
  )
}

export default PhotoBlock
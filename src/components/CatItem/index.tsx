import React from 'react'

import styles from './CatItem.module.scss'

const CatItem: React.FC = () => {
    return (
        <div className={styles.card}>
            <img
                src='https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip'
                alt='cat'
                className={styles.card__image}
            />

            <img
                src='./heart.svg'
                alt='heart'
                className={styles.card__heart}
                onMouseOver={e => (e.currentTarget.src = './heart-fill.svg')}
                onMouseOut={e => (e.currentTarget.src = './heart.svg')}
            />
        </div>
    )
}

export default CatItem

import React from 'react';
import styles from './style.module.css';
export default function Offers()
{
    return <div className={styles.main}>
        <div className={styles.header}>
            <div>
            <div className={styles.d1}>Offers for you</div>
            <div className={styles.d2}>Explore top deals and offers exclusively for you!</div>
            </div>
            <div>
                <img className={styles.image} 
                src="https://lh3.googleusercontent.com/proxy/xSwZrURAtpCL8GztRCcQbCH_Eq7paZagayBSaxA5wEzItip4h7T4fb7ZvKduT3Ltf2QaZIc3FCWHrsXtD4cilvbPPUuo7PaP7OH0I8lJQu8DNw8ZQ3Q_pFU7LwQ">

                </img>
            </div>
        </div>
    </div>
}
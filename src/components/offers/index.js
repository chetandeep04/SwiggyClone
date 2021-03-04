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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaQQuPu06hjvzFH31XFE3KuJQcF9g_pgJ6DA&usqp=CAU">

                </img>
               
            </div>
        </div>
       <div>
           <h1 className={styles.hel}>Sample Page for offers</h1>
       </div>
    </div>
}
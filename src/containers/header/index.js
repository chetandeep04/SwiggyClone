import React from 'react';
import styles from './style.module.css';
import Input from '../../containers/input/input';
import {Link} from 'react-router-dom';
export default function Header(props)
{
    return <div>
        <div className={styles.container}>
    <div className={styles.left}>
    <Link className={styles.link} to='/'><h2>Swiggy</h2></Link>
    </div>
    <div className={styles.right}>
        <Input placeholder="Search Restaurent"></Input>
<Link to="/offers" className={styles.link}>Offers</Link>
<Link to="/help" className={styles.link}>Help</Link>
    </div>
        </div>
    </div>
}
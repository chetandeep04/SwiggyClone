import React from 'react';
import styles from "./style.module.css";
import {Link} from 'react-router-dom';
export default function ListItem(props)
{
    const {restaurants}=props;
    return <Link to={"/restaurants/"+restaurants.id}>
    <div className={styles.list_item_container} key={restaurants.id}>
    <div className={styles.logo}>
    {restaurants.name[0].toUpperCase()}
    </div>
    <div className={styles.info}>
    <p>Name : {restaurants.name}</p>
    <p>Cuisine :{restaurants.cuisine_type}</p>
    <p>Address : {restaurants.address}</p>
    </div>
     </div>
    </Link>
}
import React,{setState} from 'react';
import styles from './style.module.css';
import data from "./data";
import ListItem from "../../containers/listItem/item";
export default class Home extends React.Component
{
    state={
        restaurants:[]
    }
    componentDidMount()
    {
        setTimeout(()=>
        {
       this.setState({
        restaurants:data.restaurants
               })
        },1000);
    }
    render()
    {
        const {restaurants}=this.state;
        return restaurants.length===0?<div>Loading</div> 
    :<div className={styles.container}>
       { restaurants.map((restaurants)=>
        {
            return <ListItem 
            key={restaurants.id} 
            restaurants={restaurants}></ListItem>;
        })
        }
       </div>
    }
}
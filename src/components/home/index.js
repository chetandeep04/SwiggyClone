import React,{setState} from 'react';
import styles from './style.module.css';
import data from "./data";
import ListItem from "../../containers/listItem/item";
import Input from "../../containers/input/input";
export default class Home extends React.Component
{
    state={
        restaurants:[],
        view_list:[],
        search:''
        
    }
    componentDidMount()
    {
        setTimeout(()=>
        {
       this.setState({
        restaurants:data.restaurants,
        view_list:data.restaurants
               })
        },1000);
    }
    onInputChange=(event)=>
    {
        const value = event.target.value;
        const restaurants=this.state.restaurants;
        const view_list=this.state.view_list;
        const new_res=restaurants.filter((restaurants)=>{
            let lower_case_list=restaurants.name.toLowerCase();
            let lower_case_value=value.toLowerCase(); 
             return lower_case_list.includes(lower_case_value);
        })
        this.setState({
            search:value,view_list:new_res
                   })
    }
    render()
    {
        const {restaurants,search,view_list}=this.state;
        return <>
        <Input placeholder="Search Restaurent" 
        style={{background : "green",color:"white"}}
        value={search}
        onChange={this.onInputChange}></Input>
        {
          restaurants.length===0?<div>Loading</div> 
          :<div className={styles.container}>
             { view_list.map((restaurants)=>
              {
                  return <ListItem 
                  key={restaurants.id} 
                  restaurants={restaurants}></ListItem>;
              })
              }
             </div>  
        }</>
    }
}
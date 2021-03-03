import React,{setState} from 'react';
import ListItem from "../../containers/listItem/item";

export default class Restaurants extends React.Component
{
    componentDidMount()
    {
        console.log(this.props.match.params.id);
    }
    render()
    {
        return <div><div>Fetching Menu for {this.props.match.params.id}</div>
        </div>
       

    }
}
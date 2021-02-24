import React,{setState} from 'react';

export default class Restaurants extends React.Component
{
    componentDidMount()
    {
        console.log(this.props.match.params.id);
    }
    render()
    {
        return <div>Fetching Menu for {this.props.match.params.id}</div>
    }
}
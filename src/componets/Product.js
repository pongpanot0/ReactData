import React, { Component } from 'react'
import data from '../data';

export default class Product extends Component {
    render() {
        return (
            <div>
                {
                data.products.map(itme =>
                    <div>
                    {itme.name} 
                    {itme.price}
                    </div>
                    )



                }
            </div>
        )
    }
}

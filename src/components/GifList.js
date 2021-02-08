import React, { Component } from 'react'


class GifList extends Component{

    renderGifs=()=>{
        return this.props.data.map(gif=>{
            return (<li>
                <img src={gif.url} alt="2013 Toyota Tacoma" id="itemImg" style="float:left"> </img>        
                </li>
            )
        })
        
    }
    render(){
        return(
            <div>
                <ul>
                    {this.renderGifs()}
                </ul>
            </div>
        )
    }
}

export default GifList
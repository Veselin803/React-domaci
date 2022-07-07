import React, { Component } from 'react';
import { InfoConsumer } from '../../context.jsx';
import Info from '../../Info.jsx';


class Home extends Component{
    render(){
        return(
        <div className="container">
            <div className="row mt-5">
            <InfoConsumer>
                {value => {
                    return value.info.map(item => {
                        return <Info key={item.id} item={item} />
                    });
                }}
            </InfoConsumer>
            </div>
        </div>
        );
    }
}

export default Home;
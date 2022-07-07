import React, { Component } from 'react';
import { postInfo } from '../data';

const InfoContext = React.createContext();

class InfoProvider extends Component{
    
    post = {
        info: postInfo
    }
    
    render(){
        return(
            <div>
                <InfoContext.Provider value={{
                    info: this.post.info,
                    headerTitle: this.post.headerTitle,
                    headerSubtitle: this.post.headerSubtitle,
                    headerText: this.post.headerText,
                    img: this.post.img
                }}>
                    {this.props.children}
                </InfoContext.Provider>
            </div>
        );
    }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };

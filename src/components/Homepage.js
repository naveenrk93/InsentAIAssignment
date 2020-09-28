import React from 'react';
// import {Link} from 'react-router-dom';
import ChatWidget from "./ChatWidget";

class Homepage extends React.Component{

    render(){
        return (
            <div>
                <img className="homepage-image" src="https://www.drift.com/wp-content/uploads/site-updates/homepage-2020/julie-hero.png" alt="homepage logo"/>
                <h1 className="header">Introducing the Drift Revenue Acceleration Platform</h1>
                <h3 className="sub-header">Bring you go-to-market teams together to deliver personalized customer experiences that increase your revenue, shorten your sales cycles, and strengthen your brand</h3>
                <ChatWidget/>
            </div>
        );
    }
}



export default Homepage
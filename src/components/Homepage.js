import React from 'react';
// import {Link} from 'react-router-dom';
import ChatWidget from "./ChatWidget";

class Homepage extends React.Component{

    render(){
        return (
            <div class="Homepage">
                <div className="ui secondary  menu">
                    <a className="item">
                        DRIFT
                    </a>
                    <div className="right menu">
                        <a className="item">
                            Platform
                        </a>
                        <a className="item">
                            Resources
                        </a>
                        <a className="item">
                            Pricing
                        </a>
                        <div className="item demoitem">
                            Get a Demo
                        </div>
                        <div className="item driftfreeitem">
                            Get Drift Free
                        </div>
                        <a className="ui item">
                            Sign In
                        </a>
                    </div>
                </div>
                <img className="homepage-image" src="https://www.drift.com/wp-content/uploads/site-updates/homepage-2020/julie-hero.png" alt="homepage logo"/>
                <h1 className="header">Introducing the Drift Revenue Acceleration Platform</h1>
                <h3 className="sub-header">Bring you go-to-market teams together to deliver personalized customer experiences that increase your revenue, shorten your sales cycles, and strengthen your brand</h3>
                <ChatWidget/>
            </div>
        );
    }
}



export default Homepage
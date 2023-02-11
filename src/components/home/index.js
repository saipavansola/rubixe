import { Component } from "react";
import Header from "../header";
import Body from "../body";
import Footer from "../footer";
import "./index.css"

class Home extends Component{
    render(){
        return(
            <div className="tot-con">
            <Header />
            <Body />
            <Footer />
            </div>
        )
    }
}

export default Home
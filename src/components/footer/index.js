import { Component} from "react";
import {
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa'
import "./index.css"

class Footer extends Component{
    render(){
        return(
            <div>
                <div className="footer-con">
                    <div className="about-sec">
                        <h4>ABOUT US</h4>
                        <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                    </div>
                    <div className="all-sec">
                        <h4>MENU</h4>
                        <p>Home</p>
                        <p>Services</p>
                        <p>Products</p>
                        <p>Career</p>
                    </div>
                    <div className="all-sec">
                        <h4>LEARN MORE</h4>
                        <p>About</p>
                        <p>Contact us</p>
                    </div>
                    <div className="all-sec">
                        <h4>ADDRESS</h4>
                        <p>Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru, Karnataka 560068</p>
                        <p>Phone :08047178999</p>
                        <p>Email: hi@rubixe.com</p>
                        <div>
                            
                            <FaInstagram className="icon" />
                            
                            <FaLinkedinIn className="icon" />
                        </div>

                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="para">© Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer
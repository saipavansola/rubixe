import { Component} from "react";


import "./index.css"

const imageSrc="https://www.rubixe.com/assets/img/logo/white-rubixe-logo.png"

class Header extends Component{
    
    render(){
        return(
            <div className="bg-con">
                <img src={imageSrc} alt="your description" className="image-src" />

                <div >
                <nav>
                    <ul className="nav-items">
                        <li className="item">
                         Home
                        </li>
                        <li className="item">
                        Services
                        </li>
                        <li className="item">
                        Products
                        </li>
                        <li className="item">
                        AI internship
                        </li>
                        <li className="item">
                        Career
                        </li>
                        <li className="item">
                        Blog
                        </li>
                        <li className="item">
                        About
                        </li>
                        <li className="item">
                        Contact us
                        </li>
                    
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default Header
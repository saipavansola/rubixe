import { Component} from "react";

import "./index.css"


class Body extends Component{
   state={username:'',
          email:'',
          Mobile:''}

    handleSubmit = (e) => {
    e.preventDefault();
  }
    render(){
        const{username,email,Mobile}=this.state
        return(
            <div>
                <img src="https://res.cloudinary.com/ddhcta7pt/image/upload/v1676117018/con1_yn4yac.jpg" className="con1-image"  alt="con-1" />
                <div className="con-2">
                    <div>
                    <h2>WHO ARE WE</h2>
                    <p>RubixeTM is a global technology company specializing in disruptive technologies Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain, and Internet of Things (IoT).</p> 
                    <p>RubixeTM mission is to enable businesses to leverage the full potential of disruptive technologies and stay competitive in the market, turning complex challenges into solutions, providing a strategic competitive advantage that are more efficient, effective and predictable </p>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/ddhcta7pt/image/upload/v1676117003/con3_emxdud.jpg" alt="con2" />
                    </div>
                </div>
                <div className="con-3">
                    <h3>WHERE WE STARTED</h3>
                    <p>We started in 2015, With a passionate team who want to bring game-changing solutions through disrupting technologies. We expertise in delivering enterprise-level solutions in the field of Artificial Intelligence (AI), Cyber Security, Robotic Process Automation (RPA), Internet of Things (IoT), and BlockChain technology. </p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/ddhcta7pt/image/upload/v1676118157/IMG_20230211_175018_1_vtp2tb.jpg" className="con3-image" alt="bg-con" />
                </div>
            <div className="reg-con">
                <div>
                    <h4>GET IN TOUCH</h4>
                    <p>Please complete the form and we will get back to you</p>
                </div>
                
                <div className="my-con">
                <form onSubmit={this.handleSubmit}>
                <label className="input-label" htmlF0or="user">
                    Username
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="enter Your name"
                        value={username}
                        id="user"
                        className="inp-con"
                        onChange={(e) =>this.setState({ username: e.target.value })}
                    />
                    <br />
                    <label className="input-label" htmlFor="Email">
                    Email*
                     </label>
                     <br />
                    <input
                        type="text"
                        placeholder="Enter Your email"
                        value={email}
                        id="Email"
                        className="inp-con"
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <br />
                    <label className="input-label" htmlFor="mobile">
                        MOBILE*
                    </label>
                    <br />
                    <input
                        type="text"
                        placeholder="Enter Your mobile number"
                        value={Mobile}
                        id="mobile"
                        className="inp-con"
                        onChange={(e) => this.setState({ Mobile: e.target.value })}
                    />
                    <br />
                    <button type="submit" className="button">Register Now</button>
                    </form>
                    </div>
            </div>
            </div>
        )
    }
}

export default Body
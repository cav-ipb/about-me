import React from "react";
import { TypeAnimation } from "react-type-animation";
import design from  "../assets/images/home-page/hero-section-design.png";
import implementation from "../assets/images/home-page/hero-section-implementation.png";
import testing from "../assets/images/home-page/hero-section-testing.png";
import profile from "../assets/images/home-page/about-me-profile-picture.jpeg";
import FadingImageDisplayComponent from "../components/fading-image-display.component";
import { Canvas } from "@react-three/fiber";
import "./home-page.component.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faOrcid } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faCommentDots, faLocationDot, faBuilding, faAngleRight, faAngleLeft, faSlash, faWindowMinimize, faTerminal } from "@fortawesome/free-solid-svg-icons";
import ButtonComponent from "../components/button/button.component";

const HomePageComponent: React.FC = () => {
    return (
        <div id="home-page-component" >
            <div className="container-fluid hero-section" >
                <div className="row" style={{display: 'flex', justifyContent:'center', height:'15%', width:"100%", paddingLeft:"90%", paddingRight:"5%", paddingTop:"30px", paddingBottom:"50px"}}>
                    
                    
                    <div style={{display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)'}}>

                    <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLinkedin} size="xl"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faOrcid} size="xl"></FontAwesomeIcon>
                    </div>

                </div>
                <div className="row hero-section-content">

                    <div className="col-xs-12 col-lg-7" style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
                        <div>
                            <h3 className="hero-section-message">Welcome, I'm Victor Manuel</h3>
                            <h1 className="hero-section-header">Do you want</h1>
                        </div>
                        <div className="hero-section-subheader">
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    "a beautiful interface?",
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    "an efficient backend?",
                                    1000,
                                    "a reliable database?",
                                    1000
                                ]}
                                wrapper="span"
                                speed={30}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 col-lg-5" style={{padding: '0px', display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>
                
                        <div style={{height: "600px" }}>


                            <Canvas>
                                <FadingImageDisplayComponent images={[design, implementation, testing]}/>
                            </Canvas>
                        </div>

                    </div>
    
                </div>

                <div className="row" style={{display: 'flex', justifyContent:'center',  height:'15%', width:"100%", paddingBottom:"4rem", margin: "0px"}}>
                    <div>
                        <a href="#personal-info-section" className="hero-section-button">LET ME HELP YOU</a>
                    </div>
                </div>
              
            </div>

            {/* <div className="app-header">

            </div> */}

            <div className="container-fluid" id="personal-info-section" style={{backgroundColor: "#161B23", height:"100vh", paddingLeft:"8.33%", paddingRight:"8.33%"}}>
                
                <div className="row pt-4 d-flex justify-content-center align-items-center" style={{height:"15%"}}>
                    <h1 className="about-me-header">

                        <FontAwesomeIcon icon={faTerminal} size="sm"></FontAwesomeIcon> 


                        &nbsp;
                        About me  

                    </h1>
                </div>
                <div className="row pr-4 pl-4" style={{height:"70%"}}>
                    <div className="col-lg-3 d-flex flex-column justify-content-center pr-4" style={{borderRight:"3px solid white"}}>
                        <div style={{height:"550px", marginBottom:"40px"}}>
                            <img src={profile} style={{height:"100%", width:"100%"}}></img>

                        </div>
                        <div className="text-white">
                            <div className="d-flex">
                                
                                <FontAwesomeIcon icon={faEnvelope} size="lg"></FontAwesomeIcon> 
                                <span style={{font:"1rem Ubuntu", color:"#FDAD54", marginLeft:'10px'}}>vmcardentey99@gmail.com</span>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faLocationDot} size="lg"></FontAwesomeIcon>
                                <span style={{font:"1rem Ubuntu", color:"#FDAD54", marginLeft:'10px'}}>
                                 Halle (Saale), Germany
                                </span>
                            </div>
                            <div className="d-flex">
                                
                                <FontAwesomeIcon icon={faBuilding} size="lg"></FontAwesomeIcon>
                                <span style={{font:"1rem Ubuntu", color:"#FDAD54", marginLeft:'10px'}}>
                                 Leibniz Institute of Plant Biochemistry
                                    </span>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon icon={faCommentDots} size="lg"></FontAwesomeIcon>
                                <span style={{font:"1rem Ubuntu", color:"#FDAD54", marginLeft:'10px'}}>

                                 Spanish | English
                                </span>
                            </div>
                        </div>

                        {/* <ul className="text-white">
                            <li>Date of Birth: 22.11.1999</li>
                            <li>Location: Halle (Saale), Germany</li>
                            <li>Email: </li>
                            <li>Language: Spanish, English</li>
                        </ul> */}

                    </div>
                    <div className="col-lg-9 d-flex flex-column justify-content-center pl-4">

                        <h2 style={{font:"2.5rem Ubuntu-Italic, serif", color:"var( --app-secondary-color)" }}> Who I am</h2>
                        <div>
                            <p style={{font:"1.3rem Ubuntu, serif", color:"#ffffff", lineHeight:"1.5"}}> 
                            Hello, I am Victor, and I always get the job done. I am a skilled full-stack developer who can not leave a problem unsolved.
                            
                            My go-to approach is to really understand the business to build the best computational solution to solve its needs. 
                            
                            My experience in the different areas of software development allows me to quickly grasp a global understanding of projects and seamlessly integrate into any team in a very short time. 
                            
                            I believe that hard work and consistency are the keys to success in any environment, and I bring these values anywhere I go.

                            </p>
                        </div>

                        <h2 style={{font:"2.5rem Ubuntu-Italic, serif", color:"var( --app-secondary-color)" }}> What I do</h2>
                        <div>
                            <p style={{font:"1.3rem Ubuntu, serif", color:"#ffffff", lineHeight:"1.5"}}> 
                            Hello, I am Victor, and I always get the job done. I am a skilled full-stack developer who can not leave a problem unsolved.
                            
                            My go-to approach is to really understand the business to build the best computational solution to solve its needs. 
                            
                            My experience in the different areas of software development allows me to quickly grasp a global understanding of projects and seamlessly integrate into any team in a very short time. 
                            
                            I believe that hard work and consistency are the keys to success in any environment, and I bring these values anywhere I go.

                            </p>
                        </div>


                        <div className="d-flex justify-content-center pt-5">
                                <ButtonComponent label="Contact Me" color="primary" style={{marginRight: '15px'}}/>
                                <ButtonComponent label="Download CV" color="secondary"/>
                        </div>


                        
                    </div>

                </div>

                <div className="row" style={{height:"15%"}}>

</div>
            </div>

        
        </div>

    )
}

export default HomePageComponent;
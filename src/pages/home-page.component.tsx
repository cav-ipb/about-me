import React from "react";
import { TypeAnimation } from "react-type-animation";
import design from  "../assets/images/home-page/hero-section-design.png";
import implementation from "../assets/images/home-page/hero-section-implementation.png";
import testing from "../assets/images/home-page/hero-section-testing.png";
import FadingImageDisplayComponent from "../components/fading-image-display.component";
import { Canvas } from "@react-three/fiber";
import "./home-page.component.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faOrcid } from "@fortawesome/free-brands-svg-icons";

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

            <div className="app-header">

            </div>

            <div className="container-fluid" id="personal-info-section" style={{backgroundColor: "#E6E6E6", height:"100vh"}}>
                
              
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-8">

                        <p style={{font:"1.5rem lora-regular, serif", color:"#555555", lineHeight:"1.8"}}> 
                        Ad aliqua excepteur est do nulla aliquip ullamco. Voluptate reprehenderit cupidatat ea dolor enim deserunt officia occaecat fugiat enim exercitation mollit occaecat ipsum. Sint non cillum id. Officia reprehenderit minim et. Excepteur id qui amet veniam cupidatat minim eu.
                        </p>
                    </div>

                </div>
            </div>

        
        </div>

    )
}

export default HomePageComponent;
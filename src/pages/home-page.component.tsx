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
        <div id="home-page-component">
            <div className="row hero-section" >
                <div className="row" style={{display: 'flex', justifyContent:'center', height:'15%', width:"100%", paddingLeft:"90%", paddingRight:"5%", paddingTop:"30px"}}>
                    
                    
                    <div style={{display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(3, 1fr)'}}>

                    <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLinkedin} size="xl"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faOrcid} size="xl"></FontAwesomeIcon>
                    </div>

                </div>
                <div className="row" style={{width:"100%", height: '70%'}} >

                    <div className="col-1"></div>
                    <div className="col-6" style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection:'column'}}>

                        {/* <div style={{ fontFamily: "Rubik, serif",  fontSize: '4em', display: 'inline-block', marginBottom: "15px" }}>
                            Do you need
                        </div> */}
                        <div>
                            
                        <h3 style={{margin: "0px", textAlign: "left", fontSize: '1.5em', color:'#838587'}}>
                            Welcome, I'm Victor Manuel
                        </h3>
                        <h1 style={{fontFamily: "Rubik, serif",  fontSize: '5em', fontWeight: 'bold 700', marginTop:"0px", marginBottom:'10px'}}>
                            Do you want
                        </h1>
                        </div>
                        <div style={{textAlign:'left'}}>


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
                                style={{ fontFamily: "Rubik, serif",  fontSize: '3em', fontWeight: 'bold 700', display: 'inline-block', textAlign:'left' }}
                                repeat={Infinity}
                            />
                        </div>

                    </div>
                    <div className="col-4" style={{padding: '0px'}}>
                            {/* <img src={design} style={{margin: '0px'}}></img>
                            <img src={implementation} style={{margin: '0px'}}></img>
                            <img src={testing} style={{margin: '0px'}}></img> */}

                            <Canvas>
                                <FadingImageDisplayComponent images={[design, implementation, testing]}/>
                            </Canvas>

                    </div>
                    <div className="col-1">

                    </div>
                </div>
                <div className="row" style={{display: 'flex', justifyContent:'center', height:'15%', width:"100%"}}>
                <a href="#personal-info-section">

                    <button className="hero-section-button">
                                LET ME HELP YOU
                    </button>

                </a>
                </div>
              
            </div>

            <div id="personal-info-section" className="row" style={{height:"100vh", backgroundColor:"gray"}}>

            </div>
        </div>

    )
}

export default HomePageComponent;
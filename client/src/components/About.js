import React from "react";
import Achievements from "./Achievements"
import Proposition from "./Proposition"
import image4 from './highlights/KMH_5166.jpg'

function About(){
    return(
        <div className="container-fluid bg-light py-5">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-6">
                        <h1 className="display-4 text-primary mb-4">About Us</h1>
                        <img src={image4} alt="Dada Wellness Festival" className="img-fluid rounded shadow mb-4"/>
                        <h3 className="h4 text-secondary mb-3">Dada Wellness Festival</h3>
                        <p className="lead">
                            DWF is a charity medical campaign held during women wellness 
                            month to sensitize, inform and provide advocacy around women's 
                            health conditions. DWF is a one-month campaign that gives priority 
                            to reproductive health-related conditions among others.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="card border-primary h-100">
                            <div className="card-body">
                                <h2 className="card-title text-primary mb-4">ABOUT DADA WELLNESS INITIATIVE (DWI)</h2>
                                <p>Welcome to the Women Wellness Initiative website, dedicated to promoting the health and well-being of women across the globe.</p>
                                <p>At the Women Wellness Initiative, we believe that taking care of ourselves is crucial to living a full, happy, and healthy life.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Our Mission & Focus</h2>
                        <p>Our mission is to provide resources and support for women of all ages and backgrounds, so that they can take control of their health and wellness.</p>
                        
                        <div className="card bg-white shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title text-primary mb-3">Key Areas of Focus</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Nutrition and healthy eating</li>
                                    <li className="list-group-item">Exercise and physical activity</li>
                                    <li className="list-group-item">Mental health and emotional well-being</li>
                                    <li className="list-group-item">Stress management</li>
                                    <li className="list-group-item">Sleep and relaxation</li>
                                    <li className="list-group-item">Women's health issues</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Our Core Values</h2>
                        <div className="card border-primary">
                            <div className="card-body">
                                <ol className="list-group list-group-numbered">
                                    <li className="list-group-item">Women are key influencers of a nation's health-seeking behavior</li>
                                    <li className="list-group-item">Good health is physical, spiritual, emotional and mental well-being</li>
                                    <li className="list-group-item">Promoting healthy communities where women and girls can thrive</li>
                                    <li className="list-group-item">Integrating medicine and holistic health practices</li>
                                    <li className="list-group-item">Preventing illness through education and community involvement</li>
                                    <li className="list-group-item">Promoting equality beyond socioeconomic and educational status</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <Achievements />
                <Proposition />
            </div>
        </div>
    )
}

export default About
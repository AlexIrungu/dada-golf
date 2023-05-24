import React from "react";
import Achievements from "./Achievements"
import Proposition from "./Proposition"


function About(){
    return(
        <div className="about-cont">
            <div className="about">
            <h1>About Us</h1>
            <h3>Dada Wellness Festival</h3>
            <p>DWF is a charity medical campaign held during women wellness 
                month to sensitize, inform and provide
                advocacy around women health conditions .
                DWF is a one month campaign that gives priority to 
                reproductive health related conditions among other.
            </p>
            </div>
            <h1>ABOUT DADA WELLNESS INITIATIVE (DWI)</h1>
            <p>DWI is a charitable community-based organization that brings together different stakeholders in
the health sector to advocate for wellness through various public campaigns focusing on all
aspects of women health.

The objective is to sensitize, inform and provide clarity on misconceptions around women health
issues, as well as encourage and advocate for healthy living.

Part of DWI’s operational plan is organizing campaigns at different times of the year, with each
focusing on a specific thematic area of women health.</p>

            <div>
                <h1>MISSION & VALUES</h1>
                <ol>
                    <li>We believe that women are the key influencers of a nation’s health-seeking behavior.</li>
                    <li>We believe that good health is physical, spiritual, emotional and mental well-being.</li>
                    <li>We believe in healthy communities where women and girls have a healthy life for
personal growth and growth of a healthy community.</li>
                    <li>We believe that good health involves an integration of medicine and holistic health
practices to create a better life.</li>
                    <li>We believe in preventing illness through education, better access to health services,
corporate partnerships in education and prevention and community involvement in
writing the narrative.</li>
                    <li>We believe in equality beyond socioeconomic and educational status of women and girls
in our awareness creation objective and campaigns on access to health services.</li>
                </ol>
                <Achievements />
                <Proposition />
            </div>

            <div className="about-pic">

            </div>
        </div>

    )
}

export default About
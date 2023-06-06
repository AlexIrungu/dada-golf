import React from "react";
import Achievements from "./Achievements"
import Proposition from "./Proposition"
import './About.css'
import image4 from './highlights/KMH_5166.jpg'
 import image5 from './highlights/KMH_5177.jpg'


function About(){
    return(
        <div className="about-cont">
           
            <div className="about">
            <h1>About Us</h1>
            <img src={image4} alt="" className="about-image"/>
            <h3>Dada Wellness Festival</h3>
            <p>DWF is a charity medical campaign held during women wellness 
                month to sensitize, inform and provide
                advocacy around women health conditions .
                DWF is a one month campaign that gives priority to 
                reproductive health related conditions among other.
            </p>
            </div>
            <h1>ABOUT DADA WELLNESS INITIATIVE (DWI)</h1>
              {/* <img src={image5} alt="" className="background-image" />  */}
            <p>
        Welcome to the Women Wellness Initiative website, dedicated to promoting the health and well-being of women across the globe.</p>

<p>As women, we often have a lot on our plates – from balancing work and family responsibilities to managing our physical and mental health. At the Women Wellness Initiative, we believe that taking care of ourselves is crucial to living a full, happy, and healthy life.</p>

<p>Our mission is to provide resources and support for women of all ages and backgrounds, so that they can take control of their health and wellness. Whether you are interested in learning about healthy eating, finding ways to manage stress, or getting involved in community activities that promote wellness, we are here to help.</p>

<p>Our website features a wealth of information, including articles and resources on a wide range of topics related to women's health. We regularly update our content to ensure that we are providing the most relevant and up-to-date advice and information.</p>

<p>Some of the areas we cover include:</p>
<ul>
 <li>Nutrition and healthy eating</li>
 <li>Exercise and physical activity</li>
 <li>Mental health and emotional well-being</li>
 <li>Stress management</li>
 <li>Sleep and relaxation</li>
 <li>Women's health issues, such as reproductive and hormonal health, breast cancer, and menopause.</li>
 </ul>
<p>We also provide resources and information on community programs and events, as well as advice on finding the right health care provider and making informed decisions about your health care.</p>

<p>At the Women Wellness Initiative, we believe that taking care of ourselves is not just important for our own well-being, but also for the well-being of our families, communities, and the world around us. We invite you to explore our website, connect with us on social media, and become a part of our community of women committed to living healthy, happy lives.
        </p> 

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

            {/* <div className="about-pic">
                <img src="https://www.womenswellness-sd.com/wp-content/uploads/2021/07/WWSD-Banner.jpg" alt=""/>

            </div> */}
        </div>

    )
}

export default About
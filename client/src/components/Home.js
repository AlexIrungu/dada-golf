import React from "react";
import './Home.css'

import Timer from "./Timer";
import Footer from "./Footer";


function Home() {
  return (
    <div className="container-fluid bg-pink">
      {/* <Timer /> */}
      <Footer />
    
     
      <div className="row">
        <div className="col-md-12 text-center">
         
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="card shadow rounded">
            <div className="card-body">
              <h1 className="text-center mb-4">DADA GOLF</h1>
              <h6 className="text-center mb-4">TOURNAMENT</h6>
              <h2 className="text-center mb-4">WOMEN WELLNESS MONTH</h2>
              <h2 className="text-center mb-4">FEMALE HEALTH AWARENESS CAMPAIGN</h2>
              <h3 className="text-center mb-4">MAY 1ST - MAY 30TH</h3>
            </div>
          </div>
        </div>
      </div>
      <div>
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
      </div>
     
    </div>
  );
}

export default Home;

import React from "react";
import initiative from '../assets/initiative.png';
import './OurEvents.css';
import image7 from './highlights/KMH_5183.jpg';

function OurEvents() {
  return (
    <div className="ourEvents" >
      <img className="dada" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScbTBY59VL8pqDcRPXPaiHhTvAxsCCEHi5sQ&usqp=CAU" alt=""/>
      <img className="wellness" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPOQ-YNa4JDcOAQUoHPQlo1K7ke1tfcldoGeen6ZA9kiU-Q0075uaXx5v9MeFZ6Ldg2Q&usqp=CAU" alt=""/>
      <h1>2023 DWI WOMEN WELLNESS MONTH</h1>
      <h3>INTRODUCTION</h3>
      <h4>Campaign Duration: 1st to 31st MAY, 2023</h4>
      <h4>Campaign Theme: SEXUAL & REPRODUCTIVE HEALTH; A FUNDAMENTAL RIGHT FOR ALL </h4>
      <h5>TARGET HEALTH OBSERVANCE DAYS:</h5>
      <div className="container mt-3">
        <ol>
          <li>May 8, 2023 – World Ovarian Cancer Day & Women’s Check-up Day (U.S)</li>
          <li>May 14, 2023 - Mother’s Day</li>
          <li>
            14th to 20th May 2023 – Women’s Health Week
            <ul>
              <li>Breast Cancer</li>
              <li>Cervical Cancer</li>
              <li>Ovarian Cancer</li>
              <li>Uterine Cancer</li>
            </ul>
          </li>
          <li>May 28, 2023 - International Day of Action for Women's Health</li>
        </ol>
      </div>

      <h3>ABSTRACT</h3>
      <div className="container mt-3">
        <p>Sexual and reproductive health is a fundamental human right as well as a human development issue that communities must strive to fulfill. The Kenyan Constitution affirms that "every person has the right to the highest attainable standard of health, which includes the right to health care services, including reproductive health care."</p>
        <p>Some of the leading concerns for women's health are:</p>
        <div className="card">
          <ol className="list-group list-group-flush">
            <li className="list-group-item">
              <h5 className="card-title">Heart Disease</h5>
              <p className="card-text">According to the Centres for Disease Control and Prevention (CDC), only 56% of women recognize that heart disease is the leading cause of death for women. While sometimes heart disease is thought of more prominently among men, the CDC reported that this disease was responsible for 1 in 5 female deaths in 2019.</p>
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Cancer</h5>
              <p className="card-text">The three cancers with the highest number of newly diagnosed cases in Kenya affect the breast, cervix, and prostate. GLOBOCAN 2020 estimates show that cervical cancer causes the most deaths among women in Kenya, followed by breast cancer.</p>
            </li>
            <li className="list-group-item">
              <h5 className="card-title">Mental Health</h5>
              <p className="card-text">Mental health issues, such as depression and anxiety, affect both women and men. However, women may experience unique mental health challenges, such as postpartum depression and menopause-related mood changes. It is important to address mental health holistically to ensure the overall well-being of women.</p>
            </li>
          </ol>
        </div>

        <h4>PROBLEM STATEMENT</h4>
        <p>Despite the constitutional right to sexual and reproductive health, women in Kenya continue to face challenges in accessing comprehensive and quality reproductive health care services. There is a need for increased awareness, education, and advocacy to ensure women's health needs are met.</p>

        <h4>OBJECTIVES</h4>
        <ul>
          <li>Empower women with knowledge and skills for better reproductive health decisions</li>
          <li>Increase access to sexual and reproductive health services</li>
          <li>Reduce stigma and discrimination associated with sexual and reproductive health issues</li>
          <li>Promote gender equality and women's rights in relation to sexual and reproductive health</li>
        </ul>

        <h3>CAMPAIGN PLAN</h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ACTIVITY</th>
              <th>DATE</th>
              <th>PLATFORM/VENUE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Social media campaign launch</td>
              <td>May 1, 2023</td>
              <td>Facebook, Twitter, Instagram</td>
            </tr>
            <tr>
              <td>Webinar on sexual and reproductive health</td>
              <td>May 10, 2023</td>
              <td>Online</td>
            </tr>
            <tr>
              <td>Health fair and free screenings</td>
              <td>May 15, 2023</td>
              <td>Community center</td>
            </tr>
            <tr>
              <td>Panel discussion on women's health</td>
              <td>May 22, 2023</td>
              <td>Local university</td>
            </tr>
            <tr>
              <td>Walkathon for women's health</td>
              <td>May 29, 2023</td>
              <td>City park</td>
            </tr>
          </tbody>
        </table>

        <h3>EXPECTED OUTCOMES</h3>
        <ol>
          <li>Increased awareness about sexual and reproductive health among women</li>
          <li>Improved access to sexual and reproductive health services</li>
          <li>Reduced stigma and discrimination surrounding sexual and reproductive health</li>
          <li>Enhanced gender equality and women's rights in relation to sexual and reproductive health</li>
          <li>Empowered women to make informed decisions about their reproductive health</li>
        </ol>
      </div>
    </div>
  );
}

export default OurEvents;

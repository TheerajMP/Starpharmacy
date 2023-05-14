import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFiles/button.css'
import { Typography } from "antd";
const Button = () => {
  return (
    <div>
      <div className="header">
        <div class="logo">
          <img class="logo-img" id="header-img" src="https://cdn-content-oz2.storbie.com/images/shop-banner-480.jpg?i=lMc-za36nbmdDjJQ2X17aMdNHDkeDUPSp6CV5MakLG0k6vpW6S6xUv0dT5hrZU_vrynfpHLzvibbhzWh86yDofT8MmA3BVGLqgBhJY5LHWW0MGpReVyVOV-7AuJOqwluZyehk0NlYwrfEb3Xcg8RSut4JT35h_qffDH_L1ZfWKymfjxeibHPkY2NbgugOc2rSqlrpB_N7jeA0vp-XOFGg63RWcw1_EOxD_a2J5sahfoQwcufMQgU3zCkY4T0Sic4ZgKNeyWt73j0hhrAdr-lvw~~" alt="Remedi logo" />
        </div>
        <nav className="nav-bar">
          <button className="btn-hover color-2" ><Link to="/Login">Admin</Link></button>
          <button className="btn-hover color-2"><Link to="/Supplierlogin">Supplier</Link></button>
        </nav>
      </div>
      <main>
        <section id="hero">
          <div class="grid">
            <div class="column-60">
              <h1>Your | StarPharmacy | Website</h1>
              <p id="description">Spend less time thinking about medicine stock and focus on other important things in life.</p>
            </div>
            <div class="column-40">
              <div className="image-div">
                <img id="hero-img" src="https://raw.githubusercontent.com/sfoteini/responsive-web-design-freeCodeCamp/master/product-landing-page/images/RemediApp.png" alt="Remedi mobile app" width="270" height="497" />
              </div>
            </div>
          </div>
        </section>
        <section id="why">
          <h2>Why you should use Star Pharmacy Website !</h2>
          <div className="container">
            <div className="card">
              <div className="icon">
                <img src="https://raw.githubusercontent.com/sfoteini/responsive-web-design-freeCodeCamp/e7160509c233bbeb6891c405fe2256bc00cd3110/product-landing-page/images/easyToUse.svg" alt="easy to use icon" />
              </div>
              <div className="desc">
                <h3>Easy to Use</h3>
                <p>Manage your medicine stocks with our user-friendly app. Get personalized reminders on time and stay connected .
                </p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src="https://raw.githubusercontent.com/sfoteini/responsive-web-design-freeCodeCamp/e7160509c233bbeb6891c405fe2256bc00cd3110/product-landing-page/images/dataPrivacy.svg" alt="data privacy icon" />
              </div>
              <div className="desc">
                <h3>Data Privacy</h3>
                <p>Your data is a private matter. We will never hand over your  data to third parties.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src="https://raw.githubusercontent.com/sfoteini/responsive-web-design-freeCodeCamp/68737b6e7c403c6a96fc51fce17485afd71da644/product-landing-page/images/research.svg" alt="data privacy icon" />
              </div>
              <div className="desc">
                <h3>Research</h3>
                <p>We use data gathered through our website to improve the stock maintenance.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features">
          <h2>Awesome Key Features</h2>
          <div class="grid">
            <div class="column-40">
              <div className="image-div">
                <img src="https://github.com/sfoteini/responsive-web-design-freeCodeCamp/blob/master/product-landing-page/images/RemediApp.png?raw=true" alt="Remedi mobile app" width="270" height="497" />
              </div>
            </div>
            <div class="column-60">
              <ol>
                <li>
                  <h3 id="pills">Med and refill reminders</h3>
                  <p>Schedule your med reminders, track taken and missed doses and set refill reminders.</p>
                </li>
                <li>
                  <h3 id="med-report">Medicine reports</h3>
                  <p>Check your availability medicine rates based on the number of taken and missed doses in a bar chart.</p>
                </li>
                <li>
                  <h3 id="family">Mail</h3>
                  <p>Once the supplier accepted the order ,the bill will be sent through Mail.</p>
                </li>
                <li>
                  <h3 id="doctor-icon">Communicate with Your Supplier</h3>
                  <p>You can order medicines by choosing which supplier you want</p>
                </li>
              </ol>
            </div>
          </div>
        </section>
        <footer>
          <div id="footer-logo">
            <img className="logo-img" src="https://cdn-content-oz2.storbie.com/images/shop-banner-480.jpg?i=lMc-za36nbmdDjJQ2X17aMdNHDkeDUPSp6CV5MakLG0k6vpW6S6xUv0dT5hrZU_vrynfpHLzvibbhzWh86yDofT8MmA3BVGLqgBhJY5LHWW0MGpReVyVOV-7AuJOqwluZyehk0NlYwrfEb3Xcg8RSut4JT35h_qffDH_L1ZfWKymfjxeibHPkY2NbgugOc2rSqlrpB_N7jeA0vp-XOFGg63RWcw1_EOxD_a2J5sahfoQwcufMQgU3zCkY4T0Sic4ZgKNeyWt73j0hhrAdr-lvw~~" alt="Remedi logo" />
          </div>
          <div id="footer-info">
            <ul style={{ listStyleType: "none" }}>
              <li><a href="#">Privacy Policy</a></li>

              <li><a href="#">Contact Administrator</a></li>
              <li>      (  <Typography.Link href="tel:+7397144434">+7397144434</Typography.Link> )</li>
            </ul>
            <div id="copyright">Copyright@2023 - Done By Sharmitha , Theeraj & Ranjith</div>
          </div>
        </footer>
      </main>
    </div>
  )
}
export default Button
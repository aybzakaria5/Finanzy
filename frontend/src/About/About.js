import React from 'react'
import NavBar from '../NavBar/NavB'
import Style from './About.module.css'
import Footer from '../Home/Footer/Footer'

const About = () => {
  return (
    <>
      <NavBar/>

      <div>
        <div className={Style.image}></div>

        <div className={Style.content_about}>
          <h2>About Us</h2>
          <br />
          <p>
            Welcome to BookHub, a free service dedicated to helping millions of readers discover ebooks they'll love. We provide authors and publishers with powerful tools to drive sales and build a loyal fanbase. When you join, you'll receive:
          </p>
          <ul>
            <li>&#x2022;Exclusive Deals: Unbeatable offers curated by our expert editorial team.</li>
            <li>&#x2022;Personalized Recommendations: Handpicked books suggested by trusted sources.</li>
            <li>&#x2022;Real-time Updates: Notifications from your favorite authors.</li>
          </ul>
          <p>
            We collaborate with all major ebook retailers and devices, partnering with leading publishers and authors to promote their books. Founded in 2024, we are based in Morocco.
          </p>
          <br />

          <span>READERS</span>
          <p>
            Discover <em>how BookHub works</em>  and  <em>read testimonials</em> from our satisfied members.
          </p>
          <br />

          <span>AUTHORS, PUBLISHERS, AND BOOK MARKETERS</span>
          <p>
            Our marketing tools enable you to reach millions of avid readers, gain new fans, and boost book sales. Visit our partners' site to learn how you can promote your book with BookHub, or explore our Partners Blog for marketing strategies and publishing insights.
          </p>
          <br />

          <span>CAREERS</span>
          <p>
            Interested in joining our team? Visit our careers page to get a glimpse of life at BookHub and see our current job openings.
          </p>
          <br />

          <span>MEDIA RESOURCES</span>
          <p>
            For company information and brand assets, please visit our <em> media resources page</em>.
          </p>
          <br />

          <span>CONNECT WITH US</span>
          <p>
            Follow us on <em>Facebook</em>  , <em>Twitter</em>, and <em>Pinterest</em> , or contact us directly. We're here to help!
          </p>  
        </div>

      </div>

      <Footer/>
     
    </>
  )
}

export default About
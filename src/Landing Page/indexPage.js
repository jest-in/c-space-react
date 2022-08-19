import React from "react";

export default function IndexPage() {
  return (
    <div className="html">
      <div className="index-page">
        <div className="index-container">
          <div className="index-nav-div">
            <nav>
              <div className="index-logo-div">
                <a href="#">
                  <img src="/logo-index.svg" alt />
                </a>
              </div>
              <div className="index-nav-items-div">
                <a href="#hero-section">
                  <h1>Home</h1>
                </a>
                <a href="#about-us">
                  <h1>About</h1>
                </a>
                <a href="#contact-us">
                  <h1>Contact</h1>
                </a>
                <a href="#announcement">
                  <h1>Announcements</h1>
                </a>
                <a href="verify-certificate.div">
                  <h1>Verify Certificate</h1>
                </a>
              </div>
              <div className="index-login-btn-div">
                <a href="/login">Log in</a>
              </div>
            </nav>
          </div>
          <section id="hero-section" className="hero-section">
            <div className="hero-container">
              <div className="hero-div1">
                <div className="hero-church-name">
                  <h1>St. Thomas</h1>
                  <h2>Church, Gandibagilu</h2>
                </div>
                <div className="hero-quote">
                  <h1>
                    "Remember God's thoughts are not our thoughts and His way,
                    not our ways. Ask God to help you to be aligned to the
                    center of His will, and remember - as I've heard it said -
                    that 'delay is not denial'." <br />
                    -Pinkie Bagele Taolo.
                  </h1>
                </div>
                <div className="hero-announce-div">
                  <a href="#announcement">
                    <h1>Announcement</h1>
                    <h2>
                      Calling all [people with a specific talent, skill,
                      characteristic, or just time]! Our church group, [name of
                      group], is looking for volunteers who [fit the description
                      for the job needed].
                    </h2>
                  </a>
                </div>
              </div>
              <div className="hero-div2">
                <img
                  className="priest-vector-div"
                  src="/priest-vector.svg"
                  alt
                />
              </div>
            </div>
            <div className="explore-btn-div">
              <a href="#about-us">Explore</a>
            </div>
            <div className="hero-patterns">
              <img src="/hero-patterns.svg" alt />
            </div>
          </section>
          <section id="about-us" className="about-us">
            <div className="about-us-head">
              <h1>About us</h1>
              <hr />
            </div>
            <div className="aboutus-content-div">
              <div className="aboutus-div1">
                <h1>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </h1>
              </div>
              <div className="aboutus-div2">
                <img src="/church-img.png" alt />
              </div>
            </div>
            <div className="aboutus-patterns">
              <img src="/aboutus-patterns.svg" alt />
            </div>
            <div className="priest-div">
              <div className="priest-data-div">
                <div className="priest-img-div">
                  <div className="priest-img-container" />
                </div>
                <div className="priest-entries-div">
                  <h1 className="priest-name">
                    Rev. Fr. Vettamthadathil Mathew
                  </h1>
                  <h2 className="priest-contact">Contact : +91 98765 43210</h2>
                  <h2 className="priest-address">
                    Address : Rev.Sr. Superior Aradhana Convent Gandibagilu P.O
                    D.K., Karnataka-574 228
                  </h2>
                  <h2 className="priest-dob">DOB : 15-08-1947</h2>
                </div>
              </div>
              <div className="priest-sub1">
                <div className="priest-head">
                  <h1>Parish Priest</h1>
                </div>
              </div>
              <div className="priest-sub2" />
            </div>
            <div className="priest-patterns">
              <img src="/priest-patterns.svg" alt />
            </div>
          </section>
          <section id="contact-us" className="contact-us">
            <div className="contactus-head">
              <h1>Contact Us</h1>
              <hr />
            </div>
            <div className="contactus-content-div">
              <div className="contact-us-address-div">
                <div className="contactus-address-entries">
                  <div className="contactus-address-topbar">
                    <h1>Address</h1>
                  </div>
                  <div className="contactus-address-content">
                    <h1>
                      Gandibagilu P.O. Belthanagdy Taluk, D.K Dist, Karnataka
                      State <br />
                      Pin : 574 228
                    </h1>
                  </div>
                </div>
              </div>
              <div className="contact-us-phone-div">
                <div className="contactus-phone-entries">
                  <div className="contactus-phone-topbar">
                    <h1>Phone</h1>
                  </div>
                  <div className="contactus-phone-content">
                    <h1>
                      +91 94483 91581 <br />
                      +91 94809 83244
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-div">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.757816547768!2d75.4571107!3d13.0236043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea8402753b49c2bb!2sSt%20Thomas%20Church%20Gandibagilu%2C%20Neria!5e0!3m2!1sen!2sin!4v1659800096826!5m2!1sen!2sin"
                width="80%"
                height={350}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="contactus-patterns">
              <img src="/contactus-patterns.svg" alt />
            </div>
          </section>
          <section className="announcement" id="announcement">
            <div className="announcement-head contactus-head">
              <h1>Announcements</h1>
              <hr />
            </div>
            <div className="announce-content-div">
              <div className="announce-entries-div">
                <div className="announce-container">
                  <div className="announce-text">
                    <h1>
                      <span className="quotes">"</span>
                      <span className="announcement-content">
                        Calling all [people with a specific talent, skill,
                        characteristic, or just time]! Our church group, [name
                        of group], is looking for volunteers who [fit the
                        description for the job needed]. [Group name] will be
                        holding an event on [date, time] and is asking for the
                        community to sign up to help
                      </span>
                      <span className="quotes">"</span>
                    </h1>
                    <div className="announce-daytime-div">
                      <div className="announce-date-div">
                        <h2>12:45 AM</h2>
                      </div>
                      <div className="announce-time-div">
                        <h2>8-Jan-2022</h2>
                      </div>
                    </div>
                  </div>
                  <div className="announce-text">
                    <h1>
                      <span className="quotes">"</span>
                      <span className="announcement-content">
                        Calling all [people with a specific talent, skill,
                        characteristic, or just time]! Our church group, [name
                        of group], is looking for volunteers who [fit the
                        description for the job needed]. [Group name] will be
                        holding an event on [date, time] and is asking for the
                        community to sign up to help
                      </span>
                      <span className="quotes">"</span>
                    </h1>
                    <div className="announce-daytime-div">
                      <div className="announce-date-div">
                        <h2>12:45 AM</h2>
                      </div>
                      <div className="announce-time-div">
                        <h2>8-Jan-2022</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="load-more-btn-div">
                  <a href>Load More</a>
                </div>
              </div>
              <div className="announce-img-div">
                <img src="/announce-vector.svg" alt />
              </div>
            </div>
            <div className="announcement-patterns">
              <img src="/announcement-patterns.svg" alt />
            </div>
          </section>
          <footer>
            <div className="footer-container">
              <div className="footer-address-div">
                <h1>Address</h1>
                <h2>
                  Gandibagilu P.O. Belthanagdy Taluk, D.K Dist, Karnataka State{" "}
                  <br />
                  Pin : 574 228
                </h2>
              </div>
              <div className="footer-contact-div">
                <h1>Contact</h1>
                <h2>
                  +91 94483 91581 <br />
                  +91 94809 83244
                </h2>
              </div>
              <div className="footer-quicklinks-div">
                <h1>Quick Links</h1>
                <a href="#hero-section">Home</a>
                <br />
                <a href="#about-us">About Us</a>
                <br />
                <a href="#contact-us">Contact Us</a>
                <br />
                <a href>Announcements</a>
              </div>
            </div>
            <hr />
            <h1>© 2022 Church-Space | All Rights Reserved</h1>
          </footer>
        </div>
      </div>
    </div>
  );
}

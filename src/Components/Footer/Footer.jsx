import React, { useEffect } from 'react';
import './Footer.css';
import Video from '../../Assets/video.mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaTwitter, FaYoutube, FaTripadvisor, FaInstagram } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(() =>  {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={Video} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter e-mail address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon'/> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia soluta repudiandae nostrum, cupiditate saepe consequuntur distinctio. Sed, exercitationem non ipsa id commodi inventore necessitatibus, officiis, nesciunt explicabo odio sint.
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <FaTwitter className='icon'/>
              <FaYoutube className='icon'/>
              <FaInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-aos="fade-up" data-aos-duration="2000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                CR7 Hotels
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
            </div>

            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                California
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Dubai
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Europe
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED---KVNGFAX 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer;

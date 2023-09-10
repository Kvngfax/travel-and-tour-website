import React, { useEffect } from 'react';
import './Main.css';
import MainData from './MainData';
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Main = () => {

  useEffect(() =>  {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          MainData.map(({id, imgsrc, destTitle, location, grade, fees, description}) => {
            return(
              <div data-aos="fade-up" key={id} className='singleDestination'>
                <div className="imageDiv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <div className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </div>
                </div>
              </div>
            )

          })
        }
      </div>
    </section>
  )
}

export default Main;

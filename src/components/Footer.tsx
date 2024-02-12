'use client';
import Link from 'next/link';
import Image from 'next/image';
import instagram from '@/components/images/instagram.png';
import linkedin from '@/components/images/linkedin.png';
import youtube from '@/components/images/youtube.png';
import tweeter from '@/components/images/twitter.png';

const Footer = () => {
  return (
    <div className='footer-dark'>
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-3 item'>
              <h3>Services</h3>
              <ul>
                <li>
                  <a href='#'>Rent-a-Car</a>
                </li>
                <li>
                  <a href='#'>Buy-a-Car</a>
                </li>
                <li>
                  <a href='#'>Appointment</a>
                </li>
              </ul>
            </div>
            <div className='col-sm-6 col-md-3 item'>
              <h3>About</h3>
              <ul>
                <li>
                  <a href='#'>Ratings</a>
                </li>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Careers</a>
                </li>
              </ul>
            </div>
            <div className='col-md-6 item text'>
              <h3>Drive-Swap-Hub</h3>
              <p>
              Drive-Swap-Hub offers a seamless platform for car rental and sales, 
              providing customers with a vast selection of vehicles for any occasion. 
              Whether you're looking to rent a car for a road trip or purchase your dream 
              vehicle, our user-friendly service ensures a 
              hassle-free experience with competitive pricing and exceptional customer support.
              </p>
            </div>
            <div className="col item social">
                <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src={instagram} alt="instagam" width={36} height={36} />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                <Image src={youtube} alt="Instagram" width={36} height={36} />
                </a>

              <a href='#' target="_blank" rel="noopener noreferrer">
                <Image src={tweeter} alt ="Tweeter" width={36} height={36} />
              </a>

              <a href='#' target="_blank" rel="noopener noreferrer">
              <Image src={linkedin} alt ="linkedin" width={36} height={36} />
              </a>
            </div>
          </div>
          <p className='copyright'>Drive-Swap-Hub © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

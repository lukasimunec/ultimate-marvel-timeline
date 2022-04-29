import React from 'react';
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { Follow } from 'react-twitter-widgets';

const Footer = () => {

  return (
    <div className="container">
      <br /><br />
      <footer className='row justify-content-center border-top border-warning'>

        <div className="row justify-content-center">
          <hr />
          <div className="col-md-6 col-12 text-center">
            Made by your Bronion ❤️
            <h5>You can support my work by buying me a cup of coffee ☕</h5>
            <br />
            <a href="https://www.buymeacoffee.com/nKDT4U7" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{ "height": "50px", "width": "150px" }} />
            </a>
            <br /><br />
            <h5> For any inquiries, feel free to contact me 😀</h5>
            <Follow username="bronion_co" />
            <br /><br /><br />
            <NavLink to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</NavLink>
          </div>
        </div>
      </footer>
      <br />
    </div >
  )
}

export default Footer

import React from "react";
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Follow } from 'react-twitter-widgets'

import dice from '../../assets/home/dice.gif'
import marvel from '../../assets/home/marvel.gif'
import wifi from '../../assets/home/wifi.gif'
import sprint from '../../assets/home/sprint.gif'
import post from '../../assets/home/post.gif'
import ambient from '../../assets/home/ambient.gif'
import earth from '../../assets/home/earth.gif'

import './Home.css'
import { NavLink } from "react-router-dom";
import HeadNav from "../../components/HeadNav";

const Home = () => {

  return (
    <div className="container">
      <HeadNav title={"BRONION"} home={true} />
      <br />
      <div className="row home">
        <LinkContainer to="/streaming-roulette" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top" src={dice} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">STREAMING ROULETTE</h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/complete-marvel-timeline" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top" src={marvel} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">COMPLETE MARVEL TIMELINE</h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/frame-your-wifi" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top" src={wifi} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">FRAME YOUR WIFI<br /><br /></h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/sprint-name-generator" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top img-fluid" src={sprint} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">SPRINT NAME GENERATOR</h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/fake-a-post" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top img-fluid" src={post} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">FAKE A POST<br /><br /></h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/ambient-creator" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top img-fluid" src={ambient} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">AMBIENT CREATOR<br /><br /></h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/layers-of-earth" className="col-6 col-md-2">
          <Nav.Link>
            <div className="card">
              <img className="card-img-top img-fluid" src={earth} alt="" />
              <div className="card-body">
                <h6 className="card-title text-center">LAYERS OF EARTH<br /><br /></h6>
              </div>
            </div>
          </Nav.Link>
        </LinkContainer>
      </div>

      <br />
      <br />
      <div className="row justify-content-center">
        <h1>About me</h1>
        <hr />
        <div className="col-md-6 col-12 text-center">
          <h5>Coder from Croatia with a goal to create free and fun websites.</h5>
          <h5>You can support my work by buying me a cup of coffee ☕</h5>
          <br /><br />
          <h5> For any inquiries, feel free to contact me 😀</h5>
          <Follow username="bronion_co" />
          <br /><br /><br />
          <NavLink to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</NavLink>
        </div>
      </div>
    </div >
  )
}

export default Home
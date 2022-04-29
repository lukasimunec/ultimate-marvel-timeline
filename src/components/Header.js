import React from 'react';
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async"
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

import logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {

  const location = useLocation();
  const suffix = " | Bronion";

  const homeTitle = "Home";
  const diceTitle = "Streaming Roulette";
  const marvelTitle = "Complete Marvel Timeline";
  const wifiTitle = "Frame Your WiFi";
  const sprintTitle = "Sprint Name Generator";
  const postTitle = "Fake a Post";
  const ambientTitle = "Ambient Creator";
  const earthTitle = "Layers of Earth";
  const privacyTitle = "Privacy Policy";

  const homeDescription = "Unique tools for developers, designers and ordinary folks. Explore and create, share with friends.";
  const diceDescription = "Don't know what to watch? Throw the dices, and let the fate decide.";
  const marvelDescription = "Explore the only MCU timeline in chronological order. Export the image and print for binge watching all MCU Movies and TV Shows.";
  const wifiDescription = "Create and design your own personalized framed WiFi picture. Let your guests scan the QR code and enjoy the WiFi. Excellent idea for coffee shops, family homes, apartments, etc.";
  const sprintDescription = "Generate random and unique sprint name from twelve categories.";
  const postDescription = "Generate a fake Tweet, Facebook or Instagram Post. Export as image and share with friends.";
  const ambientDescription = "Create custom ambient whitenoise background music. Combine up to eleven sounds, or pick one of six premade samples.";
  const earthDescription = "Explore all layers of Earth - from inner core to outer space.";


  const [title, setTitle] = useState("Bronion")
  const [description, setDescription] = useState(homeDescription)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    if (location.pathname === '/') {
      setTitle(homeTitle + suffix);
      setDescription(homeDescription);
    } else if (location.pathname === '/streaming-roulette') {
      setTitle(diceTitle + suffix);
      setDescription(diceDescription);
    } else if (location.pathname === '/complete-marvel-timeline') {
      setTitle(marvelTitle + suffix);
      setDescription(marvelDescription);
    } else if (location.pathname === '/frame-your-wifi') {
      setTitle(wifiTitle + suffix);
      setDescription(wifiDescription);
    } else if (location.pathname === '/sprint-name-generator') {
      setTitle(sprintTitle + suffix);
      setDescription(sprintDescription);
    } else if (location.pathname === '/fake-a-post') {
      setTitle(postTitle + suffix);
      setDescription(postDescription);
    } else if (location.pathname === '/ambient-creator') {
      setTitle(ambientTitle + suffix)
      setDescription(ambientDescription);
    } else if (location.pathname === '/layers-of-earth') {
      setTitle(earthTitle + suffix);
      setDescription(earthDescription);
    } else if (location.pathname === '/privacy-policy') {
      setTitle(privacyTitle + suffix);
      setDescription(homeDescription);
    }

  }, [location])

  return (
    <React.Fragment>
      <Helmet prioritizeSeoTags>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

      </Helmet>
    </React.Fragment>
  )
}

export default Header

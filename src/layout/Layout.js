import React from 'react';
// router
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// components
import Footer from '../components/Footer'
import Header from '../components/Header'

const Layout = ({ children }) => {
  return (
    <Router>
      <HelmetProvider>
        <Header />
        <main>{children}</main>
        <Footer />
      </HelmetProvider>
    </Router>
  )
}

export default Layout

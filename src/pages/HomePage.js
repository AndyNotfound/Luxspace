import React from 'react'
import useModalDOM from '../helpers/hooks/useModalDOM'
import useScrollAchor from '../helpers/hooks/useScrollAnchor'
import Client from '../parts/Client'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/Home/BrowseRoom'
import JustArrived from '../parts/Home/JustArrived'
import Sitemap from '../parts/Sitemap'

export default function HomePage() {
  useScrollAchor();
  useModalDOM();
  
  return (
    <>
    <Header theme="light" position="absolute" />
    <Hero />
    <BrowseRoom />
    <JustArrived />
    <Client />
    <Sitemap />
    <Footer />
    </>
  )
}
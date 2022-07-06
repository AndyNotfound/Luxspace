import React from 'react'
import Client from '../parts/Client'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/Home/BrowseRoom'
import JustArrived from '../parts/Home/JustArrived'
import Sitemap from '../parts/Sitemap'

export default function HomePage(props) {
  return (
    <>
    <Header />
    <Hero />
    <BrowseRoom />
    <JustArrived />
    <Client />
    <Sitemap />
    </>
  )
}
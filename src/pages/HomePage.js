import React from 'react'
import Header from '../parts/Header'
import Hero from '../parts/Hero'
import BrowseRoom from '../parts/Home/BrowseRoom'
import JustArrived from '../parts/Home/JustArrived'

export default function HomePage(props) {
  return (
    <>
    <Header />
    <Hero />
    <BrowseRoom />
    <JustArrived />
    </>
  )
}
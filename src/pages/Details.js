import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Client from '../parts/Client'
import Product from '../parts/Details/Product'
import Footer from '../parts/Footer'
import Header from '../parts/Header'
import Sitemap from '../parts/Sitemap'

export default function DetailPage() {
  return (
    <>
    <Header theme="dark" />
    <Breadcrumb list ={[
      {url : '/', name: 'Home'},
      {url : '/categories/91231', name : 'Office Room'},
      {url : '/categories/91231/products/788', name : 'Details'}
    ]}/>
    <Product />
    <Sitemap />
    <Footer />
    </>
  )
}
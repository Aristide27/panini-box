import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Benefits from './components/Benefits'
import Product from './components/Product'
import Order from './components/Order'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Benefits />
        <Product />
        <Order />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

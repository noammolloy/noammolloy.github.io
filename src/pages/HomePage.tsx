import React from 'react'
// import { useEffect } from 'react'
import { Header } from '../components/Header/Header'
import { Main } from '../components/Main/Main'
import { GlobalStyle } from '../styles/global'
import { Analytics } from "@vercel/analytics/react"
import { Contact } from "../components/Contact/Contact"
import { Footer } from '../components/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css'
function HomePage() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Analytics />
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default HomePage
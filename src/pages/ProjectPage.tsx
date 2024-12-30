import React from 'react'
import { Header } from '../components/Header/Header'
import { ProjectPageMain } from '../components/ProjectPageMain/ProjectPageMain'
import { GlobalStyle } from '../styles/global'
import { Analytics } from "@vercel/analytics/react"
import { Contact } from "../components/Contact/Contact"
import { Footer } from '../components/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css'
function ProjectPage() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <ProjectPageMain></ProjectPageMain>
      <Analytics />
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default ProjectPage
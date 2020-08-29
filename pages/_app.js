import React from 'react'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

// seems to be needed for styles to be applied with react-fontawesome
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-421580721
import '@fortawesome/fontawesome-svg-core/styles.css'

import './styles.css'

library.add(faGithub, faTwitter, faLinkedin)

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    )
  }
}

export default MyApp

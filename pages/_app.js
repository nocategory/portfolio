import React from 'react'
import App from 'next/app'
import { AnimatePresence } from 'framer-motion'
// seems to be needed for styles to be applied with react-fontawesome
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-421580721
import '@fortawesome/fontawesome-svg-core/styles.css'

import './styles.css'

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

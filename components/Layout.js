import Head from 'next/head'
import { motion } from 'framer-motion'
import Menu from '@components/Menu'
import { dark, light } from '@components/constants'

const fadeMenu = {
  initial: {
    opacity: 0.3,
  },
  exit: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'tween',
    },
  },
}

const Layout = ({ children, bgColor, theme }) => (
  <motion.div
    className="container"
    style={{ backgroundColor: bgColor }}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeMenu}
  >
    <Head>
      <title>nocategory's portfolio</title>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="Description"
        content="Web development portfolio of nocategory."
      />
    </Head>
    <main>{children}</main>
    <Menu bgColor={bgColor} />

    <style jsx>{`
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
      @media only screen and (max-width: 600px) {
        main {
          justify-content: flex-start;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        color: ${theme === 'dark' ? light : dark};
        background-color: ${bgColor};
        padding: 0;
        margin: 0;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Helvetica, Arial, sans-serif, Ubuntu, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        line-height: 1.2;
        letter-spacing: -0.011em;
        height: 100vh;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </motion.div>
)

export default Layout

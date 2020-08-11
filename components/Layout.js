import Head from 'next/head'
import { motion } from 'framer-motion'
import Menu from '@components/Menu'

const fadeMenu = {
  initial: {
    opacity: 0.8,
  },
  exit: {
    opacity: 0.8,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
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
      <link rel="icon" href="/favicon.ico" /> {/* TODO: change the favicon */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>{children}</main>
    <Menu />

    <style jsx>{`
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        color: ${theme === 'dark' ? '#dadada' : '#201f24'};
        background-color: ${bgColor};
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, Ubuntu, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        line-height: 1.5;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </motion.div>
)

export default Layout

import Head from 'next/head'
import { motion } from 'framer-motion'

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

const Layout = ({ children, bgColor }) => (
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
    </Head>
    <main>{children}</main>

    <style jsx>{`
      main {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        color: rgba(255, 255, 255, 0.8);
        background-color: ${bgColor}
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, Ubuntu, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </motion.div>
)

export default Layout

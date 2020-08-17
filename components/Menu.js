import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { light, dark } from '@components/constants'

const Menu = () => {
  const [activePage, setActivePage] = useState(null)
  const menuItems = ['home', 'about', 'work', 'oss']
  const router = useRouter()

  useEffect(() => {
    setActivePage(
      router.pathname.length > 1 ? router.pathname.split('/').join('') : 'home'
    )
  }, []) // [] => execute only at mount time

  const fadeMenu = {
    initial: {
      opacity: 0,
      y: 100,
    },
    exit: {
      opacity: 0,
      y: 0,
    },
    animate: {
      y: 0,
      opacity: 0.8,
      transition: {
        duration: 0.3,
        type: 'tween',
      },
    },
  }

  return (
    <motion.div
      className="menu-wrapper"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeMenu}
    >
      <ul>
        {menuItems.map((item) => {
          return (
            <li key={item}>
              <Link href={item !== 'home' ? `/${item}` : '/'}>
                <a className={activePage === item ? 'active' : ''}>{item}</a>
              </Link>
            </li>
          )
        })}
      </ul>

      <style jsx>{`
        ul {
          display: inline-flex;
          flex-direction: row;
          padding: 0;
          justify-content: flex-end;
        }

        ul li {
          list-style-type: none;
        }

        ul li a {
          color: ${light};
          opacity: 0.8;
          text-decoration: none;
          padding: 0.7rem;
          margin: 0 0.2rem; /** keeps a small space between active & hovered a's */
          transition: 0.3s linear;
        }

        ul li a:hover {
          background-color: #201f24;
          color: ${light};
          opacity: 0.8;
          transition: 0.3s linear;
          text-decoration: none;
          border-radius: 0.5rem;
        }

        .active {
          background-color: ${dark};
          text-decoration: none;
          border-radius: 0.5rem;
        }
      `}</style>
    </motion.div>
  )
}

export default Menu

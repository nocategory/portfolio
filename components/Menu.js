import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { motion, useCycle } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { light, blue, dark, hoverLight } from '@components/constants'

const Menu = ({ bgColor }) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const [activePage, setActivePage] = useState(null)
  const menuItems = ['home', 'about', 'work', 'oss']
  const router = useRouter()

  useEffect(() => {
    const pageToSet =
      router.pathname.length > 1 ? router.pathname.split('/').join('') : 'home'
    setActivePage(pageToSet)
    pageToSet === 'home' ? toggleOpen() : null // have menu expanded on home
  }, []) // [] => execute only at mount time

  const menu = {
    open: {
      clipPath: 'circle(200px at 50% 50%)',
      transition: {
        type: 'tween',
        duration: 0.6,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    closed: {
      clipPath: 'circle(20px at 50% 50%)',
      transition: {
        type: 'tween',
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemsAnimation = {
    shown: {
      opacity: 1,
      display: 'flex',
      transition: {
        type: 'ease',
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      display: 'none',
      transition: {
        type: 'ease',
        duration: 0.3,
      },
    },
  }

  return (
    <motion.nav
      className="menu"
      initial={false}
      onClick={() => toggleOpen()}
      whileHover={{ scale: 1.1 }}
      variants={menu}
      animate={isOpen ? 'open' : 'closed'}
      style={{ backgroundColor: bgColor === dark ? light : dark }}
    >
      <motion.ul
        animate={isOpen ? 'shown' : 'hidden'}
        variants={itemsAnimation}
        style={{
          display: 'inline-flex',
          flexDirection: 'row',
          padding: 0,
          justifyContent: 'center',
        }}
      >
        {menuItems.map((item) => {
          return (
            <li key={item} className="menu-item">
              <Link href={item !== 'home' ? `/${item}` : '/'}>
                <a className={activePage === item ? 'active' : ''}>{item}</a>
              </Link>
            </li>
          )
        })}
      </motion.ul>
      <motion.span
        animate={isOpen ? 'hidden' : 'shown'}
        variants={itemsAnimation}
      >
        <FontAwesomeIcon
          icon={['fa', 'bars']}
          size="1x"
          style={{
            color: bgColor,
          }}
        />
      </motion.span>
      <style jsx>{`
        .menu-item {
          list-style-type: none;
        }

        .menu-item a {
          color: ${bgColor};
          text-decoration: none;
          font-size: 0.9rem;
          padding: 0.7rem;
          margin: 0 0.2rem; /** keeps a small space between active & hovered a's */
          transition: 0.3s ease;
        }

        .menu-item a:hover {
          background-color: ${bgColor};
          color: ${bgColor === dark ? light : dark} !important;
          opacity: 0.9;
          transition: 0.3s ease;
          text-decoration: none;
          border-radius: 0.5rem;
        }

        .active {
          background-color: ${bgColor};
          color: ${bgColor === dark ? light : dark} !important;
          text-decoration: none;
          border-radius: 0.5rem;
          opacity: 0.9;
        }
      `}</style>
    </motion.nav>
  )
}

export default Menu

import Link from 'next/link'

const Menu = ({ activePage }) => {
  const menuItems = ['home', 'about', 'work', 'oss'] // TODO: Think better about these

  return (
    <div className="menu-wrapper">
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
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 0.7rem;
          margin: 0 0.2rem; /** keeps a small space between active & hovered a's */
        }

        ul li a:hover {
          background-color: #201f24;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          border-radius: 0.5rem;
        }

        .active {
          background-color: #201f24;
          text-decoration: none;
          border-radius: 0.5rem;
        }

        .menu-wrapper {
          background-color: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.8);
          padding: 0 2rem;
          border-radius: 2rem;
          position: fixed;
          bottom: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Menu

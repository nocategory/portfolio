import React, { useRef } from 'react'
import Layout from '@components/Layout'
import BracesText from '@components/BracesText'
import Project from '@components/Project'
import { light, blue } from '@components/constants'
import useScrollSpy from '@hooks/useScrollSpy'
import fs from 'fs'
import path from 'path'

const Work = ({ workData }) => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  })

  return (
    <Layout bgColor={light} theme="light">
      <div className="row">
        <div className="sidebar">
          <div style={{ position: 'fixed' }}>
            <BracesText fontSize="3rem">work</BracesText>
            <nav>
              <ul>
                <li>
                  <a
                    href="#projects"
                    className={activeSection === 0 ? 'active' : ''}
                  >
                    projects
                  </a>
                </li>
                <li>
                  <a href="#">certificates</a>
                </li>
                <li>
                  <a href="/oss">open-source</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="half-page desc" style={{}}>
          <div className="projects" id="projects" ref={sectionRefs[0]}>
            {workData.projects.map((data) => (
              <Project
                name={data.name}
                link={data.link}
                image={data.image}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .half-page {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 5rem 2rem;
        }

        .sidebar {
          flex: 1;
          flex-direction: column;
          display: flex;
          align-items: center;
          text-align: center;
        }
        .desc {
          flex: 2.5;
          align-items: center;
        }
        nav ul {
          padding-left: 0;
        }
        nav ul li a {
          color: black;
          opacity: 0.5;
          transition: 0.3s linear;
        }
        nav ul li a:hover {
          opacity: 0.7;
          color: ${blue};
          transition: 0.3s linear;
        }
        nav ul li a.active {
          color: ${blue};
          opacity: 1;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'components/work_data.json')
  const workData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  return {
    props: { workData }, // will be passed to the page component as props
  }
}

export default Work

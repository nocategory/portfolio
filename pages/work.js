import React, { useRef } from 'react'
import Layout from '@components/Layout'
import BracesText from '@components/BracesText'
import Project from '@components/Project'
import Certificate from '@components/Certificate'
import { light, blue } from '@components/constants'
import useScrollSpy from '@hooks/useScrollSpy'
import fs from 'fs'
import path from 'path'

const Work = ({ workData }) => {
  const sectionRefs = [useRef(null), useRef(null)]

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -400,
  })

  return (
    <Layout bgColor={light} theme="light">
      <div className="row">
        <div className="sidebar">
          <div className="sidebar-content">
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
                  <a
                    href="#certificates"
                    className={activeSection === 1 ? 'active' : ''}
                  >
                    certificates
                  </a>
                </li>
                <li>
                  <a href="/oss">open-source</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="half-page desc">
          <div className="projects" id="projects" ref={sectionRefs[0]}>
            {workData.projects.map((data) => (
              <Project
                key={data.name}
                name={data.name}
                link={data.link}
                image={data.image}
                desc={data.desc}
              />
            ))}
          </div>
          <div
            className="certificates"
            id="certificates"
            ref={sectionRefs[1]}
            style={{ margin: '10rem 0' }}
          >
            <h1 style={{ textAlign: 'center' }}>Certificates</h1>
            {workData.certificates.map((data) => (
              <Certificate
                key={data.name}
                name={data.name}
                icon={data.icon}
                link={data.link}
                prefix={data.prefix}
                bgColor={data.bgColor}
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
          overflow: hidden;
        }
        .sidebar {
          flex: 1;
          flex-direction: column;
          display: flex;
          align-items: center;
          text-align: center;
          border-right: 2px dotted rgb(84 84 84 / 15%);
        }
        .sidebar-content {
          position: fixed;
        }
        .desc {
          flex: 2.5;
          align-items: center;
          flex-direction: column;
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

        @media only screen and (max-width: 1000px) {
          .row {
            flex-direction: column;
          }
          .sidebar-content {
            position: relative;
          }
          .sidebar {
            border-bottom: 2px dotted rgb(84 84 84 / 15%);
            border-right: none;
          }
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const dataPath = path.join(process.cwd(), 'public/work_data.json')
  const workData = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
  return {
    props: { workData }, // will be passed to the page component as props
  }
}

export default Work

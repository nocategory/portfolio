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
    <Layout bgColor={'#fdfdfd'} theme="light">
      <div className="projects" id="projects" ref={sectionRefs[0]}>
        {workData.projects.map((data) => (
          <Project
            key={data.name}
            name={data.name}
            type={data.type}
            link={data.link}
            image={data.image}
            desc={data.desc}
          />
        ))}
      </div>
      <div className="certificates" id="certificates" ref={sectionRefs[1]}>
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
      <style jsx>{`
        .row {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding: 5rem 2rem;
          overflow: hidden;
        }
        .certificates {
          max-width: 500px;
          margin: 0 auto;
          padding: 3rem;
          background-color: #fdfdfd;
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

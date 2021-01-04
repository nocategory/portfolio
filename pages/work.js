import React, { useRef } from 'react'
import Layout from '@components/Layout'
import Project from '@components/Project'
import Certificate from '@components/Certificate'
import useSWR from 'swr'
import { GraphQLClient, gql } from 'graphql-request'

const query = gql`
  {
    projects {
      name
      type
      link
      image
      desc
    }
    certificates {
      bgColor
      icon
      link
      name
      prefix
    }
  }
`

const graphQLClient = new GraphQLClient(process.env.HASURA_URL, {
  headers: {
    'x-hasura-admin-secret': process.env.HASURA_SECRET,
  },
})

const fetcher = (query) => graphQLClient.request(query)

const Work = ({ serverData }) => {
  const { data, error } = useSWR(query, fetcher, { initialData: serverData })
  // if (error) return JSON.stringify(error) // TODO: change this to an error component

  return (
    <Layout bgColor={'#fdfdfd'} theme="light">
      <div className="projects" id="projects">
        {data.projects.map((data) => (
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
      <div className="certificates" id="certificates">
        <h1 style={{ textAlign: 'center' }}>Certificates</h1>
        {data.certificates.map((data) => (
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
  // `getStaticProps` is invoked on the server-side,
  // so this `fetcher` function will be executed on the server-side.
  const serverData = await fetcher(query)
  return { props: { serverData } }
}

export default Work

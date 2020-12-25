import Layout from '@components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { light, dark } from '@components/constants'
import BracesText from '@components/BracesText'
import Repos from '@components/Repos'
import { GraphQLClient, gql } from 'graphql-request'

const endpoint = 'https://api.github.com/graphql' // endpoint to github's graphql api
const ossQuery = gql`
  {
    viewer {
      repositoriesContributedTo(
        first: 10
        contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
        orderBy: { field: UPDATED_AT, direction: DESC }
        includeUserRepositories: true
        privacy: PUBLIC
      ) {
        nodes {
          nameWithOwner
          forkCount
          url
          owner {
            avatarUrl(size: 200)
          }
        }
      }
    }
  }
`

// used for adding auth header
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GH_TOKEN}`,
  },
})

const fetcher = (query) => graphQLClient.request(query)

const OSS = ({ data }) => {
  const ossProjects = data.viewer.repositoriesContributedTo.nodes
  return (
    <Layout bgColor={dark} theme="dark">
      <BracesText fontSize="3rem">oss contributions</BracesText>
      <span style={{ opacity: 0.3 }}>*just the most recent ones*</span>
      <div className="list-repos">
        {ossProjects.map((repo) => (
          <Repos repo={repo} key={repo.nameWithOwner} />
        ))}
      </div>
      <div className="github-check">
        <a href="https://github.com/nocategory" target="_blank">
          <span>view more of my contributions @</span>
          <FontAwesomeIcon
            icon={['fab', 'github']}
            size="2x"
            style={{ color: light, marginLeft: '0.5rem' }}
          />
        </a>
      </div>
      <style jsx>{`
        .list-repos {
          padding: 2rem;
          flex-direction: row;
          display: flex;
          flex-wrap: wrap;
        }
        .github-check {
          margin-bottom: 100px;
          text-align: center;
        }
        .github-check span {
          vertical-align: super;
        }
        .github-check > a {
          margin: 3rem;
          padding: 1rem;
          opacity: 0.5;
          transition: 0.3s linear;
        }
        .github-check > a:hover {
          opacity: 1;
        }
        a {
          color: ${light};
        }
      `}</style>
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = await fetcher(ossQuery)
  return { props: { data } }
}

export default OSS

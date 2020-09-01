import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { light, blue } from '@components/constants'

const Repos = ({ ...props }) => {
  const { repo, key } = props
  return (
    <div className="content repo" key={key}>
      <div className="repo-name">
        <h2>{repo.nameWithOwner}</h2>
      </div>
      <div className="repo-avatar">
        <img src={repo.owner.avatarUrl} />
      </div>
      <div className="repo-forks">
        <p>
          {repo.forkCount}
          {'  '}
          <FontAwesomeIcon icon={['fas', 'code-branch']} size="1x" />
        </p>
      </div>
      <div className="repo-link">
        <a href={repo.url} target="_blank">
          View repository
        </a>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          margin: 1rem;
          flex: 1;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          padding: 2rem;
          background-color: rgb(255 255 255 / 1%);
          transition: 0.3s linear;
        }
        .repo-avatar img {
          border-radius: 50%;
        }
        .repo-forks p {
          font-weight: 500;
        }
        .content:hover {
          background-color: rgb(32 86 209 / 20%);
          transition: 0.3s linear;
        }
        .content:hover a {
          color: ${light};
          transition: 0.3s linear;
        }
        .repo-link a {
          padding: 2rem;
        }
        a {
          color: ${blue};
        }
      `}</style>
    </div>
  )
}

export default Repos

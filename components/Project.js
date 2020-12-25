import { blue } from '@components/constants'
import Image from '@components/Image'

const Project = ({ name, type, link, image, desc }) => {
  return (
    <div className="project">
      <h3>{type}</h3>
      <h2>{name}</h2>
      <a href={link} className="project-link" target="_blank">
        {link.includes('github.com') ? 'View Repo' : 'View Site'}
      </a>
      <Image src={image} />
      <p>{desc}</p>
      <style jsx>{`
        .project {
          padding: 2rem;
          text-align: justify;
          border-bottom: 1px solid #d8d8d8;
          display: flex;
          align-items: center;
          flex-direction: column;
          flex-wrap: nowrap;
        }
        .project:nth-child(odd) {
          background-color: #fdfdfd;
        }
        .project:nth-child(even) {
          background-color: #f7f7f7;
        }
        .project p {
          opacity: 1;
          font-size: 1.15rem;
          word-spacing: 0.1rem;
          max-width: 70%;
        }
        .project h2 {
          margin: 0 0 10px 0;
          font-size: 3rem;
        }
        .project-link {
          color: ${blue};
          padding: 0.3rem 0 1.5rem 0;
          text-decoration: none;
          transition: 0.3s linear;
        }
        .project-link:hover {
          text-decoration: underline;
          transition: 0.3s linear;
        }
        img {
          width: 100%;
          border-radius: 0.5rem;
          box-shadow: 0px 0px 10px 1px #4a4a4b;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  )
}

export default Project

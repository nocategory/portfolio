import { blue } from '@components/constants'
import Image from '@components/Image'

const Project = ({ name, link, image, desc }) => {
  return (
    <div className="project">
      <h2>{name}</h2>
      <a href={link} className="project-link" target="_blank">
        {link.includes('github.com') ? 'View repo' : 'View website'}
      </a>
      <Image src={image} />
      <p>{desc}</p>
      <style jsx>{`
        .project {
          padding: 2rem;
          text-align: center;
        }
        .project p {
          opacity: 0.8;
          word-spacing: 0.1rem;
        }
        .project h2 {
          font-weight: 500;
          margin: 0 0 10px 0;
          font-size: 3rem;
        }
        .project-link {
          color: ${blue};
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

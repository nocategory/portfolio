import { light } from '@components/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Certificate = ({ name, icon, prefix, link, bgColor }) => {
  return (
    <a href={link} className="certificate-link" target="_blank">
      <div className="certificate">
        <FontAwesomeIcon
          icon={[prefix ? prefix : 'fab', icon]}
          size="1x"
          style={{ marginRight: '0.7rem' }}
        />
        {name}
        <style jsx>{`
          .certificate {
            padding: 1rem 2rem;
            margin: 2rem;
            text-align: left;
            color: ${light};
            background-color: ${bgColor};
            border-radius: 0.6rem;
            transition: 0.3s linear;
            text-align: center;
          }
          .certificate a:visited {
            color: ${light};
          }
          .certificate:hover {
            transition: 0.3s linear;
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </a>
  )
}

export default Certificate

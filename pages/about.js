import Layout from '@components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import BracesText from '@components/BracesText'
import { light } from '@components/constants'

const About = () => (
  <Layout bgColor={light} theme="light">
    <div className="text-area">
      <BracesText fontSize="3rem">about me</BracesText>
      <p>
        <b>Howdy mates!</b> My name is João and I'm an avid lover of programming
        in general, with a special focus on the Web front-end side, having
        previously worked as a Junior Software Developer. Recently I've been
        focusing on better understanding how <b>React</b> works under the hood
        and better practices to improve on my already existing knowledge of it
        with the help of some courses such as Cassidy's{' '}
        <a href="https://scrimba.com/course/greusablereact/" target="_blank">
          amazing advanced tutorial
        </a>{' '}
        on reusable React.
      </p>
      <p>
        I've also been looking into mobile development more and more due to how
        big the mobile landscape is nowadays, and these are in my opinion some
        of the most precious qualities in this industry: the will to learn &
        change, the curiosity, the 🔥 <b>inside your soul</b>!
      </p>
      <p>
        Now in a more calm note, I believe the above are some of my biggest
        qualities, together with the fact that I'm quite a <b>fast learner</b>{' '}
        to a point where you can just give me the documentation link to
        something I've never worked with, tell me to do something with it and
        I'll get it done <strike>in less than 10 minutes</strike>, maybe not
        with the <b>best practices (that I try to always achieve)</b> but...{' '}
        <i>
          <b>I know how to Google</b>
        </i>
        . Which, in my opinion, is a veeeery important skill
      </p>
      <p>
        You can check me out on the platforms below & email me at{' '}
        <strike><a href="mailto:me@nocategory.dev">me@nocategory.dev</a></strike><a href="mailto:nocategory@pm.me">nocategory@pm.me</a>
      </p>
      <div
        className="social-wrapper"
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          textAlign: 'center',
          marginBottom: '8rem',
        }}
      >
        <a href="https://github.com/nocategory" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
        </a>
        <a href="https://www.linkedin.com/in/jfilsalgueiro/" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
        </a>
        <a href="https://twitter.com/_nocategory" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" />
        </a>
      </div>
    </div>
    <style jsx>{`
      p {
        font-size: 1.3rem;
      }
      .text-area {
        max-width: 60%;
      }
      @media only screen and (max-width: 1270px) {
        .text-area {
          max-width: 80%;
        }
      }
      @media only screen and (max-width: 600px) {
        .text-area {
          max-width: 95%;
        }
        p {
          font-size: 1.2rem;
        }
      }
    `}</style>
  </Layout>
)

export default About

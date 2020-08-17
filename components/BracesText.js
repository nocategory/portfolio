const IntroText = ({ fontSize = '2rem', children }) => (
  <>
    <p style={{ fontSize, margin: 0 }}>
      {'{'} {children} {'}'}
    </p>

    <style jsx>{`
      p {
        font-weight: 200;
      }
    `}</style>
  </>
)

export default IntroText

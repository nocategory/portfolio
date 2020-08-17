const IntroText = ({ fontSize, children }) => (
  <>
    <p style={{ fontSize, margin: 0 }}>
      {'{'} {children} {'}'}
    </p>

    <style jsx>{`
      p {
        font-size: 2rem;
        font-weight: 300;
      }
    `}</style>
  </>
)

export default IntroText

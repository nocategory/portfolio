const BracesText = ({ fontSize = '2rem', children }) => (
  <>
    <p style={{ margin: 0 }}>
      {'{'} {children} {'}'}
    </p>

    <style jsx>{`
      p {
        font-weight: 200;
        font-size: ${fontSize};
      }
      @media screen and (max-width: 700px) {
        p {
          font-size: calc(${fontSize} - 1rem);
        }
      }
    `}</style>
  </>
)

export default BracesText

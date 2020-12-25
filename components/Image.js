import { useRef, useEffect } from 'react'

const Image = ({ src }) => {
  const foregroundImage = useRef()
  const backgroundImage = useRef()

  useEffect(() => {
    backgroundImage.current.style.opacity = 0
  }, [foregroundImage])

  return (
    <div className="image-container">
      <img
        className="background"
        ref={backgroundImage}
        src={require(`images/${src}?lqip`)}
      />
      <img
        className="foreground"
        ref={foregroundImage}
        src={require(`images/${src}?webp`)}
      />
      <style jsx>{`
        /* big thanks to https://stackoverflow.com/a/48877138 */
        .background,
        .foreground {
          box-sizing: border-box;
          flex: none;
          max-width: 80%;
        }
        .background {
          border-radius: 0.5rem;
          width: 80%;
          position: absolute;
          top: 0;
          opacity: 1;
          transition: opacity 300ms linear;
        }
        .image-container {
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default Image

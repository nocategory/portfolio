const Image = ({ src }) => {
  return (
    <div className="image-container">
      <img className="background" src={require(`images/${src}?lqip`)} />
      <img className="foreground" src={require(`images/${src}?webp`)} />
      <style jsx>{`
        /* big thanks to https://stackoverflow.com/a/48877138 */
        .background,
        .foreground {
          box-sizing: border-box;
          width: 100%;
          flex: none;
        }
        .foreground {
          margin-left: -100%;
          box-shadow: 0px 0px 10px 1px #4a4a4b;
        }
        .image-container {
          display: flex;
          flex-flow: row nowrap;
        }
        img {
          width: 100%;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
      `}</style>
    </div>
  )
}

export default Image

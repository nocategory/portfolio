import Image from 'next/image'

const Img = ({ src }) => {
  return (
    <div className="image-container">
      <Image
        className="image"
        src={`/${src}`}
        layout="responsive"
        width={1363}
        height={967}
        quality={85}
      />
      <style jsx>{`
        .image {
          box-sizing: border-box;
          flex: none;
          max-width: 80%;
        }
        .image-container {
          width: 80%;
        }
      `}</style>
    </div>
  )
}

export default Img

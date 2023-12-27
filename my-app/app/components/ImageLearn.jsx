 import Image from "next/image"
 import MyImage from "../../public/IMG_20201129_100214.jpg"

const ImageLearn = () => {
  return (
    <>
        <Image  src={MyImage} width={200} height={300} />
    </>
  )
}

export default ImageLearn

import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"

const makeImg = (i: number) => ({
  original: `static/location/${i}.jpg`,
  originalAlt: "Retreat Location",
  thumbnail: `static/location/${i}_tn.jpg`,
  thumbnailAlt: "Retreat Location"
})

const images = Array.from(Array(10).keys()).map(i => makeImg(i))

export default () => (
  <ImageGallery lazyLoad showPlayButton={false} items={images} />
)

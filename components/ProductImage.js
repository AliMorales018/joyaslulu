import { useState, useRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images[0].node)
  const ref = useRef()

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
      <div className="relative h-40">
        <Image
          src={mainImg.originalSrc}
          alt={mainImg.altText}
          layout="fill"
          className="transform duration-500 ease-in-out hover:scale-105"
        />
      </div>
      <div className="relative flex border-t border-palette-lighter">
        <button
          aria-label="left-scroll"
          className="h-12 bg-palette-lighter hover:bg-palette-light focus:outline-none absolute left-0 z-10 opacity-75"
          onClick={() => scroll(-300)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1 text-palette-primary" />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex space-x-1 w-full overflow-auto border-t border-palette-lighter"
          //grande -- h-64
          //pequeño -- h-32--w-40
        >
          {
            images.map((imgItem, index) => (
              <button
                key={index}
                className="relative w-10 h-12 mx-6 flex-shrink-0 rounded-sm focus:outline-none"
                onClick={() => setMainImg(imgItem.node)}
              >
                <Image
                  src={imgItem.node.originalSrc}
                  alt={imgItem.node.altText}
                  layout="fill"
                  className=""
                />
              </button>
            ))
          }
        </div>
        <button
          aria-label="right-scroll"
          className="h-12 bg-palette-lighter hover:bg-palette-light focus:outline-none absolute right-0 z-10 opacity-75"
          onClick={() => scroll(300)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1 text-palette-primary" />
        </button>
      </div>
    </div>
  )
}

export default ProductImage

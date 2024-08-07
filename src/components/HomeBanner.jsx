import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { Image } from 'react-bootstrap';

const HomeBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
      <Image src={"https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.webp?b=1&s=170667a&w=0&k=20&c=ODFMGn1FLGl-xXAqS-GDEUBmhnqTD9PZ85yhhD2fDnE="} alt="" className='width-100' height='auto'  />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpuvIwW8tVBl3j7z9IEUQ6Iq79goxG4FrERQ&s"} alt="" className='width-100' height='auto'  />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={"https://media.istockphoto.com/id/493029628/photo/set-of-decorative-cosmetic.jpg?s=612x612&w=0&k=20&c=JYxqtgYkpBD-tITJJ60ex_04bEi52uHCEJDFuOlKaNA="} alt="" className='width-100' height='auto' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeBanner

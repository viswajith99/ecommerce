import HomeBanner from "../components/HomeBanner"
import React from "react"
import LatestProducts from "../components/LatestProducts"
import { Container } from "react-bootstrap"
const Home = () => {
  return (
    <div>
          <HomeBanner/>
          <Container>
            <LatestProducts/>
          </Container>

    </div>


 
  )
}

export default Home

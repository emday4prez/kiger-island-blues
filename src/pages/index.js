import * as React from "react"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { css } from "@emotion/react"
import Hero from "../components/hero"
import { StaticImage } from "gatsby-plugin-image"
import "@fontsource/reenie-beanie"

// styles
const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  margin:0,
  boxSizing: "border-box",
  
}



// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>

      <title>Kiger Island Blues</title> 

     
      <Parallax pages={3} style={{ top: '0', left: '0' }}>
  <ParallaxLayer
    offset={0}
    speed={.5}
    
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'
    }}>
    
     <StaticImage src='../images/blues.jpg' alt="blueberries" layout="constrained" placeholder="blurred"/> 
     
    
     
    
    
    <ParallaxLayer offset={0} speed={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <h1 css={css`
    color:white;
    font-family: "Reenie Beanie", helvetica;
    font-size: 6rem;
    text-align: center;
 `}>Kiger Island Blues</h1> 
    <h2 css={css`
    color:white;
    font-family: "Reenie Beanie", helvetica;
    font-size: 4rem;
    text-align: center;
 `}>Hand Picked Blueberries</h2> 
    <h3 css={css`
    color:white;
    font-family: "Reenie Beanie", helvetica;
    font-size: 3rem;
    text-align: center;
 `}>Fresh From Willamette Valley</h3> 
 </ParallaxLayer>
    
 
  
  </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#3e46a5' }} >
  
 
  </ParallaxLayer>

  <ParallaxLayer
    offset={1}
    speed={0.5}
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
    }}>
    <p>Scroll up</p>
  </ParallaxLayer>
</Parallax>
    </main>
  )
}

export default IndexPage

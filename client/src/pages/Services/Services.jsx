import React from 'react'
import { cardData } from '../../components/constants/constant'
import { Card } from 'primereact/card'
import ControlledDemo from '../../components/controlledTab/ControlledTab'
import Footer from '../../components/Footer/Footer'

const Services = () => {
  return (
    <>
    <div style={{marginTop:"60vh"}}>
      <h1>Services</h1>
      <p>Our news and media information</p>
      <div className ='card service-card' >
          {cardData.map((data) => (
        <Card
        key={data.title}
        title={data.title}
        className="bg-cover relative flex-1"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
           // Adjust the card width as needed
          margin: "10px" // Add some margin between the cards
        }}
      >


      </Card>
      ))}
      </div>
      <ControlledDemo />
      
    </div>
    <Footer />
    </>
  )
}

export default Services

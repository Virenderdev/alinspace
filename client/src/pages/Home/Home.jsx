import React from 'react'
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { cardData } from '../../components/constants/constant';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <div style={{marginTop:"60vh"}}>
      <div className='aim ' >
        <div className='flex  justify-start align-items-start ' >
         <h1 className='home-heading fs-'>Spark new life into your systems using cutting-edge AI solutions</h1>
         </div>
         <div className="flex justify-content-evenly gap-3 buttons">
         <Button label="Lets talk" style={{marginRight:"20px"}}  />
         <Button label="Services" icon="pi pi-check" iconPos="right"  style={{marginRight:"10px"}}  />
         </div>
       </div>
       <div className='service-section'>
         <div>
            <h1>OUR  SERVICES</h1>
            <div className='card' style={{ display: 'flex', justifyContent: "center", flexWrap: "wrap", width: "100%" }}>
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
      <div className='w-2 h-2 border-2'>{data.feature1}</div>
      <div>{data.feature2}</div>
      <div>{data.feature3}</div>
      <div>{data.feature4}</div>
    </Card>
  ))}
</div>

         </div>
       </div>
       
      </div>
      
      <Footer />
      </>
  )
}

export default Home

// import React from 'react'
// import { useEffect,useState } from 'react'
import Card from 'react-bootstrap/card'
import '../CssFolder/jewelery.css'
import Usefetch from './Usefetch'
import { useNavigate } from 'react-router-dom'

const Jewellery = () => {
  const[jewel]=Usefetch("https://fakestoreapi.com/products")
const nav=useNavigate()
const Goto=(category,data)=>{
  nav(`/singleproduct/${category}/${data}`)
}

  return (
    <div className='jewellery'>
     <div className='innerjewel'>
     {jewel
      ?.filter((item)=>item.category==="jewelery")
      .map((item)=>(
        <Card key={item.id} className='category-card' >
          <Card.Img src={item.image} className='card-img'/>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Title>Price:{item.price} $</Card.Title>
            <button onClick={()=>Goto(item.category,item.id)}>View</button>

          </Card.Body>

        </Card>
      ))}
     </div>
    </div>
  )
}

export default Jewellery
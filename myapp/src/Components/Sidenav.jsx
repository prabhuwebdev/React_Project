import { useEffect, useState } from 'react';
import '../CssFolder/Sidenav.css';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import maleclothes from '../Images/male-clothes.jpg'
import { useNavigate } from 'react-router-dom';





const Sidenav = () => {
  const[value,setvalue]=useState()
  


  
// console.log(value)
  useEffect(()=>{
    const fetchitem=async()=>{
      try{
        const val=await fetch("https://fakestoreapi.com/products/categories")
        const data=await val.json()
        setvalue(data)
        console.log(data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchitem()
    

  },[])

  //to Navigate the products
  const Nav=useNavigate()

  const Goto=(value)=>{
    Nav(`/${value}`)
  }



  return (
    <div className='section'>
      <div className="image">
      
      </div>
      <div className="title">
        <h1>About Our Products</h1>
      </div>
      <div className='inner'>
        <div className='cards'>
        {value?.map((item,index)=>(
        <Card key={index} className='category-card'>
          <Card.Img src={maleclothes} className='card-img'/>
          <Card.Body className='card-body'>
            <Card.Title>{item.toUpperCase()}</Card.Title>
            <Card.Text>click to view {item} based products</Card.Text>
            <Button variant='primary' onClick={()=>Goto(item)}>Shop now</Button>
          </Card.Body>
        </Card>
      ))}
        </div>
      </div>
    </div>
  )
}

export default Sidenav


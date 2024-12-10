import { useEffect,useState } from "react"
import Card from 'react-bootstrap/Card'
import '../CssFolder/Women.css'
import { useNavigate } from "react-router-dom"

const Womens = () => {
  const[womencloth,setwomencloth]=useState([])
  useEffect(()=>{
    const fetchelec=async()=>{
      try{
        const val=await fetch("https://fakestoreapi.com/products")
        const data=await val.json()
        console.log(data)
        setwomencloth(data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchelec()
  },[])
  
  const nav=useNavigate()
  const Goto=(category,id)=>{
    nav(`/singleproduct/${category}/${id}`)
  }
  return (
    <div className="women">
      <div className="women1">
      {womencloth
      ?.filter((item)=>item.category==="women's clothing")
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

export default Womens
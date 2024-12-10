import Usefetch1 from "./Singlefetch"
import { useParams } from "react-router-dom";


const SingleProduct = () => {
    const {id,category}=useParams()
    const [data]=Usefetch1("https://fakestoreapi.com/products")
    const filteredData = data?.filter((item) => item.category === category);

    const val=filteredData?.find((item)=> item.id===parseInt(id))
  return (
    <div >
    {val?(
      <div className="single" style={{display:"flex", justifyContent:"space-evenly", height:"100vh"}}>
        <div className="inner">
          <img src={val.image}  style={{width:"300px", height:"300px"}}/>
        </div>
        <div style={{width:"500px"}}>
          <h2>{val.title}</h2>
          <p><h2>Specifications:</h2>{val.description}</p>
          <h1>PRICE:{val.price}$</h1>
        </div>

      </div>

        
        
    ):(
        <h1>data not found</h1>
    )}
    </div>
  )
}

export default SingleProduct
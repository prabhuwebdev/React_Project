import "../CssFolder/Header.css"
import { TbShoppingCartSearch } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
<CgProfile />


const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1><TbShoppingCartSearch/></h1>
        <h3>FABRICA</h3>
      </div>
      <div className="user">
      <input type="text"  placeholder="Search items..."/>
        <button>Sign-Up</button>
        <button>Login</button>

      </div>
      
    </div>
  )
}

export default Header
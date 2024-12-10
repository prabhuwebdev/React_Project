import {Outlet} from "react-router-dom"
// import Header from "./Header"
// import Footer from "./Footer"
import Sidenav from "./Sidenav"
const Layout = () => {
  return (
    <div className="layout">
    {/* <Header /> */}
    <section >
      <article>
      <Sidenav />
      
      <Outlet/>
      </article>
    </section>
    {/* <Footer /> */}
    </div>
  )
}

export default Layout
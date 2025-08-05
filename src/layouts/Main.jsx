import Logo from "../components/Logo/Logo"; 
import Nav from "../components/Nav/Nav"; 
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";   

export default function Main () {
  return (
      <>
        {/* Logo */}
        <Logo />
        
        {/* Nav */}
        <Nav />

        {/* children  */}
        <Outlet />

        {/* Footer */}
        <Footer /> 
      
      </>
  )
}